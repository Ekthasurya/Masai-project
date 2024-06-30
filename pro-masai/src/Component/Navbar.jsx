import React from 'react'
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react'
import { CiLocationOn } from 'react-icons/ci'
import { HiMiniGiftTop } from 'react-icons/hi2'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { CiGlobe } from 'react-icons/ci'
import { IoMdContact } from 'react-icons/io'
import { BsHeart } from 'react-icons/bs'
import { IoBagHandleOutline } from 'react-icons/io5'
import { color } from 'framer-motion'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ height: '110px' }}>
      <Box paddingRight={4} backgroundColor="#fafafa">
        <Flex gap={5} justifyContent="end" p={1} alignItems="center">
          <Flex gap={2} alignItems="center">
            {' '}
            <CiLocationOn />
            <Box>Store Locator</Box>{' '}
          </Flex>
          <Flex gap={2} alignItems="center">
            <HiMiniGiftTop />
            <Box>Gift Cards</Box>
          </Flex>
          <Flex gap={2} alignItems="center">
            <IoMdHelpCircleOutline />
            <Box>Get Help</Box>
          </Flex>
          <Flex gap={2} alignItems="center">
            <CiGlobe />
            <Box>USA</Box>
          </Flex>
        </Flex>
      </Box>
      <Box p={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap={20} alignItems="center">
            <Flex alignItems="center">
              <Link to='/'>
              <img
                width={40}
                src="https://th.bing.com/th?id=OIP.xwofHz9LnQf7aouzU4cefAHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt=""
              />
              </Link>
             
            </Flex>
            <Flex gap={12} alignItems="center" fontWeight={650}>
              <Link to='/women'><Box>WOMEN</Box></Link>
              <Link to='/men'><Box>MEN</Box></Link>
              <Link to='/accessories'><Box>ACCESSORIES</Box></Link>
             <Link to='/shoes'><Box>SHOES</Box></Link>
              <Link to='/likenew'><Box>LIKE NEW</Box></Link>  
            </Flex>
          </Flex>

          <Flex gap={10} alignItems="center">
            <InputGroup>
              <InputLeftElement pointerEvents="none" fontSize="1.2em">
                <IoSearch />
              </InputLeftElement>
              <Input placeholder="Search" size="lg" borderColor="black" />
            </InputGroup>
            <Flex gap={1} alignItems="center">
              <Link to='/signin'><IoMdContact size={30} /> <Flex fontSize={15}>SignIn</Flex></Link>
            </Flex>
            <Box>
              <BsHeart size={25} />
            </Box>
            <Box>
              <IoBagHandleOutline size={25} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default Navbar
