// import { useState } from "react";
// import SignUpFormModal from "./SignUpFormModal";

// export default function GetStartedModal({ onClose }: { onClose: () => void }) {
//   const [showSignUpModal, setShowSignUpModal] = useState(false);

//   return (
//     <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
//       <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
//         <h2 className="text-2xl font-semibold text-green-700">
//           Get Started with Fitsnap
//         </h2>
//         <p className="mt-3 text-gray-600">
//           Welcome to your fitness journey. Sign up now to get started!
//         </p>
//         <div className="mt-6">
//           <button
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg"
//             onClick={() => {
//               setShowSignUpModal(true);
//             }}
//           >
//             Sign Up Now
//           </button>
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-4 text-gray-500 hover:text-red-500 transition"
//         >
//           Close
//         </button>
//       </div>

//       {/* SignUp Modal Açıldığında Bunu Göster */}
//       {showSignUpModal && (
//         <SignUpFormModal
//           onClose={() => {
//             setShowSignUpModal(false);
//             onClose(); // GetStartedModal'ı da kapat
//           }}
//         />
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import SignUpFormModal from "./SignUpFormModal";

export default function GetStartedModal({ onClose }: { onClose: () => void }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
      <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-semibold text-green-700">
          Get Started with Fitsnap
        </h2>
        <p className="mt-3 text-gray-600">
          Welcome to your fitness journey. Sign up now to get started!
        </p>
        <div className="mt-6">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            onClick={() => {
              setShowSignUpModal(true);
            }}
          >
            Sign Up Now
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-red-500 transition"
        >
          Close
        </button>
      </div>

      {/* SignUp Modal Açıldığında Bunu Göster */}
      {showSignUpModal && (
        <SignUpFormModal
          onClose={() => {
            setShowSignUpModal(false);
            onClose(); // GetStartedModal'ı da kapat
          }}
        />
      )}
    </div>
  );
}
