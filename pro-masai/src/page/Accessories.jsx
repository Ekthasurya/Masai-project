import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import AccerrProduct from '../Component/AccerrProduct';
import { Link } from 'react-router-dom';

const Accessories = () => {
  return (
    <div>
      <Flex
        direction={{ base: 'column', md: 'row' }} // Base: column for small screens, md: row for medium and larger screens
        wrap="wrap"
        justify="space-between"
        w="100%"
        p={5}
        gap={4} // Adds spacing between items
      >
        {/* Sidebar */}
        <Box
          h="auto"
          w={{ base: '100%', md: '300px' }} // Full width on small screens, fixed width on larger screens
          mb={{ base: 4, md: 0 }} // Adds bottom margin on small screens
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

        {/* Content Area */}
        <Box
          w={{ base: '100%', md: 'calc(100% - 320px)' }} // Full width on small screens, remaining width on larger screens
          maxW="1030px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* Responsive Image */}
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

          {/* Product Component */}
          <AccerrProduct />
        </Box>
      </Flex>
    </div>
  );
};

export default Accessories;
