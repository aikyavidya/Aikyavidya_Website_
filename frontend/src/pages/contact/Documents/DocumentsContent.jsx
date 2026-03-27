import React from "react";
import "./DocumentsContent.css";

const DocumentsContent = () => {
  return (
 <div className="document-page">

    {/* HERO */}
      <section
        className="document-header"
        style={{
          backgroundImage:
            "url(/images/bg/bredcrumb2.jpg)",
        }}
      >
        <div className="header-content">
          <h1>Documents & Downloads</h1>
          <p>
            <span > Home </span> › <span className="active">DocumentS & Downloads</span>
          </p>
        </div>
      </section>




    <section className="documents-section">

      {/* TITLE */}
      <h2 className="documents-title">Documents & Downloads</h2>

      {/* DOCUMENT GRID */}
      <div className="documents-grid">

        {/* ITEM 1 */}
        <div className="doc-item">
          <h5>HKM INDIA 12A</h5>
          <a
            href="/documents/Annex-1-HKMI-12A-NEW.pdf"
            target="_blank"
            rel="noreferrer"
            className="doc-btn"
          >
            View Document
          </a>
        </div>

        {/* ITEM 2 */}
        <div className="doc-item">
          <h5>HKM INDIA 80G</h5>
          <a
            href="/documents/HKM-I-80G-NEW.pdf.pdf"
            target="_blank"
            rel="noreferrer"
            className="doc-btn"
          >
            View Document
          </a>
        </div>

        {/* ITEM 3 */}
        <div className="doc-item">
          <h5>HKM INDIA CSR Reg</h5>
          <a
            href="/documents/CSR-Regn-MCA.pdf"
            target="_blank"
            rel="noreferrer"
            className="doc-btn"
          >
            View Document
          </a>
        </div>

      </div>

    </section>
    </div>
  );
};

export default DocumentsContent;