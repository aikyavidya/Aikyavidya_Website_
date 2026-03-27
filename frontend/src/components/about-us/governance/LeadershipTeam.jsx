import "./leadership.css";

function LeadershipTeam() {
  return (
    <div className="leader-page">

      {/* 🔥 HERO */}
      <section
        className="leader-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="leader-overlay">
          <h1>Leadership Team</h1>
          <p>
            <span>Home</span> › <span className="active">Leadership Team</span>
          </p>
        </div>
      </section>

      {/* 🔥 MAIN */}
      <section className="leader-section">
        <div className="leader-container">

          {/* 🔹 MEMBER 1 */}
          <div className="leader-row">
            <div className="leader-left">
              <img src="/images/donation/p1.jpg" alt="" />
              <h3>HG Satya Gaura Chandra Dasa</h3>
              <h6>President, Hare Krishna Movement - Hyderabad</h6>
              <h6>Regional President, Akshaya Patra Foundation</h6>
            </div>

            <div className="leader-right">
              <p>
                Gold Medalist in B.Tech Mechanical and M.Tech from IIT Chennai.
                Worked in IT before dedicating life to service.
              </p>
              <p>
                Led first Akshaya Patra kitchen in Andhra Pradesh (2008) and
                mega kitchen in Telangana.
              </p>
            </div>
          </div>

          {/* 🔹 MEMBER 2 */}
          <div className="leader-row reverse">
            <div className="leader-left">
              <img src="/images/donation/sahadeva-sakha.jpg" alt="" />
              <h3>HG Sahadeva Sakha Dasa</h3>
              <h6>Director, AIKYA VIDYA</h6>
            </div>

            <div className="leader-right">
              <p>
                M.Tech from NIT Calicut, ex-Wipro professional.
                Dedicated over 12 years to service and youth training.
              </p>
              <p>
                Conducts personality development programs based on Bhagavad-Gita.
              </p>
            </div>
          </div>

          {/* 🔹 GRID MEMBERS */}
          <div className="leader-grid">

            <div className="leader-card">
              <img src="/images/donation/p3.png" />
              <h4>Chaitanya Krishna Dasa</h4>
              <p>Chief Education Officer</p>
              <p>Chaitanya Krishna Dasa is currently serving as the CEdO of AIKYA Vidya. He Completed his B.Tech Mechanical Engineering from JNTU, Kakinada and worked in PSUs, Railways, and India Post (Accounting).  

<p>He has been serving the Hare Krishna Movement and ISKCON (Vrindavan and Delhi temples) from the past 11 years. He is also serving as the main editor of Bhakti Vedanta Book Trust one of the world’s largest publisher of classic Vaishnava texts and contemporary works on the philosophy, theology, and culture of bhakti-yoga.</p>

He is also one of the largest social media influencers in India spreading the knowledge of the Bhagavad Gita through his digital media company JivJago media.   </p>
            </div>

            <div className="leader-card">
              <img src="/images/donation/p4.png" />
              <h4>Tejasvi Chaitanya Dasa</h4>
              <p>Chief Operations Officer</p>
              <p>Tejasvi is currently serving as the COO of AIKYA Vidya and GITA Values Programme. His passion lies in inculcating Bharatiya values based on Bhagavadgita to metropolitan children who are otherwise overloaded with information and distracted by modern gadgets and social media. He is a Qualified Company Secretary. He has over 5 years’ experience in Corporate Law regulatory matters. </p>
            </div>

            <div className="leader-card">
              <img src="/images/donation/p5.png" />
              <h4>Raghavendra</h4>
              <p>Chief Sustainability Officer</p>
              <p>Raghavendra is currently serving as the CSCO of AIKYA VIDYA. He is an Ex-Political and Policy Consultant and Ex-Civil Services mentor. In a span of his 10 years career in development sector he contributed to many policy reforms in India in the spheres of education and healthcare.

<p>Earlier he worked for reputed think tanks like Centre for Civil Society and Foundation for Democratic Reforms contributing towards Governance Reforms and National Education Policy.</p>

He has published more than 60 articles for various reputed magazines like Swarajya, the Pulse and Telugu news dailies like Andhra Jyothi and Velugu.

He has done his Masters in Governance from MIT school of Government and was awarded a certificate in Rule of Law by International Academy of Leadership Germany.</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default LeadershipTeam;