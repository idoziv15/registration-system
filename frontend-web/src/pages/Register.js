import React, { useState } from "react";
import { register } from "../api/auth";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Spinner, useToast } from "@chakra-ui/react";

function SignUpForm() {
  const toast = useToast();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password } = state;

    try {
      const response = await register(email, name, password);
      console.log(response)
      toast({
        title: "Registration Successful!",
        description: response,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      
      toast.success(`✅ Registration successful! Welcome ${response.rnd_text}`);
    } catch (error) {
      toast({
        title: "Error!",
        description: "❌ Registration failed! Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
        {loading ? <Spinner size="sm" /> : "Register"}
      </form>
    </div>
  );
}

export default SignUpForm;
