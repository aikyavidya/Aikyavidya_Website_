import "./terms.css";

function Terms() {
  return (
    <div className="terms-page">

      {/* HERO */}
      <section
        className="terms-header"
        style={{
          backgroundImage:
            "url(https://aikyavidya.org/new/wp-content/uploads/2023/12/bredcrumb2.jpg)",
        }}
      >
        <div className="terms-header-overlay">
          <h1>Terms & Conditions</h1>
          <p>Home &gt; Terms & Conditions</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="terms-container">

        <h2>Terms & Conditions</h2>

        <p>
          Welcome to AIKYA VIDYA. By accessing or using our website, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <h3>1. Use of Website</h3>
        <p>
          The content of this website is for general information and use only.
          It is subject to change without notice. Unauthorized use of this
          website may give rise to a claim for damages.
        </p>

        <h3>2. Donations</h3>
        <p>
          All donations made through this platform are voluntary and will be
          used for charitable purposes such as education, food, and welfare of
          children. Donations are non-refundable unless stated otherwise.
        </p>

        <h3>3. Intellectual Property</h3>
        <p>
          All content, design, graphics, and materials on this website are owned
          by AIKYA VIDYA. You may not reproduce or distribute any content
          without prior permission.
        </p>

        <h3>4. User Responsibility</h3>
        <p>
          Users must ensure that any information provided is accurate and lawful.
          Any misuse of the platform may result in termination of access.
        </p>

        <h3>5. External Links</h3>
        <p>
          Our website may contain links to external websites. We do not have
          control over the content of those websites and are not responsible for
          their practices.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          AIKYA VIDYA shall not be liable for any direct or indirect damages
          arising from the use of this website.
        </p>

        <h3>7. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the website implies acceptance of updated terms.
        </p>

        <h3>8. Contact Information</h3>
        <p>
          If you have any questions regarding these Terms & Conditions, you may
          contact us through our official contact page.
        </p>

      </section>

    </div>
  );
}

export default Terms;