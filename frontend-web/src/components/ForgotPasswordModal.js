import React, { useState } from 'react';
import { 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
  ModalBody, ModalFooter, Button, Input, Text, useToast 
} from '@chakra-ui/react';
import { forgotPassword } from "../api/auth";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await forgotPassword(email);
      let title = response.success ? "Email sent!" : "Error!";
      let msg = response.success ? "Email with the new password sent to your email." : "The provided email isn't registered in our system.";
      let status = response.success ? "success" : "error";

      toast({
        title: title,
        description: msg,
        status: status,
        duration: 5000,
        isClosable: true,
        position: "top-end",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later.",
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Forgot Password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={3}>Enter your email address to reset your password.</Text>
          <Input 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleForgotPassword} isLoading={loading}>
            Reset Password
          </Button>
          <Button onClick={onClose} variant="ghost">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ForgotPasswordModal;
