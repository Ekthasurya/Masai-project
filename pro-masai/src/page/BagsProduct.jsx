import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bags } from '../Data/bags';

const BagsProduct = () => {
  const [data, setData] = useState(bags);
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

      {/* Responsive Grid for Products */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }} // Responsive columns
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
          >
            <Link to={`/bags/${item.id}`}>
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
                <Box fontWeight="600">{item?.title}</Box>
                <Box>{item.price}$</Box>
              </Flex>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BagsProduct;
