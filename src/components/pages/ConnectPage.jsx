import applicants from "./applicant";
import "../styles/connect.scss";
import { Zoom } from "react-reveal";
import Image from "../images/jesse.jpg";

const ConnectPage = () => {
  return (
    <div className="container">
      <div className="connect-header">
        <div className="heading">
          <h1>
            {" "}
            <span style={{ color: "#fff/* 87b4d1 122646 */" }}>
              Connect With Applicants
            </span>{" "}
            For Ongoing Programs
          </h1>
        </div>
        <div className="connect-text">
          <p>
            At the Creek we encourage socialization and social engagements. After a
            succesful registration for any ongoing application at the moment,
            applicants with complete registration get access to connect with
            other succesful applicants. <br />
            NOTE: All applicants have rights to whether their details are
            uploaded here or not.
          </p>
          <cite>
            note: this page is only available to you on succesful
            application.
          </cite>
        </div>
        <div className="color-div"></div>
        <div className="color-div-two"></div>
        <div className="color-div-three"></div>
        <div className="color-div-four"></div>
      </div>
      <div className="connect-icon">
        <h3>Find Amazing People And Connect With..</h3>
      </div>

      <div className="applicants--container">
        {applicants.map((applicant, index) => {
          return (
            <Zoom>
              <div className="details">
                <div className="person--container">
                  <div className="image">
                    <img src={Image} alt="Applicants" />
                  </div>
                  <div className="text">
                    <div className="header">
                      <h6>
                        {" "}
                        {`Name: ${applicant.firstName}  ${applicant.lastName}`}
                      </h6>
                    </div>
                    <div className="state">
                      <p> {`State Of Origin: ${applicant.state}`} <br /> Course: coding</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectPage;
