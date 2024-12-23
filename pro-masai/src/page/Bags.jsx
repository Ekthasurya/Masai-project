import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import AccerrProduct from '../Component/AccerrProduct'
import BagsProduct from './BagsProduct'
import { Link } from 'react-router-dom'
const Bags = () => {
  return (
    <div>
        <Flex>

          <Box h="auto" w={300} >
            <Box fontSize={25} fontWeight={900} p={5} >Accessories</Box>
            <hr />
            <Box p={10}>
            <Text fontSize={20} m={2} fontWeight={600}>Catagory</Text>
            <hr />
           <Link to='/bags'><Text m={2}>Bags</Text></Link>
            <hr />
            <Link to='/equipment'><Text m={2}>Equipment</Text></Link>
            <hr />
            <Link to='/hats'><Text m={2}>Hats</Text></Link>
            <hr />
            <Link to='/hair'><Text m={2}>Hair Accessories</Text></Link>
            <hr />
            </Box>
            
      </Box>
          <Box>
            <Box >
              <img style={{width:"1030px", height:"300px"}} src="data:image/jpeg;base64,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" alt="" />
            </Box>
            <BagsProduct/>
          </Box>
        </Flex>
    </div>
  )
}

export default Bags