import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { tankTops } from '../Data/TankTops';

const TanktopsSingle = () => {
  const { Id } = useParams();
  const product = tankTops.find((item) => item.id === parseInt(Id));

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
    <Flex
      direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
      justifyContent="center"
      align="center"
      mt={8}
      p={4}
    >
      {/* Product Image */}
      <Box
        w={{ base: '100%', md: '400px' }} // Full width on mobile, fixed width on larger screens
        mb={{ base: 4, md: 0 }}  // Margin on mobile for spacing
        border="2px solid"
        borderRadius="md"
        overflow="hidden"
        shadow="md"
      >
        <img
          src={product.img}
          alt={product.title}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Product Details */}
      <Box textAlign="center" maxW="500px" ml={{ md: 8 }}>
        <Box mt={8} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={500}>
          {product.title}
        </Box>

        <Flex
          gap={5}
          justifyContent="center"
          mt={8}
          fontSize={{ base: 'lg', md: '2xl' }}
          fontWeight={500}
        >
          <Text color="#c8102e">Price:</Text> ${product.price}
        </Flex>

        <Box textAlign="center" mt={12}>
          <Button
            p={2}
            w={{ base: 'full', md: '400px' }} // Full width on mobile, fixed width on larger screens
            size="lg"
            backgroundColor="#c8102e"
            color="white"
            border="1px solid black"
            onClick={addToCart}
          >
            ADD TO BAG
          </Button>
        </Box>

        {/* Product Description */}
        <Box mt={20}>
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>
            Why we make this?
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{product?.description}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default TanktopsSingle;
