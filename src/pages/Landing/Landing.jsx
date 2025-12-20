import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Gocart</h1>
        <h2>Smarter Shopping, Smarter Selling</h2>
        <p>All-in-one marketplace for buyers and sellers.</p>
        <button onClick={() => navigate("/home")}>
          Enter Gocart Now
        </button>
      </div>
    </section>
  );
}

export default Landing;
