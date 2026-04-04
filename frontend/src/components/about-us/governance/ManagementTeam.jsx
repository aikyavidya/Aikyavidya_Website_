import "./management.css";

function ManagementTeam() {
  return (
    <div className="mgmt-page">

      {/* 🔥 HERO */}
      <section
        className="mgmt-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="mgmt-overlay">
          <h1>Management Team</h1>
          <p>
            <span>Home</span> › <span className="active">Management Team</span>
          </p>
        </div>
      </section>

      {/* 🔥 MAIN */}
      <section className="mgmt-section">
        <div className="mgmt-container">

          {/* 🔹 ROW 1 */}
          <div className="mgmt-row" data-aos="fade-up">
            <div className="mgmt-card">
              <img src="/images/donation/15.webp" /> 
              <h4>Rasa Mandal Dasa</h4>
              
              <p>He is currently serving as the Senior Manager Outreach of AIKYA Vidya. He is a B.Pharmacy graduate from Vignan University Vizag. Before joining AIKYA Vidya, he worked in Healthcare industry  </p>
            </div>

            <div className="mgmt-card">
              <img src="/images/donation/m2.png" />
              <h4>Kumaraswamy</h4>
             
              <p>He is currently serving as Senior Manager Youth outreach programme of the AIKYA Vidya. He has done his MA in Sanskrit and diploma in Kathak dance. He participated 3 times in International Kick Boxing championship and won silver medal once. Before joining AIKYA Vidya he worked with various reputed NGOs in different capacities.    </p>
            </div>
          </div>

        

          {/* 🔹 GRID TEAM */}
          <div className="mgmt-grid">

            <div className="mgmt-mini" data-aos="zoom-in">
              <img src="/images/donation/m3.png" />
              <h4>Brahmanandam</h4>
              <span> Senior Manager Village Outreach.</span>
            </div>

            <div className="mgmt-mini" data-aos="zoom-in">
              <img src="/images/donation/m6.png" />
              <h5>Sai Pawan</h5>
              <span>Executive Assistant Operations</span>
            </div>

            
            <div className="mgmt-mini" data-aos="zoom-in">
              <h5>Lakshmi</h5>
              <span>Digital Communications Executive</span>
            </div>

            <div className="mgmt-mini" data-aos="zoom-in">
              <h5>Puja Sharma</h5>
              <span>Digital Communications Executive</span>
            </div>

            <div className="mgmt-mini" data-aos="zoom-in">
              <h5>Lakshmi Prasanna</h5>
              <span>Digital Communications Executive</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ManagementTeam;