import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();

  // Load cart data and calculate totals
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
    calculateTotals(cartData);
  }, []);

  // Calculate total items and amount
  const calculateTotals = (cartData) => {
    const items = cartData.length;
    const amount = cartData.reduce((acc, item) => acc + Number(item.price), 0);
    setTotalItems(items);
    setTotalAmount(amount);
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotals(updatedCart);
  };

  // Navigate to payment page
  const proceedToPayment = () => {
    if (cart.length === 0) {
      toast({
        title: 'Cart is empty!',
        description: 'Please add items to your cart before proceeding.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      navigate('/payment'); // Navigate to the payment page
    }
  };

  if (cart.length === 0) {
    return (
      <Box textAlign="center" mt={8}>
        <Text fontSize="2xl" color="gray.500">
          Your cart is empty!
        </Text>
      </Box>
    );
  }

  return (
    <Box mt={8}>
      {/* Display Total Items and Total Amount */}
      <Box mb={8} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">Total Items: {totalItems}</Text>
        <Text fontSize="2xl" fontWeight="bold" color="green.500">
          Total Amount: ${totalAmount}
        </Text>
      </Box>

      {/* Display Cart Items */}
      {cart.map((item) => (
        <Flex
          key={item.id}
          border="1px solid rgba(0, 0, 0, 0.1)"
          p={4}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <img src={item.img} alt={item.title} width={100} />
          </Box>
          <Box>
            <Text fontSize="xl">{item.title}</Text>
            <Text fontSize="lg">${item.price}</Text>
          </Box>
          <Button
            colorScheme="red"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </Flex>
      ))}

      {/* Proceed to Payment Button */}
      <Box textAlign="center" mt={8}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={proceedToPayment}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
