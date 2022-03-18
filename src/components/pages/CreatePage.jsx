import "../styles/create.scss";
import { /* useNavigate, */ Link } from "react-router-dom";
import { useState } from "react";
import {
  CgBrowser,
  CgCodeSlash,
  CgGames,
  CgGirl,
  CgPen,
  CgDatabase,
} from "react-icons/cg";

const CreatePage = () => {
  //setting states for contact form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //initializing useNavigate hook
  // const navigate = useNavigate();

/* 
  useEffect(() => {
    /* making get request to api using axios 
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=10",
      )
      .then((res) => {
        setvideoPost(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   */
  const handleContactSubmit = (e) => {
    e.preventDefault();

    const contactUs = {
      fullName,
      email,
      message,
    };
    // navigate("/Create");

    // console.log(userApplication);
    // alert("Application Succesful")

    fetch("https://creek-backend.herokuapp.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactUs),
    })
      .then(() => {
        console.log("Message sent succesfully");
        alert("Message sent succesfully");
        setFullName("");
        setEmail("");
        setMessage("");
        // navigate("/Connect");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div className="create--layout">
      <div className="create--container">
        <div className="text-section">
          <div className="create--header">
            <span style={{ color: "#f4737c", paddingLeft: "0.3%" }}>
              create,
            </span>
            <h1>
              <span style={{ color: "black" }}> Build </span> With Us,
            </h1>
          </div>

          <div className="create--body">
            <h3>
              "Create Innovative Tech <span>Solutions."</span>
            </h3>
          </div>
        </div>

        <div className="create--body">
          <div className="container--one"></div>
        </div>
      </div>

      <div className="services--section">
        {/* second slide/section */}
        <div className="service--header">
          <h1>
            {" "}
            <span
              style={{
                background: "#107dd6",
                color: "white",
                padding: "0 2px",
              }}>
              Take
            </span>{" "}
            The Next Bold Step For A Positive Production{" "}
            <span style={{ borderBottom: " 2px solid #763837" }}>
              Lifecycle
            </span>{" "}
          </h1>
        </div>
        <h3>Our Services..</h3>

        <div className="content">
          <div className="services">
            <div className="header">
              <h5>
                {" "}
                <CgBrowser /> Web Development{" "}
              </h5>
            </div>
            <div className="details">
              Bringing together all elements to create a high-quality website,
              with user friendly-first approach and accessability.
            </div>
          </div>

          <div className="services">
            <div className="header">
              <h5>
                <CgCodeSlash /> Cyber Security{" "}
              </h5>
            </div>
            <div className="details">
              We reduce risk through consulting, services, and security product
              expertise. Whether it is cyber security services or products.
            </div>
          </div>

          <div className="services">
            <div className="header">
              <h5>
                <CgGames /> Game Development{" "}
              </h5>
            </div>
            <div className="details">
              we provide end-to-end game development services Our range of
              services covers concept enhancement, concept art, character
              design, game mechanics, programming.
            </div>
          </div>
          <div className="services">
            <div className="header">
              <h5>
                {" "}
                <CgGirl /> Animation{" "}
              </h5>
            </div>
            <div className="details">
              We understand that businesses work on tight deadlines, for this
              reason, we offer quick and cost-effective animation services.
            </div>
          </div>
          <div className="services">
            <div className="header">
              <h5>
                <CgPen /> UI UX Design{" "}
              </h5>
            </div>
            <div className="details">
              Creating UX/UI-friendly design mockups, internal page designs,
              desktop, and mobile views.
            </div>
          </div>
          <div className="services">
            <div className="header">
              <h5>
                {" "}
                <CgDatabase /> Database Administration{" "}
              </h5>
            </div>
            <div className="details">
              Building database systems of high availability and quality
              depending on each end user’s specialized role.{" "}
            </div>
          </div>
        </div> 
      </div>
      {/* service section ends */}

      <div className="footer--section">
        <footer>
          <div className="container">
            <div className="form">
              {/* <form>    */}

              <h5> Contact the Creek.</h5>

              <form onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Enter Fullname"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Enter Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>

                <button>Submit</button>
              </form>
            </div>
            {/* </form>  */}
            <div className="footer--text">
              <p>
                Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                Harcourt. <br /> Rivers State, Nigeria. talk@techcreek.ng
                09030003185, 09030003180
              </p>

              <div className="footer--links">
                <div className="link">
                  <span /* style={{ paddingRight: "1.5%" }} */>back to..</span>
                  <Link to="/">Home</Link>
                  <Link to="/Learn">Learn</Link>
                  <Link to="/Create">Create</Link>
                  <Link to="/Connect">Connect</Link>
                  <Link to="/Membership">Membership</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CreatePage;
