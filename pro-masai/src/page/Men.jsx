import React from 'react';
import MenProduct from '../Component/MenProduct';
import { Box, Button, Flex, Grid, Text, Link as ChakraLink } from '@chakra-ui/react';
import SliderMen from '../Component/SliderMen';
import { Link } from 'react-router-dom';

const Men = () => {
  return (
    <div>
      <Box
        height={{ base: '350px', md: '400px', lg: '500px' }}
        paddingTop={{ base: 10, md: 15, lg: 20 }}
        backgroundImage={
          "https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_3_1_D?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="50%"
          left="5%"
          transform="translateY(-50%)"
          width={{ base: '200px', md: '230px' }}
          backgroundColor="white"
          p={{ base: 4, md: 8 }}
          borderRadius="md"
          shadow="sm"
        >
          <Flex flexDirection="column" gap={4}>
            <Box fontWeight={500}>lululemon men's</Box>
            <Flex flexDirection="column" gap={2}>
              <Link to='/menshorts'><Box>Shorts</Box></Link>
              <Link to='/abcpants'><Box>ABC Pants</Box></Link>
              <Link to='/tshirts'><Box>T-Shirts</Box></Link>
              <Link to='/joggars'><Box>Joggers</Box></Link>
              <Link to='/trousers'><Box>Trousers</Box></Link>
            </Flex>
          </Flex>
        </Box>
        <Flex justifyContent="end"
    position="absolute"
    bottom="10%"
    right="5%">
          <Link to='/men/allmen'>
            <Button size={{ base: 'md', lg: 'lg' }}
        backgroundColor="white"
        color="black"
        paddingX={{ base: 6, lg: 8 }}>
              Shop What's New
            </Button>
          </Link>
        </Flex>
      </Box>

      <Flex padding={5} justifyContent="space-between" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Box marginLeft={12} fontSize={{ base: '24px', md: '30px', lg: '40px' }} fontWeight={500}>
          Full steam, zero stick.
        </Box>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          License to Train tops won’t cling when your<br />workout heats up—leaving you feeling unstoppable.
        </Box>
      </Flex>

      <Flex gap={7} padding={5} flexDirection={{ base: 'column', md: 'row' }}>
        <Box>
          <img
            style={{ width: '100%', maxWidth: '620px' }}
            src="https://images.lululemon.com/is/image/lululemon/LM7B99S_047780_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt=""
          />
          <Text p={1} fontSize={{ base: '20px', md: '25px', lg: '30px' }} fontWeight={500}>More power to you.</Text>
          <Text p={2}>Stand up to the toughest workout in the abrasion-resistant License to Train Short.</Text>
          <Link to='/men/allmen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHORTS
            </Button>
          </Link>
        </Box>

        <Box>
          <img
            style={{ width: '100%', maxWidth: '620px' }}
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_2_Lg_MediaAction_D_TShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt=""
          />
          <Text p={1} fontSize={{ base: '20px', md: '25px', lg: '30px' }} fontWeight={500}>Push past plateaus.</Text>
          <Text p={2}>Less cling in the License to Train Shirt gives you one more reason to up the intensity.</Text>
          <Link to='/men/allmen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP T-SHIRTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box>
        <SliderMen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link to='/men/allmen'>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP WHAT'S NEW
          </Button>
        </Link>
      </Box>

      <Flex
        backgroundColor="#e5e6e7"
        p={5}
        marginTop={10}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
      >
        <Text paddingLeft={10} fontSize={{ base: '20px', md: '25px', lg: '30px' }} fontWeight={500}>
          Looking for a gift?
        </Text>
        <Text textAlign={{ base: 'center', md: 'left' }}>Find the perfect gift with our quiz.</Text>
        <Box paddingRight={10}>
          <Link to='/men/allmen'>
            <Button size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SKIRTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Flex justifyContent="space-between" gap={5} p={10} flexWrap="wrap">
        {/* Repeatable Product Boxes */}
      </Flex>

      <Box>
        <SliderMen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP BESTSELLERS
          </Button>
        </Link>
      </Box>

      <Flex
  justifyContent="space-between"
  p={{ base: 5, md: 10 }}
  flexDirection={{ base: "column", md: "row" }}
  gap={{ base: 5, md: 10 }}
>
  <Box textAlign="center">
    <img
      style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_HoodiesSweatshirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      alt=""
    />
    <Text p={2} fontSize={{ base: 20, md: 30 }} fontWeight={500}>
      You’ll miss it when
    </Text>
    <Link to="/men/allmen">
      <Button
        p={2}
        size="lg"
        backgroundColor="white"
        color="black"
        border="1px solid black"
      >
        SHOP HOODIES & SWEATSHIRTS
      </Button>
    </Link>
  </Box>
  <Box textAlign="center">
    <img
      style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk1_M_Golf_1_3_Med_MediaAction_D_GolfPolo?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      alt=""
    />
    <Text p={2} fontSize={{ base: 20, md: 30 }} fontWeight={500}>
      Every collar a call
    </Text>
    <Link to="/men/allmen">
      <Button
        p={2}
        size="lg"
        backgroundColor="white"
        color="black"
        border="1px solid black"
      >
        SHOP POLOS
      </Button>
    </Link>
  </Box>
  <Box textAlign="center">
    <img
      style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      alt=""
    />
    <Text p={2} fontSize={{ base: 20, md: 30 }} fontWeight={500}>
      Step into limitless
    </Text>
    <Link to="/men/allmen">
      <Button
        p={2}
        size="lg"
        backgroundColor="white"
        color="black"
        border="1px solid black"
      >
        SHOP SHOES
      </Button>
    </Link>
  </Box>
</Flex>


      <Box display="flex" justifyContent="center" alignItems="center" margin={0}>
        <Box
          width={{ base: '100%', md: '1333px' }}
          height={{ base: '200px', md: '350px' }}
          backgroundColor="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{ base: '90%', md: '650px' }}
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            gap={5}
            justifyContent="center"
            alignItems="center"
            padding={5}
          >
            <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} fontWeight={500}>
              Score a new favourite fit for your goals.
            </Text>
            <Link to='/men/allmen'>
              <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
                SHOP WE MADE TOO MUCH
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Men;
