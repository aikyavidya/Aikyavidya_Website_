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
          <div className="leader-row" data-aos="fade-up">
            <div className="leader-left">
              <img src="/images/donation/p1.jpg" alt="" />
              <h3>HG Satya Gaura Chandra Dasa</h3>
              <h6>President, Hare Krishna Movement - Hyderabad</h6>
              <h6>Regional President, Akshaya Patra Foundation</h6>
            </div>

            <div className="leader-right">
             
              <p>
                HG Satya Gaura Chandra Dasa is a Gold Medalist in B.Tech Mechanical at Jawaharlal Nehru Technological University – Kakinada. He eventually did his M.Tech from IIT-Chennai and worked in a multinational IT firm in Bengaluru for a couple of years before deciding to dedicate his life to serving humanity. The first Akshaya Patra kitchen in unified Andhra Pradesh (now Telangana) was set up in Hyderabad in 2008 under his leadership. He also oversaw the setting up of the Foundation’s high-tech mega kitchen in Kandi, Telangana, in association with the Infosys Foundation in 2018. Currently, he is serving as the President for Akshaya Patra Andhra Pradesh and Telangana. HG is also serving as the President of AIKYA VIDYA.
              </p>
            </div>
          </div>

          {/* 🔹 MEMBER 2 */}
          <div className="leader-row reverse" data-aos="fade-up" data-aos-delay="100">
            <div className="leader-left">
              <img src="/images/donation/sahadeva-sakha.jpg" alt="" />
              <h3>HG Sahadeva Sakha Dasa</h3>
              <h6>Director, AIKYA VIDYA</h6>
            </div>

            <div className="leader-right">
             
              <p>
                HG is currently serving as Director of the AIKYA Vidya. Sahadeva Saka Dasa is also the Associate Vice President of Hare Krishna Movement Hyderabad’s state youth outreach. He pursued M.Tech degree from NIT Calicut and Worked in Wipro Software Company before joining the movement. HG has been rendering his dedicated services to movement from past 12 years. 

Swamiji is well versed in conducting training programs for the youth in the aspect of PERSONALITY DEVELOPMENT based on Bhagavad-Gita and trained students from reputed colleges like IIT Hyderabad, JNTU University, BITS Hyderabad etc. He is also the most sought-after speaker in reputed software professionals from Microsoft, Google, Qualcom, Deloitte, TCS, Infosys etc.
              </p>
            </div>
          </div>

          {/* 🔹 GRID MEMBERS */}
          <div className="leader-grid">

            <div className="leader-card" data-aos="zoom-in">
              <img src="/images/donation/p3.png" />
              <h4>Chaitanya Krishna Dasa</h4>
              <p>Chief Education Officer</p>
              <p>Chaitanya Krishna Dasa is currently serving as the CEdO of AIKYA Vidya. He Completed his B.Tech Mechanical Engineering from JNTU, Kakinada and worked in PSUs, Railways, and India Post (Accounting).  

He has been serving the Hare Krishna Movement and ISKCON (Vrindavan and Delhi temples) from the past 11 years. He is also serving as the main editor of Bhakti Vedanta Book Trust one of the world’s largest publisher of classic Vaishnava texts and contemporary works on the philosophy, theology, and culture of bhakti-yoga.

He is also one of the largest social media influencers in India spreading the knowledge of the Bhagavad Gita through his digital media company JivJago media.     </p>
            </div>

            <div className="leader-card" data-aos="zoom-in">
              <img src="/images/donation/p4.png" />
              <h4>Tejasvi Chaitanya Dasa</h4>
              <p>Chief Operations Officer</p>
              <p>Tejasvi is currently serving as the COO of AIKYA Vidya and GITA Values Programme. His passion lies in inculcating Bharatiya values based on Bhagavadgita to metropolitan children who are otherwise overloaded with information and distracted by modern gadgets and social media. He is a Qualified Company Secretary. He has over 5 years’ experience in Corporate Law regulatory matters. </p>
            </div>

            

          </div>

        </div>
      </section>

    </div>
  );
}

export default LeadershipTeam;