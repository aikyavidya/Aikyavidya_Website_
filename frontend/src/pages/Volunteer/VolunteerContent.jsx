import React from "react";
import "./VolunteerContent.css";

const VolunteerContent = () => {
  return (


     <div className="volunteer-page">

    {/* HERO */}
      <section
        className="volunteer-header"
        style={{
          backgroundImage:
            "url(images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Become a Volunteer</h1>
          <p>
            <span > Home </span> › <span className="active">Become a Volunteer </span>
          </p>
        </div>
      </section>


    <div className="volunteer-section" data-aos="zoom-in">
      <h2>Volunteer with AIKYA VIDYA</h2>

      <p>
        At <b>AIKYA VIDYA</b>, we believe that everyone can make a difference in
        their own unique way.
      </p>

      <p>
        Your volunteering experience will help you develop invaluable
        professional skills and build your leadership capabilities.
      </p>

      <p>
        No matter who you are or what you do, we have a wide range of volunteering
        options for you.
      </p>
    </div>

     </div>
  );
};

export default VolunteerContent;