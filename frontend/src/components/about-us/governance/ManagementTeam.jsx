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
          <div className="mgmt-row">
            <div className="mgmt-card">
              {/* <img src="https://aikyavidya.org/new/wp-content/uploads/2024/02/15.png" /> */}
              <h4>Rasa Mandal Dasa</h4>
              <p>
                Senior Manager Outreach. B.Pharmacy graduate with experience in healthcare industry.
              </p>
              <p>He is currently serving as the Senior Manager Outreach of AIKYA Vidya. He is a B.Pharmacy graduate from Vignan University Vizag. Before joining AIKYA Vidya, he worked in Healthcare industry </p>
            </div>

            <div className="mgmt-card">
              <img src="/images/donation/m2.png" />
              <h4>Kumaraswamy</h4>
              <p>
                Senior Manager Youth Outreach. MA in Sanskrit and international kickboxing medalist.
              </p>
              <p>He is currently serving as Senior Manager Youth outreach programme of the AIKYA Vidya. He has done his MA in Sanskrit and diploma in Kathak dance. He participated 3 times in International Kick Boxing championship and won silver medal once. Before joining AIKYA Vidya he worked with various reputed NGOs in different capacities.  </p>
            </div>
          </div>

          {/* 🔹 ROW 2 */}
          <div className="mgmt-row reverse">
            <div className="mgmt-card">
              <img src="/images/donation/m3.png" />
              <h4>Brahmanandam</h4>
              <p>
                Senior Manager Village Outreach with NGO experience.
              </p>
              <p>He is currently serving as Senior Manager Village Outreach. Before joining AIKYA Vidya, Brahmanandam served in various reputed NGOs in different capacities.  </p>
            </div>

            <div className="mgmt-card">
              <img src="/images/donation/m4.png" />
              <h4>G. Karthik</h4>
              <p>
                Manager Outreach. Mechanical Engineer with corporate experience.
              </p>
              <p>He is currently serving as the Manager Outreach in AIKYA Vidya. He is a Mechanical Engineer by education and previously worked in reputed pharmaceutical and software companies.  </p>
            </div>
          </div>

          {/* 🔹 GRID TEAM */}
          <div className="mgmt-grid">

            <div className="mgmt-mini">
              <img src="/images/donation/m5.png" />
              <h5>Mani Teja</h5>
              <span>Executive Assistant Donor Care</span>
            </div>

            <div className="mgmt-mini">
              <img src="/images/donation/m6.png" />
              <h5>Sai Pawan</h5>
              <span>Executive Assistant Operations</span>
            </div>

            <div className="mgmt-mini">
              {/* <img src="https://aikyavidya.org/new/wp-content/uploads/2024/02/1.png" /> */}
              <h5>Ravi</h5>
              <span>Executive Assistant Youth Outreach</span>
            </div>

            <div className="mgmt-mini">
              <h5>Lakshmi</h5>
              <span>Digital Communications Executive</span>
            </div>

            <div className="mgmt-mini">
              <h5>Puja Sharma</h5>
              <span>Digital Communications Executive</span>
            </div>

            <div className="mgmt-mini">
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