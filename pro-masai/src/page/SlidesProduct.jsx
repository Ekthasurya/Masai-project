import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slides } from '../Data/slides';

const SlidesProduct = () => {
  const [data, setData] = useState(slides);
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
      <Button
        onClick={handleSort}
        mb={4}
        colorScheme="blue"
        margin={5}
      >
        Sort by Price ({isSortedAsc ? 'Ascending' : 'Descending'})
      </Button>
      
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} // Responsive grid columns
        gap={5}
      >
        {data.map((item) => (
          <GridItem key={item.id}>
            <Box w="100%" p={6} bg="#fff" border="1px solid rgba(0, 0, 0, 0.102)" boxShadow="md">
              <Link to={`/slides/${item.id}`}>
                <Box mb={4}>
                  <img
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>
                <Flex justifyContent="space-between">
                  <Box fontWeight={600}>{item.title}</Box>
                  <Box>{item.price}$</Box>
                </Flex>
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default SlidesProduct;
