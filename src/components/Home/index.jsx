import { Link } from "react-router-dom";
import './style.css';


const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>My name is Dan.</p>
          <p>I am a full stack developer!</p>
        </h1>
        <Link to="/about">
          <button>Hey Listen!</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/smolder.jpg`}
          alt="person smolder"
        />
      </div>
    </div>
  );
};

export default Home;
