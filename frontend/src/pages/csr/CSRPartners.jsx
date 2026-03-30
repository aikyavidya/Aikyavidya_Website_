import "./csr.css";

function CSRPartners() {
  return (
    <div className="csr-page">

      {/* HERO */}
      <section
        className="csr-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="csr-header-overlay">
          <h1>CSR Partners</h1>
          <p>Home &gt; CSR Partners</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="csr-container" data-aos="fade-up">

        <h2 className="csr-title">Our CSR Partners</h2>

        <p className="csr-desc">
          <strong>
            The Corporates in support of our mission to empower
            underprivileged children with Food, Education and Values.
          </strong>
        </p>

        {/* LOGOS */}
        <div className="csr-logos" data-aos="zoom-in">
          <img
            src="/images/csr1.jpg"
            alt="partner1"
          />

          <img
            src="/images/cs2.jpg"
            alt="partner2"
          />
        </div>

      </section>

    </div>
  );
}

export default CSRPartners;