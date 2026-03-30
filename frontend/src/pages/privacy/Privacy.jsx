import "./privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">

      {/* HERO */}
      <section
        className="privacy-header"
        style={{
          backgroundImage:
            "url(https://aikyavidya.org/new/wp-content/uploads/2023/12/bredcrumb2.jpg)",
        }}
      >
        <div className="privacy-header-overlay">
          <h1>Privacy Policy</h1>
          <p>Home &gt; Privacy Policy</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-container" data-aos="fade-up">

        <h2>Privacy Policy</h2>

        <p>
          AIKYA VIDYA values your privacy and is committed to protecting your
          personal information. This policy explains how we collect, use, and
          safeguard your data.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal details such as your name, email address,
          phone number, and payment details when you interact with our website
          or make donations.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your information is used to process donations, communicate updates,
          improve our services, and ensure a better user experience.
        </p>

        <h3>3. Data Protection</h3>
        <p>
          We implement appropriate security measures to protect your personal
          data from unauthorized access, alteration, or disclosure.
        </p>

        <h3>4. Cookies</h3>
        <p>
          Our website may use cookies to enhance user experience and analyze
          website traffic. You can choose to disable cookies through your
          browser settings.
        </p>

        <h3>5. Third-Party Services</h3>
        <p>
          We may use trusted third-party services for payment processing and
          analytics. These services have their own privacy policies.
        </p>

        <h3>6. Sharing of Information</h3>
        <p>
          We do not sell or rent your personal information. Your data may only
          be shared when required by law or to complete essential services.
        </p>

        <h3>7. Changes to Policy</h3>
        <p>
          AIKYA VIDYA reserves the right to update this Privacy Policy at any
          time. Continued use of the website signifies acceptance of changes.
        </p>

        <h3>8. Contact Us</h3>
        <p>
          If you have any questions regarding this Privacy Policy, you can
          contact us through our official contact page.
        </p>

      </section>

    </div>
  );
}

export default Privacy;