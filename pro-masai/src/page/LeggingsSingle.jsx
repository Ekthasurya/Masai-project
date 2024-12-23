import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { tankTops } from '../Data/TankTops';
import { Leggings } from '../Data/leggings';

const LeggingsSingle = () => {
  const { Id } = useParams();
  const product = Leggings.find((item) => item.id === parseInt(Id));

  // Add product to localStorage
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      alert('Product already in cart!');
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    }
  };

  if (!product) {
    return (
      <Box textAlign="center" mt={8}>
        <Text fontSize="2xl" color="red.500">
          Product not found!
        </Text>
      </Box>
    );
  }

  return (
    <Flex justifyContent="space-evenly" mt={8}>
      <Box w={400} border="2px solid">
        <img src={product.img} alt={product.title} />
      </Box>

      <Box textAlign="center">
        <Box mt={8} fontSize={35} fontWeight={500} textAlign="center">
          {product.title}
        </Box>
        <Flex gap={5} marginLeft={300} mt={8} fontSize={35} fontWeight={500}>
          <Text color="#c8102e">Price:</Text> ${product.price}
        </Flex>
        <Box textAlign="center" mt={12}>
          <Button
            p={2}
            w={400}
            size="lg"
            backgroundColor="#c8102e"
            color="white"
            border="1px solid black"
            onClick={addToCart}
          >
            ADD TO BAG
          </Button>
        </Box>
       

        <Box marginTop={20}>
          <Text fontSize={23} fontWeight={500}>Why we make this?</Text>
          <Text>{product?.description}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default LeggingsSingle;
