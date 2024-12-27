import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AbcPants } from '../Data/AbcPants';

const ABCPants = () => {
  const [data, setData] = useState(AbcPants);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) =>
      isSortedAsc ? a.price - b.price : b.price - a.price
    );
    setData(sortedData);
    setIsSortedAsc(!isSortedAsc); // Toggle sort order
  };

  return (
    <Box bg=''>
      <Button
        onClick={handleSort}
        mb={4}
        colorScheme="blue"
        margin={5}
      >
        Sort by Price ({isSortedAsc ? 'Ascending' : 'Descending'})
      </Button>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
        p={5}
      >
        {data.map((item) => (
          <GridItem key={item.id}>
            <Box
              w="100%"
              p={6}
              bg="#fff"
              border="1px solid rgba(0, 0, 0, 0.102)"
              borderRadius="md"
              boxShadow="sm"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Link to={`/abcpants/${item.id}`}>
                <Box mb={4}>
                  <img
                    style={{ width: '100%', objectFit: 'cover' }}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box fontWeight={600}>{item.title}</Box>
                  <Box fontWeight="bold">{item.price}$</Box>
                </Flex>
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ABCPants;
