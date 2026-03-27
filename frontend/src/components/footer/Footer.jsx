import "./footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <img
            src="images/logo-1.png"
            alt="logo"
            className="logo"
          />

          <p>
            The purpose of education is to develop all round and well-balanced students.
          </p>
          <p>
            “AIKYA VIDYA” is designed for students of classes 1st to 10th,
            especially in rural areas.
          </p>


<Link to="/donation" className="btn">
  DONATE NOW ❤
</Link>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>CONTACTS</h4>

          <div className="item-a">
            <FaMapMarkerAlt />
            <span>
              NBT Nagar, Road No 12, Banjara Hills,
              Hyderabad - 500034
            </span>
          </div>

          <div className="item-a">
            <FaEnvelope />
            <a href="mailto:connect@aikyavidya.org">
              connect@aikyavidya.org
            </a>
          </div>

          <div className="item-a ">
            <FaPhoneAlt />
            <a href="tel:+917386898991">
              +91 73868 98991
            </a>
          </div>

          <div className="socials">
            <a 
                    href="https://instagram.com/aikya_vidya?igshid=NGVhN2U2NjQ0Yg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a 
                    href="https://www.facebook.com/profile.php?id=100090151397761&mibextid=ZbWKwL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a 
                    href="https://youtube.com/@aikyavidya108?si=9XasfB3iSthH4P_2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>

                  <a 
                    href="https://twitter.com/AikyaVidya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>

          <a href="/food">Initiative – Food</a>
          <a href="/education">Initiative – Education</a>
          <a href="values">Initiative – Values</a>
          <a href="/csr">CSR Partners</a>
          <a href="/volunteer">Become a Volunteer</a>
          <a href="/media">Media Presence</a>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>ASSOCIATED TRUSTS</h4>

          <a target="_blank"  href="https://www.akshayapatra.org/">Akshaya Patra</a>
          <a target="_blank" href="https://www.harekrishnacharities.org/">Hare Krishna Charities</a>
          <a target="_blank"  href="https://hkmhyderabad.org/">Hare Krishna Movement</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="links">
          <a href="/terms">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/refund">Refund Policy</a>
        </div>

        <p>Copyright © 2023 | Aikya Vidya</p>
      </div>

    </footer>
  );
}