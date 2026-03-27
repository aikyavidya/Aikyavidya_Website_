import "./refund.css";

function Refund() {
  return (
    <div className="refund-page">

      {/* HERO */}
      <section
        className="refund-header"
        style={{
          backgroundImage:
            "url(https://aikyavidya.org/new/wp-content/uploads/2023/12/bredcrumb2.jpg)",
        }}
      >
        <div className="refund-header-overlay">
          <h1>Refund Policy</h1>
          <p>Home &gt; Refund Policy</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="refund-container">

        <h2>Refund Policy</h2>

        <p>
          AIKYA VIDYA deeply values the generosity of its donors. Donations
          made to support our initiatives are used for the welfare and
          development of underprivileged children.
        </p>

        <h3>1. No Refund Policy</h3>
        <p>
          All donations made to AIKYA VIDYA are non-refundable. Once a donation
          is successfully processed, it cannot be reversed.
        </p>

        <h3>2. Incorrect Transactions</h3>
        <p>
          If you believe that a transaction was made in error, please contact us
          immediately. We will review the request and take appropriate action if
          applicable.
        </p>

        <h3>3. Duplicate Payments</h3>
        <p>
          In case of duplicate payments due to technical errors, please reach
          out with proof of the transaction. After verification, necessary
          actions will be taken.
        </p>

        <h3>4. Cancellation</h3>
        <p>
          Donations once made cannot be cancelled. We encourage donors to verify
          details before completing any transaction.
        </p>

        <h3>5. Contact for Support</h3>
        <p>
          For any queries regarding payments or refunds, please contact us
          through our official contact page or email.
        </p>

      </section>

    </div>
  );
}

export default Refund;