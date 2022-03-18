import "../styles/about.scss";
import Background from "../images/bg-create.png";
// import { useEffect, useState } from "react";

const AboutPage = () => {
  // const [appliedStudents, setAppliedStudents] = useState("");



 
    /* 
const getAppliedStudents = async ()=>{
const response = await fetch('http://localhost:4000/', {mode:'cors'});
const data = await response.json();
console.log({data});
} 


getAppliedStudents();
 */  

   
  return (
    <div className="about--layout">
      <div className="section">
        <div className="text--section">
          <h3>
            <span style={{ color: "#24499d" }}>About </span> the &lt;Creek /&gt;
          </h3>
          <p>
            " Tech Creek is a habitat for the teeming population of youths
            making sense out of their lives with their digital skills and
            competencies, and actively involved in the development of the ‘new
            economy’ from Rivers State. Our culture is at the heart of
            everything we do. It reinforces our core values which create the
            perfect picture of our existence as the melting pot for the
            development of tech capacities and opportunities in the region.
            “Tech Creek is the pilot for a new set of creeks that would house
            creativity in design and system development in the Niger Delta.” "
          </p>
        </div>

        <div className="image--section">
          <img src={Background} alt="" />
        </div>
        <div className="color-div"></div>
        <div className="color-div-two"></div>
        <div className="color-div-three"></div>
        <div className="color-div-four"></div>
        <div className="color-div-five"></div>
      </div>
    </div>
  );
};

export default AboutPage;
