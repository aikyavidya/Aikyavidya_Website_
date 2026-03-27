import "./board.css";

const trustees = [
  {
    name: "Padma Shri HG Madhu Pandit Dasa",
    desc: `M.Tech in Civil Engineering from IIT-Bombay
Trustee and Chairman of The Akshaya Patra Foundation
Chairman and Mentor, Global Hare Krishna Movement
President of ISKCON Bangalore
Chairman of Vrindavan Chandrodaya Mandir and India Heritage Foundation
Awards: Padma Shri, Gandhi Peace Prize, National Award for Child Welfare, Nikkie Asia Prize and Distinguished Alumnus Award by IIT-Bombay`,
    img: "/images/donation/t1.png",
  },
  {
    name: "HG Chanchalapathi Dasa",
    desc: `Masters from Indian Institute of Science, Bangalore
Vice Chairman of Akshaya Patra
Senior Vice President of ISKCON Bangalore
President of Vrindavan Chandrodaya Mandir
Vice Chairman of the Governing Body Committee`,
    img: "/images/donation/t2.png",
  },
  {
    name: "HG Satya Gaura Chandra Dasa",
    desc: `M-Tech - IIT Chennai
President - Hare Krishna Golden Temple
Regional President - Akshayapatra Foundation, Telangana & Andhra Pradesh
President - Hare Krishna Vidya`,
    img: "/images/donation/t3.png",
  },
  {
    name: "HG Suvyakta Narasimha Dasa",
    desc: `BE Mechanical
President - Hare Krishna Movement Chennai`,
    img: "/images/donation/t4.png",
  },
  {
    name: "HG Niskinchana Bhakta Dasa",
    desc: `MBBS
President - Hare Krishna Movement Vizag
Unit President - The Akshaya Patra Foundation - Visakhapatnam, Srikakulam & Kakinada`,
    img: "/images/donation/t5.png",
  },
];

function BoardOfTrustees() {
  return (
    <div className="trustees-page">

      {/* HERO */}
      <section
        className="trustees-header"
        style={{
          backgroundImage:
            "url(https://aikyavidya.org/new/wp-content/uploads/2023/12/bredcrumb2.jpg)",
        }}
      >
        <div className="trustees-overlay">
          <h1>Board of Trustees</h1>
          <p>
            <span>Home</span> › <span className="active">Board of Trustees</span>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="trustees-section">
        <div className="trustees-container">

          <h2 className="trustees-title">Trustees</h2>

          {trustees.map((item, index) => (
            <div
              key={index}
              className="trustee-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={item.img} alt={item.name} />

              <div className="trustee-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default BoardOfTrustees;