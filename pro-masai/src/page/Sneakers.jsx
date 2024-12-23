import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ShoesProduct from '../Component/ShoesProduct'
import { Link } from 'react-router-dom'

const Sneakers = () => {
  return (
    <div>
      <Flex>

<Box h="auto" w={300} >
  <Box fontSize={25} fontWeight={900} p={5} >Shoes</Box>
  <hr />
  <Box p={10}>
  <Text fontSize={20} fontWeight={600} m={2}>Catagory</Text>
  <hr />
  <Link to='/slides'><Text m={2}>Slides</Text></Link>
  <hr />
  <Link to='/sneakers'><Text m={2}>Sneakers</Text></Link>
  <hr />
  <Link to='/sneakers'><Text m={2}>Cross Training Shoes</Text></Link>
  <hr />
  <Link to='/sneakers'><Text m={2}>Trail Training Shoes</Text></Link>
  <hr />
  </Box>
  
</Box>
<Box>
  <Box >
    <img style={{width:"1030px", height:"300px"}} src="https://th.bing.com/th/id/OIP.24cSqpCRAwjBxKAs5lF4mgHaE8?w=342&h=186&c=7&r=0&o=5&pid=1.7" alt="" />
  </Box>
  <ShoesProduct/>
</Box>
</Flex>
    </div>
  )
}

export default Sneakers