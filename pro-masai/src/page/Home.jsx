import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import SliderWomen from '../Component/SliderWomen'
import SliderMen from '../Component/SliderMen'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box
  height={{ base: '350px', md: '400px', lg: '500px' }}
  paddingTop={{ base: 10, md: 15, lg: 20 }}
  backgroundImage={
    "https://c1.wallpaperflare.com/preview/266/464/958/lululemon-adventure-travel-san-antonio.jpg"
  }
  backgroundSize="cover"
  backgroundPosition="center"
  position="relative"
>
  {/* Sidebar Box */}
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
      <Box
        fontWeight={600}
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
      >
        lululemon
      </Box>
      <Flex flexDirection="column" gap={2}>
        <Link to="/women">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Women's What's New</Box>
        </Link>
        <Link to="/men">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Men's What's New</Box>
        </Link>
        <Link to="/women/allwomen">
          <Box fontSize={{ base: 'sm', md: 'md' }}>All Women's</Box>
        </Link>
        <Link to="/men/allmen">
          <Box fontSize={{ base: 'sm', md: 'md' }}>All Men's</Box>
        </Link>
        <Link to="/accessories">
          <Box fontSize={{ base: 'sm', md: 'md' }}>All Accessories</Box>
        </Link>
      </Flex>
    </Flex>
  </Box>

  {/* Button Section */}
  <Flex
    justifyContent="end"
    position="absolute"
    bottom="3%"
    right="5%"
  >
    <Link to="/women">
      <Button
        size={{ base: 'md', lg: 'lg' }}
        backgroundColor="white"
        color="black"
        paddingX={{ base: 6, lg: 8 }}
      >
        Shop What's New
      </Button>
    </Link>
  </Flex>
</Box>

      
      <Flex 
        padding={5} 
        justifyContent="space-between" 
        alignItems="center" 
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box marginLeft={{ base: 0, md: 12 }} fontSize={{ base: 30, md: 40 }} fontWeight={500}>
          Invite the spotlight.
        </Box>
        <Box fontSize={{ base: 20, md: 22 }} textAlign={{ base: 'center', md: 'left' }}>
          Cool, coordinated summer whites make every outing feel like an event.
        </Box>
      </Flex>

      <Flex 
        gap={7} 
        padding={5} 
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box textAlign="center" w={{ base: '100%', md: '45%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_SummerClothes?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={1} fontSize={{ base: 20, md: 30 }} fontWeight={500}>Noticeably soft.</Text>
          <Text p={2} fontSize={{ base: 14, md: 16 }}>
            It’s a standout feeling—cool, comfy fabrics in all white are here.
          </Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SUMMER CLOTHES
            </Button>
          </Link>
        </Box>

        <Box textAlign="center" w={{ base: '100%', md: '45%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_Shorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={1} fontSize={{ base: 20, md: 30 }} fontWeight={500}>Strikingly stretchy.</Text>
          <Text p={2} fontSize={{ base: 14, md: 16 }}>
            The Align Short is a flex in more ways than one.
          </Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHORTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Text textAlign="center" fontSize={{ base: 30, md: 50 }} fontWeight={600}>
        A new spin on summer.
      </Text>

      <Box>
        <SliderWomen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP SUMMER WHITES
          </Button>
        </Link>
      </Box>

      <Flex 
        justifyContent="space-between" 
        p={10} 
        flexDirection={{ base: 'column', md: 'row' }}
        gap={10}
      >
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>A skirt for every scene.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SKIRTS
            </Button>
          </Link>
        </Box>
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensHoodiesSweatshirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>Moving along softly.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP HOODIES & SWEATSHIRTS
            </Button>
          </Link>
        </Box>
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>Comfort’s got legs.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP PANTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box p={5}>
        <img 
          src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_1_Med_MediaAction_D_Mens?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
          alt="" 
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Text fontSize={30} fontWeight={500}>Summer going strong.</Text>
        <Text p={2}>Stick to your plan, not your gear. The License to Train Shirt brings more focus with less cling.</Text>
        <Link to='/men'>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP MEN'S
          </Button>
        </Link>
      </Box>

      <Text textAlign="center" fontSize={{ base: 30, md: 50 }} fontWeight={600}>
        Shift gear into summer.
      </Text>

      <Box>
        <SliderMen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link to='/men/allmen'>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            BEST WORKOUT GEAR
          </Button>
        </Link>
      </Box>

      <Flex 
        justifyContent="space-between" 
        p={10} 
        flexDirection={{ base: 'column', md: 'row' }}
        gap={10}
      >
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="" 
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>Tops that do the most.</Text>
          <Link to='/men/allmen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHIRTS
            </Button>
          </Link>
        </Box>
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/NA_May24_Wk2_M_SU24Shorts_1_3_MediaAction_M_MLP_ZeroedIn?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>Shorts on. Limits off.</Text>
          <Link to='/men/allmen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHORTS
            </Button>
          </Link>
        </Box>
        <Box textAlign="center" w={{ base: '100%', md: '33%' }}>
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="" 
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Text p={2} fontSize={{ base: 18, md: 30 }} fontWeight={500}>Keeping you in motion.</Text>
          <Link to='/men/allmen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP PANTS
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default Home
