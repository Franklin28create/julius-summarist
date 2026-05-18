"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";



export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add your authentication logic here
  };

  return (
    <>
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain More Knowledge
                <br className="remove--tablet"/>
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy People,
                <br className="remove--tablet"/>
                individuals who barely have time to read,
                <br className="remove--tablet"/>
                and even people who don't like to read.
              </div>
              <button className="btn home__cta--btn" 
                    onClick={() => {
                    console.log("Button clicked!")
                    setIsModalOpen(true)}}>
                      Login
                    </button>
                    {isModalOpen && (
                      <AuthModal onClose={() => setIsModalOpen(false)} />
                    )}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
