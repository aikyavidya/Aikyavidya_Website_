import "./ourTrust.css";
import { useEffect, useRef, useState } from "react";

function OurTrust() {

    const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);

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

  return (
    <div className="trust-page">

      {/* HERO */}
      <section
        className="trust-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="trust-header-overlay">
          <h1>Our Trust</h1>
          <p>
            <span>Home</span> › <span className="active">Our Trust</span>
          </p>
        </div>
      </section>

      {/* MAIN */}
       <section className="trust-section" ref={sectionRef}>
        <div className={`trust-container trust-grid ${visible ? "show" : ""}`}>

          {/* LEFT (VIDEO CARD) */}
          <div className="trust-left" onClick={() => setOpenVideo(true)}>
            <img
              src="\images\purpose_thumbnail.webp"
              alt=""
            />
            <div className="play-btn">▶</div>
          </div>

          {/* RIGHT */}
          <div className="trust-right">
            <h2>Empowering Post-school Education</h2>

            <p>
              AIKYA VIDYA is empowering underprivileged children from rural
              areas by providing them with post-school free education,
              food and values.
            </p>

            <p>
              It is our endeavour to provide the anchor in the lives of children
              and help them understand their purpose.
            </p>
          </div>

        </div>
      </section>
         {/* VIDEO MODAL */}
      {openVideo && (
        <div className="video-modal" onClick={() => setOpenVideo(false)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/277t-iPOApU?autoplay=1"
              title="video"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}

      {/* ACCORDION */}
      <section className="trust-accordion">
        <div className="trust-container">

          {[
            {
              title: "Our Purpose",
              content:
                "The purpose of education is to develop comprehensive knowledge and a well-balanced outlook on life.",
            },
            {
              title: "Vision",
              content:
                "A commitment to a strong nation by ensuring Food, Education & Values.",
            },
            {
              title: "Mission",
              content: "To reach 1000 villages by the year 2030.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="accordion-title">
                {item.title}
                <span>{active === index ? "−" : "+"}</span>
              </div>

              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default OurTrust;