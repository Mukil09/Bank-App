import React, { useEffect, useState, useRef } from "react";
import { features } from "../Constants/Main";
import styles, { layout } from "../style";
import Button from "./Button";

function FeatureCard({ icon, title, content, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-2" : "mb-0"
      } feature-card feature-item-right ${
        isVisible ? "feature-visible-right" : "feature-hidden-right"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className=" flex flex-1 flex-col ml-3">
        <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className=" font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
}

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
          inventore consequatur sapiente, odit nisi vitae molestiae molestias
          deserunt .
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
