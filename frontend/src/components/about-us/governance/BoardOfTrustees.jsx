import "./board.css";

const trustees = [
  {
    name: "HG Chanchalapathi Dasa",
    role: "Vice Chairman - Akshaya Patra",
    desc: `Chanchalapathi Dasa has been working in the field of spiritual education since 1984 and social development since 2000. He pursued his Bachelor's degree and later completed his Masters from IISc Bangalore. He is actively involved in governance and planning of Akshaya Patra.`,
    img: "/images/donation/Chanchalapathi-dasa.webp",
  },
  {
    name: "HG Amitasana Dasa",
    role: "President - Hare Krishna Movement Mumbai",
    desc: `Amitasana Dasa is the President of Hare Krishna Movement Mumbai and leads Akshaya Patra operations in Maharashtra. He has guided youth and professionals across India towards a balanced and fulfilling life.`,
    img: "/images/donation/amitasana-dasa.webp",
  },
];

function BoardOfTrustees() {
  return (
    <div className="trustees-page">

      {/* HERO */}
      <section
        className="trustees-header"
        style={{
          backgroundImage: "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="trustees-overlay"></div>
        <div className="trustees-header-content">
          <h1 data-aos="fade-down">Board of Trustees</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            <span>Home</span> › <span className="active">Board of Trustees</span>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="trustees-section">
        <div className="trustees-container">

          <h2 className="trustees-title" data-aos="fade-up">Our Visionary Trustees</h2>

          {trustees.map((item, index) => (
            <div
              key={index}
              className={`trustee-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div 
                className="trustee-img" 
                data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}
                data-aos-duration="1000"
              >
                <div className="img-wrapper">
                  <img src={item.img} alt={item.name} />
                </div>
              </div>

              <div 
                className="trustee-text" 
                data-aos={index % 2 !== 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>{item.name}</h3>
                <h6>{item.role}</h6>
                <p>{item.desc}</p>
                <div className="line-accent"></div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default BoardOfTrustees;