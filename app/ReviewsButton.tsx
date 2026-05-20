"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function ReviewsButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  return (
    <div>
    <button
    className="btn home__cta--btn"
    onClick={() => {    
    setIsModalOpen(true);
    }}
    >
        Login
    </button>
    {isModalOpen && (
        <AuthModal onClose={() => setIsModalOpen(false)} />
    )}
    </div>
  );
}
