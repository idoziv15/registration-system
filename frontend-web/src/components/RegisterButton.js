import React from 'react';
import { Button } from '@chakra-ui/react';

const RegisterButton = ({ text, handleOnSubmit, isDisabled }) => {
  return (
    <Button
      w="100%"
      color="white"
      bg={isDisabled ? "brand.disabled" : "#4C50A9"}
      borderRadius="full"
      _hover={isDisabled ? {} : { bg: "brand.hover" }}
      _disabled={{ bg: "brand.disabled", cursor: "not-allowed" }}
      fontWeight="medium"
      height="50px"
      onClick={handleOnSubmit}
      isDisabled={isDisabled}
    >
      {text}
    </Button>
  );
};

export default RegisterButton;
