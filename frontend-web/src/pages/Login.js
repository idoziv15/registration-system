import React, { useState } from 'react';
import { Box, VStack, Text, Divider, HStack, Link, Flex, Image, useToast, Spinner } from '@chakra-ui/react';
import { login } from "../api/auth";
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';
import InputField from '../components/InputField';
import loginImage from '../assets/loginIllustration.svg';

const LoginForm = () => {
  const toast = useToast();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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
    const { email, password } = state;

    try {
      const response = await login(email, password);
      console.log("In login page 2: ", response)
      toast({
        title: `Hello, ${response.username} You are logged in Successfully!`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-end",
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Login failed! Please check your credentials.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-end",
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
        height="520px"
        bg="white"
      >
        {/* Left Panel with Illustration */}
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
            <Image src={loginImage} alt="Illustration" style={{ width: '220px' }} />
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Welcome aboard my friend</Text>
          <Text fontSize="sm" color="whiteAlpha.800">Just a couple of clicks and we start</Text>
        </Box>

        {/* Right Panel with Form */}
        <Box flex="1" p={8} position="relative">
          <Text fontSize="2xl" fontWeight="semibold" mb={6} color="brand.primary" textAlign="center">Log in</Text>
          <VStack spacing={3}>

            {/* Email Input */}
            <InputField
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              icon="email"
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
            />

            {/* Forgot Password */}
            <HStack w="100%" justify="flex-end">
              <Link color="brand.primary" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                Forgot password?
              </Link>
            </HStack>

            {/* Login Button */}
            <LoginButton text="Log in" handleOnSubmit={handleOnSubmit} />
            {loading ? <Spinner size="sm" /> : "Signing in..."}

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

              {/* Register Section */}
              <Box mt={2} textAlign="center" w="100%">
                <Text fontSize="sm" color="gray.600" mb={2}>
                  Have no account yet?
                </Text>
                <Link
                  color="brand.primary"
                  border="1px solid"
                  borderColor="brand.primary"
                  borderRadius="full"
                  px={6}
                  py={2}
                  fontWeight="medium"
                  _hover={{ bg: 'brand.primary', color: 'white' }}
                  w="full"
                  display="inline-block"
                >
                  Register
                </Link>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
