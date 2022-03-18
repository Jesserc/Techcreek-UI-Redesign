// import "../styles/modalApplicationForm.scss";
// const ModalApplicationForm = ({ handleModal }) => {
//   return (
//     /* import Close from '../Components/Assets/Img/ic_nav_close.svg';
//      */

//     <div className="application--modal">
//       <div className="modal--layout">
//         {/* modal header */}

//         <div className="modal--header">
//           <div className="heading">
//             <h5>ICT & Digital Literacy Training </h5>
//           </div> 

//           <div className="disable--text--trigger">
//             <span onClick={handleModal}>X</span>
//           </div>
//         </div>

//         <div className="modal--body">
//           <div className="modal--description">
//             <strong>
//               <p>
//                 Training fee is N20,000(Twenty Thousand Naira only). <br />
//                 <span style={{ color: "red" }}>
//                   <strong>**</strong>
//                 </span>
//                 Make payment to RSG Information & Comm. Dept(ICT) <br />
//                 1011616837 <br />
//                 Zenith Bank <br />
//                 Submit Teller or payment receipt at Riv-TechCreek, R/S ICT Dept,
//                 Aba Road, PH
//                 <span style={{ color: "red" }}>
//                   {" "}
//                   <strong>**</strong>{" "}
//                 </span>
//               </p>
//             </strong>
//           </div>

//           <div className="registration--section">
//             <div className="personal--information--section">
//               <div className="header">
//                 <h5>Personal Information</h5>
//               </div>

//               <div className="personal--information--form">
//                 <div className="first--row">
//                   {/* firstname form */}
//                   <form action="" method="post">
//                     <label htmlFor="firstname">
//                       <input type="text" placeholder="First Name*" />
//                     </label>
//                   </form>

//                   <form action="">
//                     {/* middlename form */}
//                     <label htmlFor="middlename">
//                       <input type="text" placeholder="Middle Name*" />
//                     </label>
//                   </form>

//                   <form action="">
//                     {/* lastname form */}

//                     <label htmlFor="lname">
//                       <input type="text" placeholder="Last Name*" />
//                     </label>
//                   </form>
//                 </div>

//                 <div className="second--row">
//                   {/* dateofbirth form */}
//                   <form>
//                     <label htmlFor="date">
//                       <input type="text" placeholder="Date of Birth*" />
//                     </label>
//                   </form>

//                   <form action="">
//                     {/* select education form */}

//                     <label for htmlFor="select">
//                       <select className="education--section">
//                         --Select Education--
//                         <option value="--Select Education">
//                           --Select Education--
//                         </option>
//                         <option value="O-level">O-level</option>
//                         <option value="Undergraduate">Undergraduate</option>
//                         <option value="Bachelors Degree">
//                           Bachelors Degree
//                         </option>
//                         <option value="OND/HND">OND/HND</option>
//                         <option value="Masters Degree">Masters Degree</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </label>
//                   </form>

//                   <form>
//                     {/* gender form */}

//                     <label htmlFor="gender">
//                       <select className="gender--selection">
//                         <option value="--gender--">--gender--</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </select>
//                     </label>
//                   </form>
//                 </div>

//                 <div className="third--row">
//                   <form action="">
//                     {/* state of origin form */}
//                     <select>
//                       <option value="--Select State of Origin--">
//                         --Select State of Origin--
//                       </option>
//                       <option value="Abuja FCT">Abuja FCT</option>
//                       <option value="Abia State">Abia</option>
//                       <option value="Adamawa">Adamawa</option>
//                       <option value="Akwa Ibom">Akwa Ibom</option>
//                       <option value="Anambra">Anambra</option>
//                       <option value="Bauchi">Bauchi</option>
//                       <option value="Bayelsa">Bayelsa</option>
//                       <option value="Benue">Benue</option>
//                       <option value="Borno">Borno </option>
//                       <option value="Cross River">Cross River</option>
//                       <option value="Delta">Delta</option>
//                       <option value="Ebonyi">Ebonyi</option>
//                       <option value="Edo">Edo</option>
//                       <option value="Ekiti">Ekiti</option>
//                       <option value="Enugu"> Enugu</option>
//                       <option value="Gombe">Gombe</option>
//                       <option value="Imo">Imo</option>
//                       <option value="Jigawa">Jigawa</option>
//                       <option value="Kaduna">Kaduna</option>
//                       <option value="Kano">Kano</option>
//                       <option value="Katsina">Katsina</option>
//                       <option value="Kebbi">Kebbi</option>
//                       <option value="Kogi">Kogi</option>
//                       <option value="Kwara">Kwara</option>
//                       <option value="Lagos">Lagos</option>
//                       <option value="Nassarawa">Nassarawa</option>
//                       <option value="Niger">Niger</option>
//                       <option value="Ogun">Ogun</option>
//                       <option value="Ondo">Ondo</option>
//                       <option value="Osun">Osun</option>
//                       <option value="Oyo">Oyo</option>
//                       <option value="Plateau">Plateau</option>
//                       <option value="Rivers">Rivers</option>
//                       <option value="Sokoto">Sokoto</option>
//                       <option value="Taraba">Taraba</option>
//                       <option value="Yobe">Yobe</option>
//                       <option value="Zamfara">Zamfara</option>
//                     </select>
//                   </form>

