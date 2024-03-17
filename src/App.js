import React from "react";
import styles from "./style";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Billing from "./Components/Billing";
import Business from "./Components/Business";
import Button from "./Components/Button";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import FeedbackCard from "./Components/FeedbackCard";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
