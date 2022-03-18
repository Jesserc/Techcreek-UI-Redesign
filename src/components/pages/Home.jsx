import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <div className="text--content">
          <LightSpeed left delay={500} duration={1500}>
            <h1>
              Welcome <br />
              to the &lt;Creek /&gt;
            </h1>
            <p>
              TechCreek is a habitat for the teeming population of youths making
              sense of their lives with their digital skills and competencies,
              and actively involved in the development of the ‘new economy’ from
              Rivers State.
            </p>
          </LightSpeed>
          <Bounce delay={900} duration={2000}>
            <Link to="/About">
              <button className="btn">About Us</button>
            </Link>
          </Bounce>

   
        
        </div>
      </div>

      <div className="image-section">
        {/* <div className="img"></div> */}

        <div className="color--div--two"></div>
      </div>
      <div className="color--div"></div>
      <Fade right delay={200}>
        <footer>
          <div className="footer--text">
            <p>
              Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
              Harcourt. <br /> Rivers State, Nigeria. talk@techcreek.ng
              09030003185, 09030003180
            </p>
          </div>
          <div className="footer--links">
            <ul>
              <li>
                <a href="https://www.facebook.com/techcreekng/" target="_blank" rel="noreferrer">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/techcreekng/" 
         target="_blank" rel="noreferrer">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/techcreekng/" 
         target="_blank" rel="noreferrer">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Fade>
    </div>
  );
};

export default HomePage;
