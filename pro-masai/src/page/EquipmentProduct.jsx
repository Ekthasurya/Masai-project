import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { equipment } from '../Data/equipment';

const EquipmentProduct = () => {
  const [data, setData] = useState(equipment);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) =>
      isSortedAsc ? a.price - b.price : b.price - a.price
    );
    setData(sortedData);
    setIsSortedAsc(!isSortedAsc); // Toggle sort order
  };

  return (
    <>
      {/* Sort Button */}
      <Button
        onClick={handleSort}
        mb={4}
        colorScheme="blue"
        m={5}
      >
        Sort by Price ({isSortedAsc ? 'Ascending' : 'Descending'})
      </Button>

      {/* Responsive Grid for Equipment Products */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}  // 1 column on mobile, 2 on small devices, 3 on medium, and 4 on large devices
        spacing={5}
        p={5}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            bg="white"
            border="1px solid rgba(0, 0, 0, 0.102)"
            borderRadius="md"
            overflow="hidden"
            shadow="md"
            p={4}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}  // Hover effect for better interaction
          >
            <Link to={`/equipment/${item.id}`}>
              {/* Product Image */}
              <Box textAlign="center" mb={3}>
                <img
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    margin: '0 auto',
                  }}
                  src={item?.img}
                  alt={item?.title}
                />
              </Box>
              {/* Product Details */}
              <Flex justifyContent="space-between" alignItems="center">
                <Box fontWeight="600" fontSize={{ base: 'sm', sm: 'md' }}>
                  {item?.title}
                </Box>
                <Box fontSize={{ base: 'sm', sm: 'md' }}>
                  ${item.price}
                </Box>
              </Flex>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EquipmentProduct;
