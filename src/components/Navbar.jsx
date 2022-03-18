import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import { useState } from "react";
import "../components/styles/navbar.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import BlueLogo from "./images/logo-blue.png";
import NotificationIcon from "./images/assets/ic_notification.svg";
// import CreatePage from "./pages/CreatePage";
import ModalApplicationForm from "./pages/ModalApplicationForm";

const Navbar = (props) => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Learn", path: "/Learn" },
    { title: "Create", path: "/Create" },
    { title: "Connect", path: "/Connect" },
    { title: "About Us", path: "/About" },
    { title: "Membership", path: "/Membership" },
  ];

  const [showTraining, setShowTraining] = useState(true);
  const handleClick = () => setShowTraining(!showTraining);

  //form modal
  const [modal, setModal] = useState(false);
  //modal function
  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div className="nav-bar">
      <nav>
        <div className="logo">
          <Link to="/" className="logo--link">
            <img src={BlueLogo} alt="" />
          </Link>
        </div>
        <ul>
          {
            /* <li>
                        <Link to='/'> Home</Link>
                    </li>
                    <li>
                        <Link to="/Learn">Learn</Link>
                    </li>

                    <li>
                        <Link to="/Create">Create</Link>
                    </li>


                    <li>
                        <Link to="/Connect">Connect</Link>
                    </li>

                    <li>
                        <Link to="/Membership">Join The Creek</Link>
                    </li> */
            navItems.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link to={navItem.path}>{navItem.title}</Link>
                </li>
              );
            })
          }
        </ul>
        <Pulse Pulse delay={1000} duration={2000} forever={true}>
          <div className="notification--container">
            <div className="trigger--bar" onClick={handleClick}>
              <span>Ongoing Application</span>
            </div>
            <div className="notification">
              <img src={NotificationIcon} alt="" />
            </div>

            {!showTraining ? (
              <div className="application--container" onClick={handleModal}>
                <span>ICT & Digital Literacy Training</span>
              </div>
            ) : null}
          </div>
        </Pulse>
      </nav>

      <Modal 
      {...props}
      size="lg"
      show={modal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
       className="modal--container"  >
        <ModalApplicationForm handleModal={handleModal}  handleClick={handleClick}/>
        {/* 
        <Modal.Header>
                <h3>Codegaminator 9.0 Application</h3>

        </Modal.Header>
        <Modal.Body>
          <div className="pproduct__page">
            <div className="product__container">
              <div className="img__container"></div>

              <div className="text__container">
  
          
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter fullname" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
{/*                     <Form.Check type="checkbox" label="Check me out" />
                 </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body> */}
        {/*       <Modal.Footer    <a href="/Applicants" className="mx-5"> View list Of Successful Applicants </a>
 Cancel</Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Navbar;
