// import React, { useState } from "react";

// interface SignUpFormModalProps {
//   onClose: () => void;
// }

// export default function SignUpFormModal({ onClose }: SignUpFormModalProps) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(""); // API cevabı için state

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submit edildi...");

//     try {
//       const response = await fetch("http://127.0.0.1:8000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ full_name: fullName, email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("✅ Registration successful!");
//         setTimeout(() => onClose(), 2000); // 2 saniye sonra modal kapansın
//       } else {
//         setMessage(`❌ Error: ${data.detail}`);
//       }
//     } catch (error) {
//       console.error("API çağrısında bir hata oluştu: ", error);
//       setMessage("❌ Hata: API'ye ulaşılamıyor.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
//         >
//           ✖
//         </button>

//         <h2 className="text-xl font-semibold text-blue-600 text-center">
//           Create an Account
//         </h2>

//         {/* API Cevabı */}
//         {message && <p className="text-center mt-2 text-sm">{message}</p>}

//         <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

interface SignUpFormModalProps {
  onClose: () => void;
}

export default function SignUpFormModal({ onClose }: SignUpFormModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful!");
        setTimeout(() => onClose(), 2000); // 2 saniye sonra her iki modalı da kapat
      } else {
        setMessage(`❌ Error: ${data.detail}`);
      }
    } catch (error) {
      setMessage("❌ Network error, please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
        >
          ✖
        </button>

        <h2 className="text-xl font-semibold text-blue-600 text-center">
          Create an Account
        </h2>

        {message && <p className="text-center mt-2 text-sm">{message}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
