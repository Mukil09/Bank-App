import React from "react";
import { clients } from "../Constants/Main";
import styles from "../style";

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-2`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] my-3`}
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
