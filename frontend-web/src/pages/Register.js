import React, { useState } from "react";
import { register } from "../api/auth";
import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

function SignUpForm({ toggle }) {
  const toast = useToast();
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await register(state.email, state.name, state.password);
      toast({
        title: "Registration Successful",
        description: `Welcome, ${response.username || state.name}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Something went wrong, please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      align="center"
      justify="center"
      background="gray.100"
    >
      <Flex
        width="900px"
        height="500px"
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
        background="white"
      >
        {/* Left Side */}
        <Flex
          flex={1}
          background="blue.600"
          color="white"
          align="center"
          justify="center"
          flexDirection="column"
          p={10}
        >
          <Heading size="lg">Join Us!</Heading>
          <Text mt={2}>Create an account</Text>
        </Flex>

        {/* Right Side - SignUp Form */}
        <Flex flex={1} align="center" justify="center" p={10}>
          <Box width="80%">
            <Heading size="lg" textAlign="center">
              Sign Up
            </Heading>

            <Flex justify="center" gap={3} my={4}>
              <IconButton icon={<FaFacebookF />} colorScheme="facebook" />
              <IconButton icon={<FaGoogle />} colorScheme="red" />
              <IconButton icon={<FaLinkedinIn />} colorScheme="linkedin" />
            </Flex>

            <Text fontSize="sm" mb={4} textAlign="center">
              or use your email
            </Text>

            <InputGroup mb={3}>
              <InputRightElement>
                <FaUser color="gray.400" />
              </InputRightElement>
              <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            </InputGroup>

            <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={loading}>
              Sign Up
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUpForm;
