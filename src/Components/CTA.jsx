import React, { useState, useEffect } from "react";
import styles from "../style";
import Button from "./Button";

function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionPassed, setIsSectionPassed] = useState(false); // Added state to track passing
  const [sectionBuffer, setSectionBuffer] = useState(100); // Buffer zone for smooth scrolling

  const handleScroll = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      const rect = ctaSection.getBoundingClientRect();
      const buffer = sectionBuffer; // Use pre-defined buffer

      if (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setIsVisible(true);
        setIsSectionPassed(false);
      } else if (
        !isSectionPassed &&
        rect.top >
          (window.innerHeight || document.documentElement.clientHeight) + buffer
      ) {
        // Increased check by buffer amount to avoid triggering on quick scrolls
        setIsVisible(false);
        setIsSectionPassed(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSectionPassed, sectionBuffer]); // Added sectionBuffer to dependency array

  return (
    <section
      id="cta-section"
      className={`${styles.flexCenter} ${styles.marginY} ${
        styles.padding
      } cta-item ${
        isVisible ? "cta-visible" : "cta-hidden"
      } sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className={`flex flex-1 flex-col`}>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          dolorum illo, delectus numquam dicta beatae ipsam quod eaque velit
          voluptatibus dignissimos soluta repe...
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
}

export default CTA;
