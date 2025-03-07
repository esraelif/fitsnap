import React, { useState } from "react";
import GetStartedModal from "./GetStartedModal";

export default function App() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowGetStartedModal(true)}>Get Started</button>

      {showGetStartedModal && (
        <GetStartedModal onClose={() => setShowGetStartedModal(false)} />
      )}
    </div>
  );
}
