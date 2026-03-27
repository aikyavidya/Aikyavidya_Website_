import "./initiatives.css";
import { FaPlus } from "react-icons/fa";
export default function Initiatives() {
  const data = [
    {
      title: "Healthy Food",
      desc: "In a heartwarming initiative aimed at alleviating hunger and nurturing the potential of underprivileged children, AIKYA Vidya distributes nutritious meals.",
      img: "../../public/images/healthy_food.webp",
      link: "/food",
    },
    {
      title: "Education",
      desc: "Post-school education sessions help children improve academically and achieve complete self-development.",
      img: "../../public/images/education.webp",
      link: "/education",
    },
    {
      title: "Values",
      desc: "Empowering children with discipline, confidence and strong values to build better citizens.",
      img: "../../public/images/values.webp",
      link: "/values",
    },
  ];

  return (
    <section className="initiatives">
      {data.map((item, i) => (
        <div
          className="initiative-card"
          key={i}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="overlay"></div>

          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

         
        </div>
      ))}
    </section>
  );
}