//                   <form action="">
//                     {/* l.g.a form */}
//                     <label htmlFor="L.G.A of Origin">
//                       <input type="text" placeholder="L.G.A of Origin" />
//                     </label>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             <div className="contact--information--section"></div>

//             <div className="button--section"></div>
//           </div>

//           <div className="form--section">
//             <div className="forma">
//               {/*  <form>
              
//                 <label htmlFor="date">
//                   <input type="text" placeholder="Date of Birth*" />
//                 </label>
//               </form> */}
//             </div>

//             <div className="formb">
//               <form>
//                 {/*   <label htmlFor="mname">
//                   <input type="text" placeholder="Middle Name*" />
//                 </label>
//  */}
//                 {/* <label for htmlFor="select">
//                   <select>
//                   --Select Education--
//                     <option value="--Select Education">
//                       --Select Education--
//                     </option>
//                     <option value="O-level">O-level</option>
//                     <option value="Undergraduate">Undergraduate</option>
//                     <option value="Bachelors Degree">Bachelors Degree</option>
//                     <option value="OND/HND">OND/HND</option>
//                     <option value="Masters Degree">Masters Degree</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </label> */}
//               </form>
//             </div>

//             <div className="formc">
//               <form>
//                 {/* <label htmlFor="lname">
//                   <input type="text" placeholder="Last Name*" />
//                 </label>
//  */}
//                 {/*  <label htmlFor="gender">
//                   <select>
//                     <option value="--gender--">--gender--</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                   </select>
//                 </label> */}
//               </form>
//             </div>
//           </div>

//           <div class="origin">
//             <div class="select-style">
//               {/*   <select>
//                 <option value="--Select State of Origin--">
//                   --Select State of Origin--
//                 </option>
//                 <option value="Abuja FCT">Abuja FCT</option>
//                 <option value="Abia State">Abia</option>
//                 <option value="Adamawa">Adamawa</option>
//                 <option value="Akwa Ibom">Akwa Ibom</option>
//                 <option value="Anambra">Anambra</option>
//                 <option value="Bauchi">Bauchi</option>
//                 <option value="Bayelsa">Bayelsa</option>
//                 <option value="Benue">Benue</option>
//                 <option value="Borno">Borno </option>
//                 <option value="Cross River">Cross River</option>
//                 <option value="Delta">Delta</option>
//                 <option value="Ebonyi">Ebonyi</option>
//                 <option value="Edo">Edo</option>
//                 <option value="Ekiti">Ekiti</option>
//                 <option value="Enugu"> Enugu</option>
//                 <option value="Gombe">Gombe</option>
//                 <option value="Imo">Imo</option>
//                 <option value="Jigawa">Jigawa</option>
//                 <option value="Kaduna">Kaduna</option>
//                 <option value="Kano">Kano</option>
//                 <option value="Katsina">Katsina</option>
//                 <option value="Kebbi">Kebbi</option>
//                 <option value="Kogi">Kogi</option>
//                 <option value="Kwara">Kwara</option>
//                 <option value="Lagos">Lagos</option>
//                 <option value="Nassarawa">Nassarawa</option>
//                 <option value="Niger">Niger</option>
//                 <option value="Ogun">Ogun</option>
//                 <option value="Ondo">Ondo</option>
//                 <option value="Osun">Osun</option>
//                 <option value="Oyo">Oyo</option>
//                 <option value="Plateau">Plateau</option>
//                 <option value="Rivers">Rivers</option>
//                 <option value="Sokoto">Sokoto</option>
//                 <option value="Taraba">Taraba</option>
//                 <option value="Yobe">Yobe</option>
//                 <option value="Zamfara">Zamfara</option>
//               </select> */}
//             </div>

//             {/*   <label htmlFor="origin">
//               <input type="text" placeholder="L.G.A of Origin" />
//             </label> */}
//           </div>

//           <div className="contact--information--section">
//             <h5>Contact Information</h5>

//             <div className="form--section">
//               <div className="lastform">
//                 <form className="lastforma">
//                   <div className="emai">
//                     <label htmlFor="email">
//                       <input type="text" placeholder="Email Address*" />
//                     </label>
//                   </div>

//                     </form>
//               </div>
//                   <div className="phone">
//                     <label htmlFor="phone">
//                       <input type="text" placeholder="Phone Number*" />
//                     </label>
//                   </div>

//                   <textarea
//                     name=""
//                     id=""
//                     cols="1000"
//                     rows="5"
//                     placeholder="Residential Adress"></textarea>

//             </div>
//                <div className="btn">
//                <button>SUBMIT</button>
//                </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalApplicationForm;
