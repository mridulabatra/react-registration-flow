//  Component representing the user details form for account registration.

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios for making API requests
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";
import VerificationCode from "./VerificationCode";
import "./UserDetails.css";

const UserDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Trigger validation on input change
    Object.keys(errors).forEach((key) => {
      if (errors[key]) {
        setValue(key, ""); // Clear error if input changes
      }
    });
  }, [setValue, errors]);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setValue(name, value);
    await trigger(name); // Trigger validation for the field
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Make a POST request to the API endpoint
      const userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
      };
      const response = await axios.post(
        "https://2978e456-03b7-460f-8382-55b05ba6736a.mock.pstmn.io/user",
        userData
      );

      if (response.status === 200) {
        const { userid } = response.data.userid;
        setUserId(userid);
        console.log("API call successful", response.data.userid);
        navigate("/verification-code");
      } else {
        console.error("API call failed", response.data.userid);
      }
    } catch (error) {
      console.error("API call error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <img
        src="https://images.hindustantimes.com/img/2022/10/26/1600x900/House_Eazy_1666786916435_1666786924713_1666786924713.jpg"
        alt="Logo"
        className="logo"
      />
      <img
        src="https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="sideImage"
        className="sideImage"
      />
      {!userId ? (
        <form onSubmit={handleSubmit(onSubmit)} className="user-details-form">
          <h1>Create your account</h1>
          <p>Fill the form to create an account</p>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              {...register("firstName", {
                required: "First name is required",
                validate: (value) =>
                  value.trim() !== "" || "First name cannot be empty",
              })}
              onChange={handleInputChange}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <span className="error-msg">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              {...register("lastName", {
                required: "Last name is required",
                validate: (value) =>
                  value.trim() !== "" || "Last name cannot be empty",
              })}
              onChange={handleInputChange}
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <span className="error-msg">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              })}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="error-msg">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              id="mobile"
              name="mobile"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: { value: /^\d+$/, message: "Invalid mobile number" },
              })}
              onChange={handleInputChange}
            />
            {errors.mobile && (
              <span className="error-msg">{errors.mobile.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      ) : (
        <VerificationCode userId={userId} />
      )}
    </>
  );
};

export default UserDetails;
