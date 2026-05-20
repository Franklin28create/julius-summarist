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
    <>
        <div className={`statistics__heading ${activeIndex === 0 ? "statistics__heading--active" : ""}`}>
          Enhance your knowledge
        </div>
        <div className={`statistics__heading ${activeIndex === 1 ? "statistics__heading--active" : ""}`}>
          Achieve greater success
        </div>
        <div className={`statistics__heading ${activeIndex === 2 ? "statistics__heading--active" : ""}`}>
          Improve your health
        </div>
        <div className={`statistics__heading ${activeIndex === 3 ? "statistics__heading--active" : ""}`}>
          Develop better parenting skills
        </div>
        <div className={`statistics__heading ${activeIndex === 4 ? "statistics__heading--active" : ""}`}>
          Increase happiness
        </div>
        <div className={`statistics__heading ${activeIndex === 5 ? "statistics__heading--active" : ""}`}>
          Be the best version of yourself!
        </div>
      {/* keep your statistics details box here */}
      
    </>
  );
}