import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import BagsProduct from './BagsProduct';
import { Link } from 'react-router-dom';

const Bags = () => {
  return (
    <div>
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack on small screens, row on larger screens
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
            Accessories
          </Box>
          <hr />
          <Box p={5}>
            <Text fontSize={{ base: '18px', md: '20px' }} m={2} fontWeight={600}>
              Category
            </Text>
            <hr />
            <Link to="/bags">
              <Text m={2}>Bags</Text>
            </Link>
            <hr />
            <Link to="/equipment">
              <Text m={2}>Equipment</Text>
            </Link>
            <hr />
            <Link to="/hats">
              <Text m={2}>Hats</Text>
            </Link>
            <hr />
            <Link to="/hair">
              <Text m={2}>Hair Accessories</Text>
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
              src="https://res.cloudinary.com/dhd5do52g/image/upload/v1735060813/acce1_lyomlr.jpg"
              alt="Accessories Banner"
            />
          </Box>

          {/* Products Component */}
          <BagsProduct />
        </Box>
      </Flex>
    </div>
  );
};

export default Bags;
