import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Food from "./components/initiatives/food";
import Education from "./components/initiatives/education";
import Values from "./components/initiatives/values";
import Media from "./components/media/media"
import Impact from "./pages/impact/ImpactPage"
import Volunteer from "./pages/Volunteer/VolunteerPage"
import Contact from "./pages/contact/ContactPage"
import Documents from "./pages/contact/Documents/DocumentsPage"
import Photos from "./pages/gallery/PhotoGallery/PhotoGalleryPage"
import Videos from "./pages/gallery/VideoGallery/VideoGalleryPage"
import ScrollToTopButton from "./components/ScrollToTopButton";
import CSRPartners from "./pages/csr/CSRPartners";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Refund from "./pages/refund/Refund";
import OurInspiration from "./components/about-us/OurInspiration";
import OurTrust from "./components/about-us/OurTrust";
import AssociatedTrusts from "./components/about-us/AssociatedTrusts";
import Donation from "./pages/donation/Donation";
import Checkout from "./pages/donation/Checkout";
import LeadershipTeam from "./components/about-us/governance/LeadershipTeam"
import ManagementTeam from "./components/about-us/governance/ManagementTeam"
import BoardOfTrustees from "./components/about-us/governance/BoardOfTrustees"



function App() {
  return (
    <BrowserRouter>

      {/* HEADER ALWAYS FIXED */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/education" element={<Education />} />
        <Route path="/values" element={<Values />} />
        <Route path="/media" element={<Media />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/csr" element={<CSRPartners/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/ourInspiration" element={<OurInspiration/>} />
        <Route path="/ourTrust" element={<OurTrust/>} />
        <Route path="/associatedTrusts" element={<AssociatedTrusts/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/leadership" element={<LeadershipTeam />} />
        <Route path="/management" element={<ManagementTeam />} />
        <Route path="/board" element={<BoardOfTrustees />} />

      </Routes>
      <ScrollToTopButton />
      {/* FOOTER ALWAYS FIXED */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;