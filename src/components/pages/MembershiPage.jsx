import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import MembershipLogo from "../images/logo-blue.png";
import "../styles/membership.scss";

const MembershipPage = () => {
  /* usestate */
  // state for changing forms
  const [form, setForm] = useState(true);

  //state for connecting sign in form to backend
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state for connecting sign up form to backend
  const[ newFullName, setNewFullName] = useState("")
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [category, setCategory] = useState("");

  //submit function for connecting sign in form to backend
  const handleSignInSubmit = (e) => {
    e.preventDefault();
   

    const signIn = {
      email,
      password,
    };

    // console.log(userApplication);
    // alert("Application Succesful")

    fetch("https://creek-backend.herokuapp.com/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signIn),
    })
      .then(() => {
        console.log("Sign in succesful");
        setEmail("");
        setPassword("");
        alert("Sign in succesful");
        // navigate("/Connect");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  //submit function for connecting sign up form to backend
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setNewFullName("")
    setNewEmail("");
    setNewPassword(""); 
    setCategory("");
    const signUp = {
      newFullName,
      newEmail,
      newPassword,
      category
    };

    // console.log(userApplication);
    // alert("Application Succesful")

    fetch("https://creek-backend.herokuapp.com/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUp),
    })
      .then(() => {
        console.log("Sign up succesful");
        alert("Sign up succesful");
        // navigate("/Connect");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div className="membership--container">
      <div className="layout">
        <Fade top delay={300}>
          <div className="image--container">
            <div className="image">
              <Link to="/">
                {" "}
                <img src={MembershipLogo} alt="" />
              <div className="color-div-three"></div>
              </Link>
            </div>
          </div>
        </Fade>

        <Fade bottom delay={300}>
          <div className="form--container">
            <h3>Join the &lt;creek /&gt;</h3>
            <div className="trigers">
              <button onClick={() => setForm(true)}>Sign In</button>
              <button onClick={() => setForm(false)}>Register</button>
            </div>

            <div className="sign--in">
              {form ? (
                <form onSubmit={handleSignInSubmit}>
                  <div className="inputs">
                    <input
                      type="email"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="checkbox--container">
                    <div className="check--box">
                      <input type="checkbox" /> <span>Remember me</span>
                    </div>
                    <div className="forgot--text">
                      <a href="/membership"> Forgotten Password? </a>
                    </div>
                  </div>
                  <div className="btn">
                    <button>Log In</button>
                  </div>
                </form>
              ) : null}
            </div>

            {/*  register form */}
            <div className="register">
              {!form ? (
                <form onSubmit={handleSignUpSubmit}>
                  <div className="inputs">
                    <input type="text" placeholder="Enter Fullname" 
                    required
                    value={newFullName}
                    onChange={(e) => setNewFullName(e.target.value)}
                    />
                    <input type="email" placeholder="Enter email"
                     required
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)} />
                    <select
                      name="category"
                      id="category"
                      placeholder="Please Select"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}>
                      <option value="Please Select">Please Select</option>
                      <option value="Enthusiast">Enthusiast</option>
                      <option value="Services">Services</option>
                      <option value="Veteran">Veteran</option>
                    </select>
                    
                  <input
                      type="password"
                      placeholder="Enter password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>


                  <div className="checkbox--container">
                    <div className="check--box">
                      <input type="checkbox" /> <span>Remember me</span>
                    </div>
                    <div className="forgot--text">
                      <a href="/membership"> Forgotten Password? </a>
                    </div>
                  </div>
                  <div className="btn">
                    <button>Log In</button>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </Fade>

      </div>

{/* color design div */}
        <div className="color-div"></div>
        <div className="color-div-two"></div>
    </div>
  );
};

export default MembershipPage;
