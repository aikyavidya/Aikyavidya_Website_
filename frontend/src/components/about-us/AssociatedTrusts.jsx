import "./associatedTrusts.css";

function AssociatedTrusts() {
  const trusts = [
    {
      logo: "/images/trust1.png",
      title: "Akshaya Patra",
      desc: `Hunger shall not be the obstacle stopping children from receiving education. 
      Through the Mid-Day Meal Programme (PM-POSHAN), Akshaya Patra is building a 
      healthy and bright future for children across India.`,
      link: "https://www.akshayapatra.org/",
    },
    {
      logo: "/images/trust2.png",
      title: "Hare Krishna Charities",
      desc: `Hare Krishna Charities provides free and subsidized meals to the needy. 
      With high-tech kitchens and large-scale operations, they serve millions of meals 
      with efficiency and compassion.`,
      link: "https://www.harekrishnacharities.org/",
    },
    {
      logo: "/images/trust3.png",
      title: "Hare Krishna Movement",
      desc: `The Hare Krishna Movement spreads spiritual awareness and values globally. 
      Founded by Srila Prabhupada, it continues to inspire millions toward a meaningful life.`,
      link: "https://hkmhyderabad.org/",
    },
  ];

  return (
    <div className="associated-page">

      {/* HERO */}
      <section
        className="associated-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="associated-overlay">
          <h1>Our Associated Trusts</h1>
          <p>
            <span>Home</span> ›{" "}
            <span className="active">Our Associated Trusts</span>
          </p>
        </div>
      </section>

      {/* TRUST LIST */}
      <section className="trusts-section">
        <div className="container">

          {trusts.map((item, index) => (
            <div className="trust-card" key={index}>

              {/* LOGO */}
              <div className="trust-logo">
                <img src={item.logo} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="trust-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a href={item.link} target="_blank" rel="noreferrer">
                  Read More →
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default AssociatedTrusts;