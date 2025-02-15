import React from 'react';
import { Button, Text, Flex } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const SocialButton = ({ platform }) => {
  const platformConfig = {
    google: {
      text: 'Google',
      icon: <FcGoogle />,
      bg: 'white',
      color: 'gray.700',
      borderColor: 'gray.400',
      iconColor: '#EA4335',
    },
    facebook: {
      text: 'Facebook',
      icon: <FaFacebook />,
      bg: 'white',
      color: 'gray.700',
      borderColor: 'gray.400',
      iconColor: '#1877F2',
    },
  };

  const { text, icon, bg, color, borderColor, iconColor } = platformConfig[platform];

  return (
    <Button
      w="65%"
      bg={bg}
      color={color}
      border="2px solid"
      borderColor={borderColor}
      borderRadius="full"
      _hover={{ opacity: 0.85 }}
      fontWeight="medium"
      height="45px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="10px"
      padding="10px 60px"
    >
      <Flex alignItems="center" justifyContent="center" width="20px">
        {React.cloneElement(icon, { color: iconColor, size: "30px" })}
      </Flex>
      <Text flex="1" textAlign="center">{text}</Text>
    </Button>
  );
};

export default SocialButton;
