import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen"; // Import your screens
import UserDetails from "./UserDetails";
import VerificationCode from "./VerificationCode";
import ImageUpload from "./ImageUpload";
import SucessScreen from "./SucessScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/image-upload" element={<ImageUpload />} />
        <Route path="/success" element={<SucessScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
