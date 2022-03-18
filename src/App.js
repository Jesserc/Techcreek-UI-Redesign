import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/pages/Home";
import Navbar from "./components/Navbar";
import LearnPage from "./components/pages/LearnPage";
import CreatePage from "./components/pages/CreatePage";
import ConnectPage from "./components/pages/ConnectPage";
import MembershipPage from "./components/pages/MembershiPage";
import AboutPage from "./components/pages/About";

function App() {
  return ( 
    <div className="layout">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Learn" element={<LearnPage />} />
          <Route path="/Create" element={<CreatePage />} />
          <Route path="/Connect" element={<ConnectPage />} />
          <Route path="/Membership" element={<MembershipPage />} />
          <Route path="/About" element={<AboutPage />} />
          
        </Routes>
      </Router>
    </div> 
  ); 
}

export default App;
