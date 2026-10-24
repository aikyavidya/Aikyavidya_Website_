import { useEffect, useRef, useState } from "react";
import "./purpose.css";
import { Link } from "react-router-dom";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


export default function PurposeSection() {
  const [activeTab, setActiveTab] = useState("purpose");
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef(null);

  const content = {
    purpose: `The purpose of education is to develop comprehensive knowledge and a well-balanced outlook on life. AIKYA VIDYA is an integrative post-school educational program designed to put together knowledge-based and value-based teaching to shape young impressionable minds to grow as all-rounded individuals of intellect holistically and support the system in creating well-balanced citizens of India.`,
    
    vision: `A commitment to a strong nation by ensuring Food, Education & Values to underprivileged children.`,

    mission: `To reach 1000 villages by the year 2030.`
  };
  const tabs = ["purpose", "vision", "mission"];

  const handleTabKeyDown = (event) => {
    const currentIndex = tabs.indexOf(activeTab);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      setActiveTab(tabs[nextIndex]);
      document.getElementById(`${tabs[nextIndex]}-tab`)?.focus();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = isVideoMuted;
    video.volume = 1;

    const syncMuteState = () => setIsVideoMuted(video.muted);
    video.addEventListener("volumechange", syncMuteState);
    return () => video.removeEventListener("volumechange", syncMuteState);
  }, [isVideoMuted]);

  const toggleVideoMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) video.volume = 1;
    setIsVideoMuted(nextMuted);
  };

  return (
    <section className="purpose-section">

      {/* LEFT SIDE */}
      <div className="purpose-left" data-aos="fade-right">

        {/* TABS */}
        <div
          className="tabs"
          role="tablist"
          aria-label="About AIKYA VIDYA"
          onKeyDown={handleTabKeyDown}
        >
          <button
            id="purpose-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "purpose"}
            aria-controls="purpose-panel"
            tabIndex={activeTab === "purpose" ? 0 : -1}
            className={activeTab === "purpose" ? "active" : ""}
            onClick={() => setActiveTab("purpose")}
          >
            Our Purpose
          </button>

          <button
            id="vision-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "vision"}
            aria-controls="purpose-panel"
            tabIndex={activeTab === "vision" ? 0 : -1}
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>

          <button
            id="mission-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "mission"}
            aria-controls="purpose-panel"
            tabIndex={activeTab === "mission" ? 0 : -1}
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
        </div>

        {/* CONTENT */}
        <div
          className="tab-content"
          id="purpose-panel"
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          tabIndex={0}
        >
          <p>{content[activeTab]}</p>


<Link to="/donation" className="btn">
  DONATE NOW ❤
</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="purpose-right" data-aos="fade-left">
        <div className="purpose-overlay"></div>

        <video
          ref={videoRef}
          className="purpose-video"
          src="/videos/documentary.mp4"
          poster="/images/purpose_thumbnail.webp"
          title="Aikya Vidya video"
          controls
          playsInline
          preload="none"
        />
        <button
          className="purpose-mute-toggle"
          type="button"
          onClick={toggleVideoMute}
          aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
          title={isVideoMuted ? "Unmute video" : "Mute video"}
        >
          {isVideoMuted ? <FaVolumeMute aria-hidden="true" /> : <FaVolumeUp aria-hidden="true" />}
        </button>
      </div>

    </section>
  );
}