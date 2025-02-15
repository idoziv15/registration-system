import React from 'react';
import { Button } from '@chakra-ui/react';

const LoginButton = ({ text, handleOnSubmit }) => {
  return (
    <Button
      w="100%"
      color="white"
      bg="brand.disabled"
      borderRadius="full"
      _hover={{ bg: 'brand.hover' }}
      _disabled={{ bg: 'brand.disabled' }}
      fontWeight="medium"
      height="50px"
      onClick={handleOnSubmit}
    >
      {text}
    </Button>
  );
};

export default LoginButton;