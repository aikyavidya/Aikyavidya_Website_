import "./testimonials.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    text: `I am from Ahobilam Village. my father is a daily labour, my mother is a house help. I am studying 9th standard in Girijana Ashrama Paatashala. They help me in completing my homework.`,
    name: "Arun Nayak",
    role: "Student at AIKYA",
    img: "/images/st1.webp",
  },
  {
    text: `After joining AIKYA Vidya, I became more confident and can now complete my homework independently. Yoga and meditation helped me a lot.`,
    name: "Pravalika",
    role: "Student at AIKYA",
    img: "/images/st2.webp",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % data.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const next = () => setIndex((currentIndex) => (currentIndex + 1) % data.length);
  const prev = () => setIndex((currentIndex) => (currentIndex - 1 + data.length) % data.length);

  return (
    <section className="testimonials">

      <div className="test-container">

        {/* LEFT */}
        <div className="left" data-aos="fade-right">
          <span className="subtitle">TESTIMONIALS</span>

          <h2>Real Stories, Real Experiences: AIKYA VIDYA</h2>

          <p>
            What AIKYA believes is that when children are taught a value based
            education they will be helpful to the society at large.
          </p>

          

<Link to="/donation" className="btn">
  DONATE NOW ❤
</Link>
        </div>

        {/* RIGHT */}
        <div
          className="right"
          data-aos="fade-left"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
          role="region"
          aria-label="Testimonials"
          aria-roledescription="carousel"
        >

          <div className="card">
            <div className="quote">❝</div>

            <p>{data[index].text}</p>

            <div className="user">
              <img src={data[index].img} alt={data[index].name} loading="lazy" decoding="async" />
              <div>
                <h4>{data[index].name}</h4>
                <span>{data[index].role}</span>
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <div className="controls">
            <button type="button" onClick={prev} aria-label="Previous testimonial">←</button>
            <button type="button" onClick={next} aria-label="Next testimonial">→</button>
          </div>

        </div>

      </div>

    </section>
  );
}