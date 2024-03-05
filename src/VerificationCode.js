// Component for OTP verification.Renders a form to input the OTP sent to the user's mobile number.
import React, { useState, useRef, useEffect } from "react";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerificationCode = () => {
  const [codes, setCodes] = useState(["", "", "", ""]); // State to store the entered OTP
  const [error, setError] = useState(null); // State to manage error messages
  const [isVerifying, setIsVerifying] = useState(false); // State to track verification process
  const [verificationCode, setVerificationCode] = useState(""); // State to store the generated verification code

  const navigate = useNavigate();
  const inputRefs = useRef([]);

  // Function to generate a random 4-digit verification code
  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    setVerificationCode(code.toString()); // Convert the number to a string
  };

  // Call the function to generate the verification code
  useEffect(() => {
    generateVerificationCode();
  }, []);

  const handleCodeChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Move focus to the previous input when backspace is pressed
    if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Move focus to the next input when a value is entered and the maximum length is reached
    if (value.length === 1 && index < codes.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if any input field is empty
    if (codes.some((code) => code === "")) {
      setError("verification code is required");
      return;
    }
    // Check if the entered OTP matches the generated code
    if (codes.join("") !== verificationCode) {
      setError("Invalid verification code. Please enter the correct code");
      return;
    }

    setIsVerifying(true);

    //API endpoint for OTP verification
    try {
      const response = await axios.post(
        "https://2978e456-03b7-460f-8382-55b05ba6736a.mock.pstmn.io/verify-otp",
        { otp: verificationCode }
      );

      if (response.status === 200) {
        console.log("OTP verification successful");
        navigate("/image-upload");
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="verification-code">
      <div className="center-image">
        <img
          src="https://i.ibb.co/YNVVNfW/pngtree-vector-lock-icon-png-image-318067-removebg-preview.png"
          alt="lockImg"
          border="0"
          className="lock-img"
        />
      </div>
      <form onSubmit={handleSubmit} className="verification-form">
        <h2>OTP Verification</h2>
        <div className="code-container">
          <p>Enter the OTP sent to your mobile Number:</p>
          <p className="otp-verification">OTP: {verificationCode}</p>{" "}
          <div className="code">
            {codes.map((code, index) => (
              <input
                key={index}
                type="text"
                placeholder="0"
                maxLength="1"
                value={code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
                ref={(input) => (inputRefs.current[index] = input)}
              />
            ))}
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isVerifying}>
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerificationCode;
