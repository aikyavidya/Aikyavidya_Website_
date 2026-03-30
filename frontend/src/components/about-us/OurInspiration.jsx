import "./ourInspiration.css";
import { useEffect, useState, useRef } from "react";

/* 🔥 COUNTER COMPONENT */


function Counter({ target, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // ❌ don't run until visible

    let startVal = 0;
    const duration = 2000;
    const increment = target / (duration / 16);



    const timer = setInterval(() => {
      startVal += increment;

      if (startVal >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, start]);

  return <h2>{count}{suffix}</h2>;
}

function OurInspiration() {
    const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  /* 🔥 SCROLL DETECTION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // ✅ start animation
          observer.disconnect(); // ✅ run only once
        }
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="insp-page">

      {/* 🔥 HERO */}
      <section
        className="insp-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="insp-header-overlay">
          <h1>Our Inspiration</h1>
          <p>
            <span>Home</span> › <span className="active">Our Inspiration</span>
          </p>
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
       <section className="insp-section" ref={sectionRef}>
      <div className={`insp-container insp-grid ${visible ? "show" : ""}`}>

        {/* LEFT */}
        <div className="insp-left" data-aos="fade-right">
          <img
            src="/images/donation/inspiration.png"
            alt="Prabhupada"
          />

          <h4>His Divine Grace</h4>
          <h3>AC Bhaktivedanta Swami Prabhupada</h3>
          <h6>Founder-Acharya of the worldwide Hare Krishna Movement</h6>
        </div>

        {/* RIGHT */}
        <div className="insp-right" data-aos="fade-left">
          <p>
            Hare Krishna Movement (HKM) was founded by His Divine Grace
            A.C. Bhaktivedanta Prabhupada.
          </p>
          <p>
            He has been called a scholar, philosopher, cultural ambassador,
            prolific author and more.
          </p>
          <p>
            HKM is carrying out massive food distribution programs supported
            by governments and CSR funding.
          </p>
        </div>

      </div>
    </section>

      {/* 🔥 COUNTERS (SCROLL TRIGGERED) */}
      <section className="insp-stats" ref={statsRef}>
        <div className="insp-container stats-grid">

          <div className="stat">
            <Counter target={10} start={startCount} />
            <p>Years of <br /> Foundation</p>
          </div>

          <div className="stat">
            <Counter target={5000} suffix="+" start={startCount} />
            <p>Monthly <br /> Donors</p>
          </div>

          <div className="stat">
            <Counter target={1500} suffix="+" start={startCount} />
            <p>Incredible <br /> Volunteers</p>
          </div>

          <div className="stat">
            <Counter target={785} start={startCount} />
            <p>Successful <br /> Campaigns</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default OurInspiration;