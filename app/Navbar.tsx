"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Sign In
      </button>

      {isModalOpen && (
        <AuthModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}