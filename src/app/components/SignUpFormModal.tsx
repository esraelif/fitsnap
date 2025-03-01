import React from "react";

interface SignUpFormModalProps {
  onClose: () => void; // onClose bir fonksiyon ve geriye bir şey döndürmüyor (void)
}

export default function SignUpFormModal({ onClose }: SignUpFormModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-blue-600 text-center">
          Create an Account
        </h2>
        <form className="mt-6 space-y-4 text-black">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-black hover:text-red-500 transition w-full text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
