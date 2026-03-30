import React from "react";
import "./VideoGalleryContent.css";

const videos = [
  "3JHf4GVqq3E",
  "Fu2jZLm4QUw",
  "QT9teszsADA",
  "8RMcvuAH9Ok",
  "277t-iPOApU",
  "la5h0OAKzfQ"
];

const VideoGalleryContent = () => {
  return (


     <div className="videos-page">

    {/* HERO */}
      <section
        className="videos-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Videos</h1>
          <p>
            <span > Home </span> › <span className="active">Videos</span>
          </p>
        </div>
      </section>


    <section className="video-gallery">
      <div className="video-container">
        <div className="video-grid">
          {videos.map((id, index) => (
            <div className="video-item" key={index} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default VideoGalleryContent;