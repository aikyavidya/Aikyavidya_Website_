import "./PhotoGalleryContent.css";
import React, { useState , useEffect } from "react";
import "./PhotoGalleryContent.css";



const images = [
  "/images/gallery/p1.png",
  "/images/gallery/p2.png",
  "/images/gallery/p3.png",
  "/images/gallery/p4.png",
  "/images/gallery/p5.png",
  "/images/gallery/p6.png",
  
  "/images/gallery/p8.png",
  "/images/gallery/p9.png",
  "/images/gallery/p10.png",
  "/images/gallery/p11.png",
  "/images/gallery/p12.png",
  "/images/gallery/p13.png",
  "/images/gallery/p14.png",
  "/images/gallery/p15.png",
  "/images/gallery/p16.png",
  "/images/gallery/p17.png",
  "/images/gallery/p18.png",
  "/images/gallery/p19.png",
  "/images/gallery/p20.png",
  "/images/gallery/p21.png",
];
const PhotoGalleryContent = () => {

    const [currentIndex, setCurrentIndex] = useState(null);

useEffect(() => {
  const handleKey = (e) => {
    if (currentIndex === null) return;

    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }

    if (e.key === "Escape") {
      setCurrentIndex(null);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [currentIndex]);



  return (

     <div className="photos-page">

    {/* HERO */}
      <section
        className="photos-header"
        style={{
          backgroundImage:
            "url(https://aikyavidya.org/new/wp-content/uploads/2023/12/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Photos</h1>
          <p>
            <span > Home </span> › <span className="active">Photos</span>
          </p>
        </div>
      </section>



    <section className="photo-gallery">
      <div className="gallery-container">
        <div className="masonry">
  {images.map((img, index) => (
    <div className="masonry-item" key={index}>
      <img src={img} alt="gallery" onClick={() => setCurrentIndex(index)} />
    </div>
  ))}
</div>

{/* 🔥 LIGHTBOX */}
{currentIndex !== null && (
  <div className="lightbox">
    
    {/* Close */}
    <span className="close" onClick={() => setCurrentIndex(null)}>×</span>

    {/* Left Arrow */}
    <span
      className="arrow left"
      onClick={(e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }}
    >
      ❮
    </span>

    {/* Image */}
    <img src={images[currentIndex]} alt="preview" />

    {/* Right Arrow */}
    <span
      className="arrow right"
      onClick={(e) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }}
    >
      ❯
    </span>
  </div>
)}
      </div>
    </section>
    </div>
  );
};

export default PhotoGalleryContent;