import React, { useState } from 'react';
import { Box, Button, Flex, Input, Text, Divider } from '@chakra-ui/react';
import { IoBagHandleSharp } from "react-icons/io5";
import { GiPriceTag } from "react-icons/gi";
import { MdVideoSettings, MdRememberMe, MdOutlineCropFree } from "react-icons/md";
import { BsBox2HeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Simulated sign-in logic
    if (email && password) {
      alert('Sign in successful!');
    } else {
      alert('Please enter valid email and password.');
    }
  };

  return (
    <Box padding={{ base: 4, md: 8 }}>
      {/* Header */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center" marginBottom={4}>
        Wellbeing made easier. We’ve got you.
      </Text>
      <Divider marginBottom={8} />

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" flexWrap="wrap" gap={10}>
        {/* Membership Benefits */}
        <Box flex="1" maxW={{ base: "100%", md: "500px" }} mb={{ base: 8, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" marginBottom={4}>
            Discover lululemon Membership
          </Text>
          <Text textAlign="center" marginBottom={6}>
            One account. Tons of benefits. Endless possibilities.
          </Text>
          <Text fontSize="xl" fontWeight="bold" marginBottom={4}>
            Membership benefits include:
          </Text>
          <Flex direction="column" gap={4}>
            <Flex alignItems="center" gap={3}>
              <IoBagHandleSharp />
              <Text>Early Access to Product Drops</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <GiPriceTag />
              <Text>Exchange or Credit on Sale Items</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <MdVideoSettings />
              <Text>Select Peloton Classes</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <MdRememberMe />
              <Text>Membership Events</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <BsBox2HeartFill />
              <Text>Receipt-Free Returns</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <MdOutlineCropFree />
              <Text>Exclusive Offers</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Sign In Form */}
        <Box flex="1" maxW={{ base: "100%", md: "500px" }} padding={6} border="1px solid #e2e8f0" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" marginBottom={6}>
            Sign in to your member account
          </Text>
          <Box marginBottom={4}>
            <Text marginBottom={2}>Email address</Text>
            <Input
              placeholder="Enter your email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box marginBottom={4}>
            <Text marginBottom={2}>Password</Text>
            <Input
              placeholder="Enter your password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Text color="blue.500" cursor="pointer" textAlign="right" marginBottom={6}>
            Forgot Your Password?
          </Text>
          <Button
            width="100%"
            size="lg"
            backgroundColor="#c8102e"
            color="white"
            _hover={{ backgroundColor: "#a50f21" }}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>
          <Text fontSize="sm" textAlign="center" marginTop={4}>
            By signing in, you agree to the <Text as="span" color="blue.500">Terms of Use</Text> and acknowledge the <Text as="span" color="blue.500">Privacy Policy</Text>.
          </Text>
          <Divider marginY={6} />
          <Text fontSize="lg" textAlign="center">
            Don't have an account? <Link to='/register'><Text as="span" color="blue.500" cursor="pointer">Create one here</Text>.</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignIn;
