import AboutSection from "../components/about-us/AboutSection";
import ImpactSection from "../components/impact/ImpactSection";
import Initiatives from "../components/initiatives/Initiatives";
import Testimonials from "../components/testimonials/Testimonials";
import Purpose from "../components/purpose/PurposeSection";
import "../pages/home.css"
function Home() {
  return (
    <div>
      
      {/* HERO SECTION */}
      <section className="hero">

  <iframe
    src="https://www.youtube-nocookie.com/embed/K7d2EnuQNQc?autoplay=1&mute=1&loop=1&playlist=K7d2EnuQNQc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
    title="Hero Video"
    frameBorder="0"
    allow="autoplay; fullscreen"
  ></iframe>

 
  

</section>
    <AboutSection />
    <ImpactSection />
    <Initiatives />
    <Purpose />
    <Testimonials />
    </div>
  );
}

export default Home;