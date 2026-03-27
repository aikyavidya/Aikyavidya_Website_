import "./education.css";

function Education() {
  return (
    <div className="edu-page">

      {/* HERO */}
      <section
        className="edu-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
       <div className="header-content">
          <h1>Education</h1>
          <p>
            <span > Home </span> › <span className="active">Education</span>
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="edu-section">
        <div className="edu-container edu-grid ">
            <img
            src="/images/bg/bar.png"
            alt=""
            className="edu-bar-img"
          />
          <div>
            <h2>Opportunities For A Quality Life</h2>
            <p>
              <b>AIKYA VIDYA</b> aims to provide a holistic approach to child development by engaging
               children in meaningful activities that promote self-development, social awareness, 
               and moral integrity. <b>AIKYA VIDYA</b> believes that children should be engaged in 
               constructive activities that are socially beneficial and educationally relevant. 
               Through the organization’s programs, children will be provided with a platform to
                gain the skills necessary to become productive members of society.
            </p>
          </div>

          
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="edu-section">
        <div className="edu-container edu-grid edu-reverse">
          <img
            src="/images/bg/chart.png"
            alt=""
          />

          <div>
            <h2>Education is Life!</h2>
            <p>
              To help children keep up their academic schedules and also attain complete self-development, 
              the <b>AIKYA VIDYA</b> program is introduced as a regular post-school education session in the
               same locality as the children’s homes. The chief provision of the program is Education, 
               Food, and Values.
            </p>
          </div>
        </div>
      </section>

      {/* FULL IMAGE */}
      <section className="edu-full-img">
        <img src="/images/bg/chart2.png" />
      </section>

      {/* SECTION 3 */}
      <section className="edu-section">
        <div className="edu-container">
          <h2>The Way Of Teaching</h2>
          <p>
            The value-based education regimen of <b>AIKYA VIDYA</b> is a wholesome personal enrichment program that develops 
            well-balanced individuals with strong characters and socially responsible outlooks. 
            Capping the <b>post-school</b> evening study sessions are interesting elements:
          </p>

          <img
            src="/images/bg/chart3.png"
            className="edu-wide-img"
          />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="edu-section">
        <div className="edu-container">
          <h2>Special Development Drives</h2>
          <p>
            Helping rural communities build identity, awareness and strong
            foundations for future generations.
          </p>

          <img
            src="/images/bg/chart4.png"
            className="edu-wide-img"
          />
        </div>
      </section>

    </div>
  );
}

export default Education;