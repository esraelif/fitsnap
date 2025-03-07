import jwt
from datetime import datetime, timedelta
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from fastapi.middleware.cors import CORSMiddleware
from database import users_collection 




# Gizli anahtar ve algoritma ayarları
# SECRET_KEY = "your_secret_key_here"
SECRET_KEY = "4ad4a8f3fe3b4d349c83f0a35114b4c07f63f9a09ebf5a230d57fbb6f8253021"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Token'ın geçerlilik süresi
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Kullanıcı modelinin tanımlanması
class User(BaseModel):
    full_name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# FastAPI uygulaması
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL'si
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# In-memory veritabanı (kayıtlı kullanıcılar)
user_db = []

# Güvenlik ve doğrulama
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


# -- Yardımcı Fonksiyonlar --
def get_user_from_db(email: str) -> dict:
    """Veritabanından email ile kullanıcıyı al."""
    for user in user_db:
        if user["email"] == email:
            return user
    return None


def create_jwt_token(data: dict, expires_delta: timedelta = None) -> str:
    """JWT token oluşturur."""
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

#***************************************

def decode_jwt_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token"
        )

#*********************************************
# -- API Endpoints --
# @app.post("/signup")
# async def create_account(user: User):
#     """Yeni kullanıcı kaydını oluşturur."""
#     if get_user_from_db(user.email):
#         raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User with this email already exists")

#     # Kullanıcıyı veritabanına ekle
#     user_db.append(user.dict())  # Veritabanına kullanıcıyı ekler
#     return {"message": "User registered successfully", "user": user}
@app.post("/signup")
async def create_account(user: User):
    """Yeni kullanıcı kaydını MongoDB'ye ekler."""
    existing_user = users_collection.find_one({"email": user.email})
    
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already exists")
    
    users_collection.insert_one(user.dict())  # Kullanıcıyı MongoDB'ye ekle
    return {"message": "User registered successfully"}
#*****************************************************

# @app.post("/login")
# async def login(user: UserLogin):
#     """Kullanıcı girişi ve JWT token oluşturma."""
#     db_user = get_user_from_db(user.email)
#     if db_user is None or db_user["password"] != user.password:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
#     # Kullanıcı doğrulandı, JWT token oluştur
#     access_token = create_jwt_token(data={"sub": user.email})
#     return {"access_token": access_token, "token_type": "bearer"}
@app.post("/login")
async def login(user: UserLogin):
    """Kullanıcı girişi ve JWT token oluşturma."""
    db_user = users_collection.find_one({"email": user.email})
    
    if not db_user or db_user["password"] != user.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    access_token = create_jwt_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

#*****************************************
# @app.get("/users")
# async def get_users(current_user: str = Depends(oauth2_scheme)):
# # @app.get("/users", response_model=List[User])
# # async def get_users(token: str = Depends(oauth2_scheme)):
#     """JWT ile doğrulama yaparak tüm kullanıcıları gösterir."""
#     decoded_user = decode_jwt_token(current_user)
#     if not decoded_user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
    
#     return {"message": f"Welcome {decoded_user['sub']}!", "users": user_db}
#--------------------------------------
# @app.get("/users")
# async def get_users(current_user: str = Depends(oauth2_scheme)):
#     """JWT ile doğrulama yaparak tüm kullanıcıları gösterir."""
#     decoded_user = decode_jwt_token(current_user)  # token'ı decode et
#     if not decoded_user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")

#     # Kullanıcıyı bulup veritabanından dönebilirsiniz.
#     return {"message": f"Welcome {decoded_user['sub']}!", "users": user_db}
@app.get("/users")
async def get_users(current_user: str = Depends(oauth2_scheme)):
    """JWT ile doğrulama yaparak tüm kullanıcıları gösterir."""
    decoded_user = decode_jwt_token(current_user)

    if not decoded_user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
    
    users = list(users_collection.find({}, {"_id": 0}))  # Kullanıcı listesini al
    return {"message": f"Welcome {decoded_user['sub']}!", "users": users}
#**************************************************


# -- Fonksiyonlar için bağımlılıklar --
def get_current_user(token: str = Depends(oauth2_scheme)):
    """Token doğrulama ve geçerli kullanıcıyı almak için yardımcı fonksiyon."""
    decoded_user = decode_jwt_token(token)
    if not decoded_user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials")
    return decoded_user['sub']

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token is invalid",
            )
        return username
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token is invalid or expired",
        )
