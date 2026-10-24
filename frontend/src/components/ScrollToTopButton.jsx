import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTopButton.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-top"
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    )
  );
}