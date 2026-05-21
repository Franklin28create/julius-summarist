"use client"; // Required for handling state like password matching

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      console.log("New user:", result.user);
    } catch (error) {
      console.error("Sign up error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <h2 className="text-xl font-bold">Create Account</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          required
          className="border p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          required
          className="border p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        {/* Sign On Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign On
        </button>
      </form>
    </div>
  );
}