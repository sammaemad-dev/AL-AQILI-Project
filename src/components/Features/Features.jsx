import "./Features.css";
import {
  FaGem,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

function Features() {
  const data = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      text: "Finest materials",
    },
    {
      icon: <FaShieldAlt />,
      title: "2 Year Warranty",
      text: "Peace of mind",
    },
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      text: "On orders over $100",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Always here to help",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;