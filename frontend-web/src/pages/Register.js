import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, VStack, Text, Divider, HStack, Link, Flex, Image, useToast, Spinner } from '@chakra-ui/react';
import { register } from "../api/auth";
import RegisterButton from '../components/RegisterButton';
import SocialButton from '../components/SocialButton';
import InputField from '../components/InputField';
import registerImage from '../assets/registerIllustration.svg';

const RegisterForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const allFieldsFilled = Object.values(state).every(value => value.trim() !== "");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const validateForm = () => {
    const { email, password, repeatPassword } = state;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email!",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }

    // Password Match Validation
    if (password !== repeatPassword) {
      toast({
        title: "Password Mismatch!",
        description: "Passwords do not match. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const { email, name, password, repeatPassword } = state;

    try {
      const response = await register(email, name, password);
      toast({
        title: "Registration Successful!",
        description: response.rnd_text,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
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
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="brand.lightGray"
      overflowY="auto"
    >
      <Box
        display="flex"
        boxShadow="2xl"
        borderRadius="xl"
        overflow="hidden"
        width="900px"
        height="auto"
        bg="white"
      >
        {/* Left Panel with Form */}
        <Box flex="1" px={12} py={8} position="relative">
          <Text fontSize="2xl" fontWeight="semibold" mb={6} color="brand.primary" textAlign="center">Sign Up</Text>
          <VStack spacing={3}>

            {/* Email Input */}
            <InputField
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              icon="email"
            />

            {/* Name Input */}
            <InputField
              name="name"
              placeholder="username"
              value={state.name}
              onChange={handleChange}
              icon="user"
            />

            {/* Password Input */}
            <InputField
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              icon="password"
              type="password"
              passwordToggle
              showPassword={showPassword} 
              togglePassword={togglePasswordVisibility} 
            />

            {/* Repeat Password Input */}
            <InputField
              name="repeatPassword"
              placeholder="Confirm Your Password"
              value={state.repeatPassword}
              onChange={handleChange}
              icon="password"
              type="password"
              passwordToggle
              showPassword={showRepeatPassword} 
              togglePassword={toggleRepeatPasswordVisibility} 
            />

            {/* Register Button */}
            <RegisterButton text="Register" handleOnSubmit={handleOnSubmit} isDisabled={!allFieldsFilled} />
            {loading ? <Spinner size="sm" /> : "Registering..."}

            {/* "Or" Text */}
            <Flex align="center" w="100%" my={2}>
              <Divider />
              <Text color="gray.500" fontSize="sm" px={2}>Or</Text>
              <Divider />
            </Flex>

            {/* Social Logins */}
            <VStack spacing={3} w="100%" align="center">
              <HStack spacing={3} justify="center">
                <SocialButton platform="google" />
                <SocialButton platform="facebook" />
              </HStack>
            </VStack>
          </VStack>

          {/* Login Section - Fixed */}
          <Box mt={4} textAlign="center" w="100%">
            <Text fontSize="sm" color="gray.600" mb={2}>
              Already have an account?
            </Text>
            <Flex justifyContent="center">
            <Box
              as="button"
              color="brand.primary"
              border="1px solid"
              borderColor="brand.primary"
              borderRadius="full"
              px={6}
              py={2}
              fontWeight="medium"
              _hover={{ bg: 'brand.primary', color: 'white' }}
              textAlign="center"
              fontSize="md"
              bg="white"
              boxShadow="sm"
              w="full"
              display="inline-block"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Box>
            </Flex>
          </Box>
        </Box>

        {/* Right Panel with Illustration */}
        <Box
          bg="brand.primary"
          flex="1"
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={6}
        >
          <Box mb={5}>
            <Image src={registerImage} alt="Illustration" style={{ width: '220px' }} />
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Welcome aboard my friend</Text>
          <Text fontSize="sm" color="whiteAlpha.800">Just a couple of clicks and we start</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
