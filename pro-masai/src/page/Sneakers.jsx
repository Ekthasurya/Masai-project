import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ShoesProduct from '../Component/ShoesProduct';
import { Link } from 'react-router-dom';

const Sneakers = () => {
  return (
    <div>
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack on small screens, row layout on larger screens
        wrap="wrap"
        justify="space-between"
        w="100%"
        p={5}
        gap={4} // Adds spacing between elements
      >
        {/* Sidebar */}
        <Box
          h="auto"
          w={{ base: '100%', md: '300px' }} // Full width on small screens, fixed width on larger screens
          mb={{ base: 4, md: 0 }} // Adds margin bottom for small screens
          bg="gray.50"
          borderRadius="md"
          boxShadow="sm"
        >
          <Box fontSize={{ base: '20px', md: '25px' }} fontWeight={900} p={5}>
            Shoes
          </Box>
          <hr />
          <Box p={5}>
            <Text fontSize={{ base: '18px', md: '20px' }} fontWeight={600} m={2}>
              Category
            </Text>
            <hr />
            <Link to="/slides">
              <Text m={2}>Slides</Text>
            </Link>
            <hr />
            <Link to="/sneakers">
              <Text m={2}>Sneakers</Text>
            </Link>
            <hr />
            <Link to="/sneakers">
              <Text m={2}>Cross Training Shoes</Text>
            </Link>
            <hr />
            <Link to="/sneakers">
              <Text m={2}>Trail Training Shoes</Text>
            </Link>
            <hr />
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          w={{ base: '100%', md: 'calc(100% - 320px)' }} // Full width on small screens, remaining width on larger screens
          maxW="1030px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* Banner Image */}
          <Box w="100%" mb={4}>
            <img
              style={{
                width: '100%',
                height: 'auto', // Maintains aspect ratio
                maxHeight: '300px',
                objectFit: 'cover',
              }}
              src="https://th.bing.com/th/id/OIP.24cSqpCRAwjBxKAs5lF4mgHaE8?w=342&h=186&c=7&r=0&o=5&pid=1.7"
              alt="Shoes Banner"
            />
          </Box>

          {/* Products Component */}
          <ShoesProduct />
        </Box>
      </Flex>
    </div>
  );
};

export default Sneakers;
