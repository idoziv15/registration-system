import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = ({ placeholder, value, onChange, type = "text", icon, passwordToggle = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const IconComponent = icon === "email" ? FaEnvelope : FaLock;

  return (
    <InputGroup>
      <InputLeftElement height="100%" children={<IconComponent color="#4B49AC" />} />
      <Input
        name={placeholder.toLowerCase()}
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
            onClick={togglePasswordVisibility}
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
