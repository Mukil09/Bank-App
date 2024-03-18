import React, { useEffect, useState } from "react";
import { stats } from "../Constants/Main";
import styles from "../style";
import "./Reveal.css";

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionPassed, setIsSectionPassed] = useState(false);
  const [sectionBuffer, setSectionBuffer] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const statsSectionRect = statsSection.getBoundingClientRect();
        const buffer = 100;

        if (
          statsSectionRect.top >= 0 &&
          statsSectionRect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setIsVisible(true);
          setIsSectionPassed(false);
        } else if (
          !isSectionPassed &&
          statsSectionRect.top >
            (window.innerHeight || document.documentElement.clientHeight) +
              buffer
        ) {
          setIsVisible(false);
          setIsSectionPassed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSectionPassed, sectionBuffer]);

  return (
    <section
      id="stats-section"
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-6`}
    >
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className={`stats-item ${
              isVisible ? "stats-item-visible" : "stats-item-hidden"
            } flex flex-1 justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins  font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase  ml-6">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default Stats;
