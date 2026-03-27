import "./food.css";


export default function Food() {
  return (
    <div className="food-page">

      {/* ===== HEADER BANNER ===== */}
      <section className="page-header">
        <div className="overlay"></div>

        <div className="header-content">
          <h1>Food</h1>
          <p>
            <span > Home </span> › <span className="active">Food</span>
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="food-section">

        {/* BLOCK 1 */}
        <div className="food-row">
          <div className="food-text">
            <h2>Food Initiatives</h2>
            <p>
              In a heartwarming initiative aimed at alleviating hunger and nurturing
              the potential of underprivileged children, AIKYA Vidya distributes
              nutritious meals to those in need.
            </p>
            <p>
              Through the unwavering support of donors and volunteers, we ensure
              that no child goes to bed hungry and every child gets proper nutrition.
            </p>
          </div>

          <div className="food-image">
            <img src="/images/healthy_food.webp" />
          </div>
        </div>

        {/* BLOCK 2 (REVERSED) */}
        <div className="food-row reverse">
          <div className="food-image">
            <img src="/images/hf2.png" />
          </div>

          <div className="food-text">
            <p>
              Our efforts extend beyond mere sustenance; we empower children to
              break the cycle of poverty through proper nourishment.
            </p>
            <p>
              The smiles, energy, and growth of children reflect the impact of
              this initiative. Together, we aim to build a healthier future.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}