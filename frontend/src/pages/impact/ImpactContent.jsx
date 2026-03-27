import React, { useEffect, useState } from "react";
import "./ImpactContent.css";

/* 🔥 COUNTER COMPONENT */
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h1>
      {count.toLocaleString()}
      {suffix}
    </h1>
  );
};

const ImpactContent = () => {
  return (

    
 <div className="impact-page">

    {/* HERO */}
      <section
        className="impact-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Impact</h1>
          <p>
            <span > Home </span> › <span className="active">Impact</span>
          </p>
        </div>
      </section>


    <section className="impact-section">


      {/* TITLE */}
      <h2 className="impact-title">A Resonating Impact</h2>

      {/* ROW */}
      <div className="impact-row">

        {/* LEFT TEXT */}
        <div className="impact-col text">
          <p>
            <b>AIKYA VIDYA</b> is currently operational across 70 centres
            nurturing 1600+ children. Farther away, the program has entered
            the lives of Chenchu tribes of the Nallamalla forests and slums
            of Hyderabad and many villages in Telangana and Andhra Pradesh.
          </p>

          <p>
            Many underprivileged & tribal children from these areas have
            benefited by attending these sessions. The outcomes have been
            heartening and impels us to do more, giving a fillip to efforts.
          </p>
        </div>

        {/* CENTER */}
        <div className="impact-col counter">
          <Counter end={70} />
          <span>CENTERS</span>
        </div>

        {/* RIGHT */}
        <div className="impact-col counter">
          <Counter end={1600} suffix="+" />
          <span>CHILDREN</span>
        </div>

      </div>

      {/* IMAGE */}
      <div className="impact-image">
        <img
          src="images/bg/ak2546.jpg"
          alt="impact"
        />
      </div>

    </section>

    </div>
  );
};

export default ImpactContent;