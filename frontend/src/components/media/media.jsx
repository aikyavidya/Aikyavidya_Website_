import "./media.css";
import { useState } from "react";
function Media() {

  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="media-page">

      {/* HERO */}
      <section
        className="media-header"
        style={{
          backgroundImage:
            "url(images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="media-header-overlay">
          <h1>Media Presence</h1>
          <p>Home &gt; Media Presence</p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="media-section">
        <div className="media-container">
          <h2 className="media-title">News Articles</h2>

          <div className="media-grid">

            {/* CARD */}
            <div className="media-card">
              <img src="/images/bg/hk.png" />
              <h4>
                HKM’s ‘AIKYA Vidya’ signs MoU with Woxsen University for tribal, rural development
              </h4>
              <p>Courtesy: TELANGANA TODAY</p>
              <a
                href="https://telanganatoday.com/hkms-aikya-vidya-signs-mou-with-woxsen-university-for-tribal-rural-development"
                target="_blank"
              >
                Read Full Article
              </a>
            </div>

            <div className="media-card">
              <img src="/images/bg/hk.png" />
              <h4>విలువలు, సంస్కారం నేర్పించేలా హరే కృష్ణ ట్రస్ట్ ఐక్య విద్య ఒప్పందం</h4>
              <p>Courtesy: ETV Bharat</p>
              <a
                href="https://www.etvbharat.com/te/!state/aikya-vidya-and-woxsen-university-agreement-akshaya-patra-foundation-president-about-aikya-vidya-woxsen-university-vice-president-about-aikya-vidya-tgs24012305893"
                target="_blank"
              >
                Read Full Article
              </a>            </div>

            <div className="media-card">
              <img src="/images/bg/hk.png" />
              <h4>గ్రామీణ నిరుపేదల సంక్షేమం కోసం ఒప్పందం</h4>
              <p>Courtesy: Andhra Jyothi</p>
              <a
                href="https://epaper.andhrajyothy.com/article/Hyderabad?OrgId=24192aae7c5&imageview=0&standalone=1&device=desktop"
                target="_blank"
              >
                Read Full Article
              </a>
            </div>

            <div className="media-card">
              <img src="/images/bg/hk.png" />
              <h4>Hare Krishna Movement Hyderabad’s ‘AIKYA Vidya’ Signs MoU with Woxsen University</h4>
              <p>Courtesy: The Hans India</p>
              <a
                href="https://www.thehansindia.com/news/cities/hyderabad/hare-krishna-movement-hyderabads-aikya-vidya-signs-mou-with-woxsen-university-853458"
                target="_blank"
              >
                Read Full Article
              </a>
            </div>

            <div className="media-card">
              <img src="/images/bg/hk.png" />
              <h4>हरे कृष्ण आंदोलन ‘ऐक्या विद्या’ ने वॉक्ससेन विश्वविद्यालय के साथ समझौता ज्ञापन पर हस्ताक्षर किए</h4>
              <p>Courtesy: JANTASE RISTHA</p>
              <a
                href="https://jantaserishta.com/telangana/hare-krishna-movement-aikya-vidya-signs-mou-with-woxsen-university-1134105"
                target="_blank"
              >
                Read Full Article
              </a>
            </div>

            

          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="media-section">
        <div className="media-container">
          <h2 className="media-title">Media Videos</h2>

          <div className="media-grid">

            <div className="media-video">
              <iframe
                src="https://www.youtube.com/embed/ud6KDsGK8Cs?rel=0"
                title="video"
                allowFullScreen
              ></iframe>
              <h4>AIKYA Vidya MoU News</h4>
              <p>Courtesy: Telugu Now</p>
            </div>

            <div className="media-video">
              <iframe
                src="https://www.youtube.com/embed/1TfRO7h6fPg?rel=0"
                title="video"
                allowFullScreen
              ></iframe>
              <h4>AIKYA Vidya Coverage</h4>
              <p>Courtesy: Amma News</p>
            </div>

            <div className="media-video">
              <iframe
                src="https://www.youtube.com/embed/ud6KDsGK8Cs"
                title="video"
                allowFullScreen
              ></iframe>
              <h4>AIKYA Vidya Signs MOU with Woxsen University</h4>
              <p>Courtesy: BHAKTI ONE</p>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="media-section">
  <div className="media-container">
    <h2 className="media-title">Gallery</h2>

    <div className="media-gallery">
      <img src="/images/media/m1.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m2.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m3.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m4.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m5.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m6.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m7.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m8.webp" onClick={(e) => setSelectedImg(e.target.src)} />
      <img src="/images/media/m9.webp" onClick={(e) => setSelectedImg(e.target.src)} />
    </div>

    {/* 🔥 Lightbox */}
    {selectedImg && (
      <div className="lightbox" onClick={() => setSelectedImg(null)}>
        <img src={selectedImg} alt="preview" />
      </div>
    )}
  </div>
</section>

    </div>
  );
}

export default Media;