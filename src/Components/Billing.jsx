import React, { useState, useEffect } from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import "./Reveal.css";

function Billing() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionPassed, setIsSectionPassed] = useState(false);
  const [sectionBuffer, setSectionBuffer] = useState(400);

  const handleScroll = () => {
    const billingSection = document.getElementById("product");
    if (billingSection) {
      const rect = billingSection.getBoundingClientRect();
      const buffer = sectionBuffer;

      if (rect.top >= -buffer && rect.bottom <= window.innerHeight + buffer) {
        setIsVisible(true);
        setIsSectionPassed(false);
      } else if (!isSectionPassed && rect.top > window.innerHeight + buffer) {
        setIsVisible(false);
        setIsSectionPassed(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSectionPassed, sectionBuffer]);
  return (
    <section id="product" className={layout.sectionReverse}>
      <div
        className={`${layout.sectionImgReverse} feature-item ${
          isVisible ? "feature-visible" : "feature-hidden"
        }`}
      >
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className=" absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className=" absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div
        className={`${layout.sectionInfo} feature-item-right ${
          isVisible ? "feature-visible-right" : "feature-hidden-right"
        }`}
      >
        <h2 className={styles.heading2}>
          Easily control your billing <br className="sm:block hidden" /> &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quia
          aut commodi doloremque animi quae repellat ducimus, inventore ut ad,
          veritatis ab
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-2">
          <img
            src={apple}
            alt="apple"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
