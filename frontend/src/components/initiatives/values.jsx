import "./values.css";

function Values() {
  return (
    <div className="values-page">

      {/* HERO */}
      <section
        className="values-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Values</h1>
          <p>
            <span > Home </span> › <span className="active">Values</span>
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="values-section">
        <div className="values-container">
          <h2>Value Based Learning</h2>

          <p>
            The curriculum of <b>AIKYA VIDYA</b> is a combination of academic
            and value-based learning. The post-school education centres cater to
            students from grades 1 to 10 with structured evening sessions.
          </p>

          <img
            src="/images/bg/flow.png"
            alt="values"
            className="values-full-img"
          />

          <p>
            Hare Krishna Movement proudly supports women from rural areas by
            training them to become teachers. These teachers help children grow
            with strong values while also promoting women empowerment.
          </p>

          <p>
            Teachers are trained and supported, focusing on both academic
            improvement and value-based development of children.
          </p>
        </div>
      </section>

      {/* SECTION 2 IMAGE */}
      <section className="values-image-section">
        <div className="values-container">
          <img
            src="/images/bg/chart2.png"
            alt="values2"
            className="values-wide-img"
          />
        </div>
      </section>

    </div>
  );
}

export default Values;