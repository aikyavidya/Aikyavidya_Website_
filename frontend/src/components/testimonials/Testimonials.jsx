import "./testimonials.css";
import { useState } from "react";

const data = [
  {
    text: `I am from Ahobilam Village. my father is a daily labour, my mother is a house help. I am studying 9th standard in Girijana Ashrama Paatashala. They help me in completing my homework.`,
    name: "Arun Nayak",
    role: "Student at AIKYA",
    img: "/public/images/st1.webp",
  },
  {
    text: `After joining AIKYA Vidya, I became more confident and can now complete my homework independently. Yoga and meditation helped me a lot.`,
    name: "Pravalika",
    role: "Student at AIKYA",
    img: "/public/images/st2.webp",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);

  return (
    <section className="testimonials">

      <div className="test-container">

        {/* LEFT */}
        <div className="left">
          <span className="subtitle">TESTIMONIALS</span>

          <h2>
            What People and Students Say <br />
            About AIKYA VIDYA
          </h2>

          <p>
            What AIKYA believes is that when children are taught a value based
            education they will be helpful to the society at large.
          </p>

          <a href="/donations" className="btn">
            DONATE NOW
          </a>
        </div>

        {/* RIGHT */}
        <div className="right">

          <div className="card">
            <div className="quote">❝</div>

            <p>{data[index].text}</p>

            <div className="user">
              <img src={data[index].img} alt="" />
              <div>
                <h4>{data[index].name}</h4>
                <span>{data[index].role}</span>
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <div className="controls">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>

        </div>

      </div>

    </section>
  );
}