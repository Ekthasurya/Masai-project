import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { CiLocationOn, CiGlobe } from "react-icons/ci";
import { HiMiniGiftTop } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box paddingBottom={4}>
      {/* Top Bar with icons */}
      <Box paddingRight={4} backgroundColor="#fafafa">
        <Flex gap={5} justifyContent="end" p={1} alignItems="center">
          <Flex gap={2} alignItems="center">
            <CiLocationOn />
            <Box>Store Locator</Box>
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

     

      {/* Main Navbar with Hamburger */}
      <Box p={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap={2}>
        
          {/* Logo */}
          <Link to="/">
            <img
              width={40}
              src="https://th.bing.com/th?id=OIP.xwofHz9LnQf7aouzU4cefAHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Logo"
            />
          </Link>
          </Flex>

          {/* Desktop Links */}
          <Flex
            gap={12}
            alignItems="center"
            fontWeight={650}
            display={{ base: "none", md: "flex" }}
          >
            <Link to="/women">
              <Box
              _hover={{
                color:'#a74543'
              }}
              >WOMEN</Box>
            </Link>
            <Link to="/men">
              <Box _hover={{
                color:'#a74543'
              }} >MEN</Box>
            </Link>
            <Link to="/accessories">
              <Box _hover={{
                color:'#a74543'
              }}>ACCESSORIES</Box>
            </Link>
            <Link to="/shoes">
              <Box _hover={{
                color:'#a74543'
              }}>SHOES</Box>
            </Link>
            <Link to="/likenew">
              <Box _hover={{
                color:'#a74543'
              }}>LIKE NEW</Box>
            </Link>
          </Flex>

          {/* Mobile Hamburger Menu */}
          

          {/* Icons always visible */}
          <Flex gap={5} alignItems="center">
            {/* Search Bar */}
            <InputGroup display={{ base: "none", md: "block" }}>
              <InputLeftElement pointerEvents="none" fontSize="1.2em">
                <IoSearch />
              </InputLeftElement>
              <Input placeholder="Search" size="lg" borderColor="black" />
            </InputGroup>

            {/* Sign In and Cart */}
            <Flex gap={1} alignItems="center">
              <Link to="/signin">
                <IoMdContact size={30} /> 
              </Link>
            </Flex>
            <Box>
              <BsHeart size={25} />
            </Box>
            <Link to="/cart">
              <Box>
                <IoBagHandleOutline size={25} />
              </Box>
            </Link>

            <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
          />

          </Flex>
        </Flex>
      </Box>

      {/* Mobile Drawer for Navigation Links */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#a74543" color="white">
        <DrawerCloseButton _focus={{ boxShadow: "none" }} color="white" />

        <DrawerBody p={6}>
          <Stack spacing={6} align="flex-start">
            <Box
              as={Link}
              to="/women"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "gray.300",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
            >
              WOMEN
            </Box>
            <Box
              as={Link}
              to="/men"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "gray.300",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
            >
              MEN
            </Box>
            <Box
              as={Link}
              to="/accessories"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "gray.300",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
            >
              ACCESSORIES
            </Box>
            <Box
              as={Link}
              to="/shoes"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "gray.300",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
            >
              SHOES
            </Box>
            <Box
              as={Link}
              to="/likenew"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                textDecoration: "none",
                color: "gray.300",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
            >
              LIKE NEW
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </Box>
  );
};

export default Navbar;
