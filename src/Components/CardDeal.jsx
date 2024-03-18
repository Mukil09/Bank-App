import React, { useState, useEffect } from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

function CardDeal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionPassed, setIsSectionPassed] = useState(false);
  const [sectionBuffer, setSectionBuffer] = useState(400);

  const handleScroll = () => {
    const cardDealSection = document.getElementById("cardDeal");
    if (cardDealSection) {
      const rect = cardDealSection.getBoundingClientRect();
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
    <section id="cardDeal" className={layout.section}>
      <div
        className={`${layout.sectionInfo} feature-item ${
          isVisible ? "feature-visible" : "feature-hidden"
        }`}
      >
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px]  mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          doloremque excepturi aspernatur veniam, facere commodi beatae et,
          quasi fugit architecto sint aperiam
        </p>
        <Button styles="mt-10" />
      </div>
      <div
        className={`${layout.sectionImg} feature-item-right ${
          isVisible ? "feature-visible-right" : "feature-hidden-right"
        }`}
      >
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
