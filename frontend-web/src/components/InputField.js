import React from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = ({ name, placeholder, value, onChange, type = "text", icon, passwordToggle = false, showPassword, togglePassword }) => {
  let IconComponent;
  switch (icon) {
    case "email":
      IconComponent = FaEnvelope;
      break;
    case "user":
      IconComponent = FaUser;
      break;
    case "password":
    default:
      IconComponent = FaLock;
      break;
  }

  return (
    <InputGroup>
      <InputLeftElement height="100%">
        <IconComponent color="#4B49AC" />
      </InputLeftElement>
      <Input
        name={name}
        type={passwordToggle ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor="gray.300"
        _hover={{ borderColor: 'brand.primary' }}
        _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 2px #4B49AC' }}
        borderRadius="md"
        height="45px"
      />
      {passwordToggle && (
        <InputRightElement height="100%">
          <IconButton
            aria-label="Toggle password visibility"
            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            size="sm"
            borderColor="transparent"
            variant="unstyled"
            onClick={togglePassword}
            _hover={{ color: 'brand.primary' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: 'transparent' }}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputField;
