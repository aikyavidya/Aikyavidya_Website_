import "./CSRPage.css";

function CSRPage() {
  return (
    <div className="csr-page">

      {/* HEADER */}
      <section
        className="csr-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="csr-overlay">
          <h1>CSR Applicability</h1>
          <div className="breadcrumbs">
            <span>Home</span>
            <span className="divider">›</span>
            <span className="active">CSR Applicability</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="csr-content">
        <div className="csr-container">

          <h2>CSR Applicability</h2>

          <p>
            Our Trust is registered with the Ministry of Corporate Affairs to
            avail funding from corporates to undertake CSR activities.
          </p>

          <p>
            Our activities viz. Education, Values & Food are covered under
            Schedule VII to the Companies Act, 2013:
          </p>

          {/* TABLE */}
          <div className="table-wrapper">
            <table className="csr-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>AIKYA Vidya Activities</th>
                  <th>CSR Coverage u/s. VII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Post School Education</td>
                  <td>Clause (ii) Promoting education, including special education</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Teaching of Moral & Cultural Values</td>
                  <td>Clause (v) Protection of Culture</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Nutritious Dinner to Underprivileged Children</td>
                  <td>Clause (i) - Eradicating hunger, poverty and malnutrition</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}

export default CSRPage;