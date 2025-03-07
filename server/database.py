from pymongo import MongoClient
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
MONGO_URI ="mongodb+srv://elifesratunca:GAb4qyQlmz7tZMGv@cluster0.viicw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)

db = client["fastapi_db"]  # Veritabanı oluştur
users_collection = db["users"]  # Kullanıcıları saklayacak koleksiyon
# S97W2AoVeH57Mekz
# elifesratunca

# Create a new client and connect to the server
client = MongoClient(MONGO_URI, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)