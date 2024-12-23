import { Box, Button, Flex, Grid, GridItem, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { skirts } from '../Data/skirts';

const Skirts = () => {
  const [data, setData] = useState(skirts);
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',gap:"10px",marginLeft:"5px" }}>
      {data.map((item) => (
        <div>
          <Box w={350} p={6} bg="#fff" border="1px solid rgba(0, 0, 0, 0.102)" key={item.id}>
            <Link to={`/skirts/${item.id}`}>
              <Box>
                <img
                  style={{ width: '300px', alignItems: 'center' }}
                  src={item.img}
                  alt="wome"
                />
              </Box>
              <Flex justifyContent="space-between">
                <Box fontWeight={600}>{item.title}</Box> <Box>{item.price}$</Box>
              </Flex>
            </Link>
          </Box>
        </div>
      ))}
    </div>
    </>
  )
}

export default Skirts
