import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LoginForm from "./Login";
import SignUpForm from "./Register";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Flex width="50vw" height="100vh" align="center" justify="center" background="gray.100">
      <LoginForm />
    </Flex>
  );
}

export default AuthPage;
