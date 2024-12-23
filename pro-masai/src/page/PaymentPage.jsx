import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv) {
      // Simulate payment process
      toast({
        title: 'Payment Successful',
        description: 'Your order has been placed successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Clear the cart
      localStorage.removeItem('cart');

      // Navigate back to home or orders page
      setTimeout(() => navigate('/'), 2000); // Redirect to homepage after payment
    } else {
      toast({
        title: 'Payment Failed',
        description: 'Please fill all the details correctly.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Payment Details
      </Text>
      <Box mb={4}>
        <Text>Card Number:</Text>
        <Input
          placeholder="1234 5678 9123 4567"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </Box>
      <Flex mb={4} gap={4}>
        <Box>
          <Text>Expiry Date:</Text>
          <Input
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </Box>
        <Box>
          <Text>CVV:</Text>
          <Input
            placeholder="123"
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Box>
      </Flex>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </Box>
  );
};

export default PaymentPage;