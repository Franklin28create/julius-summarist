"use client";

import { useEffect, useState } from "react";

export default function Statistics() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="statistics__wrapper">
      <div className="statistics__content--header">
        <div className={`statistics__heading ${activeIndex === 0 ? "statistics__heading--active" : ""}`}>
          Expand your learning
        </div>
        <div className={`statistics__heading ${activeIndex === 1 ? "statistics__heading--active" : ""}`}>
          Accomplish your goals
        </div>
        <div className={`statistics__heading ${activeIndex === 2 ? "statistics__heading--active" : ""}`}>
          Strengthen your vitality
        </div>
        <div className={`statistics__heading ${activeIndex === 3 ? "statistics__heading--active" : ""}`}>
          Become a better caregiver
        </div>
        <div className={`statistics__heading ${activeIndex === 4 ? "statistics__heading--active" : ""}`}>
          Improve your mood
        </div>
        <div className={`statistics__heading ${activeIndex === 5 ? "statistics__heading--active" : ""}`}>
          Maximize your abilities!
        </div>
      </div>
      {/* keep your statistics details box here */}
    </div>
  );
}