import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import SliderWomen from '../Component/SliderWomen'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <div>
   <Box
  height={{ base: '350px', md: '400px', lg: '500px' }}
  paddingTop={{ base: 10, md: 15, lg: 20 }}
  backgroundImage={
    "https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_3_1_D?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
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
        <Link to="/womenshorts">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Shorts</Box>
        </Link>
        <Link to="/skirts">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Skirts</Box>
        </Link>
        <Link to="/tanktops">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Tank Tops</Box>
        </Link>
        <Link to="/dresses">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Dresses</Box>
        </Link>
        <Link to="/leggings">
          <Box fontSize={{ base: 'sm', md: 'md' }}>Leggings</Box>
        </Link>
      </Flex>
    </Flex>
  </Box>

  {/* Button Section */}
  <Flex
    justifyContent="end"
    position="absolute"
    bottom="10%"
    right="5%"
  >
    <Link to="/women/allwomen">
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



      <Flex padding={5} justifyContent="space-between" alignItems="center">
        <Box marginLeft={12} fontSize={{ base: 30, md: 40 }} fontWeight={500}>
          Set the scene.
        </Box>
        <Box fontSize={{ base: 'sm', md: 'md' }}>
          Of the moment, in multiple lengths—these skirts pave the way for play.
        </Box>
      </Flex>

      <Flex gap={7} padding={5} flexDirection={{ base: 'column', md: 'row' }}>
        <Box textAlign="center">
          <img 
            src="https://images.lululemon.com/is/image/lululemon/LW1EA5S_064820_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Skirt" 
            style={{ width: '100%', maxWidth: '620px', height: 'auto' }} 
          />
          <Text p={1} fontSize={30} fontWeight={500}>Move like a main character.</Text>
          <Text p={2}>Whether you’re sticking to the plan or going off script, these skirts can keep up.</Text>
          <Link to='/women/allwomen'> 
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SKIRTS
            </Button>
          </Link>
        </Box>

        <Box textAlign="center">
          <img 
            src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_2_Lg_MediaAction_D_Casual?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Casual Skirt" 
            style={{ width: '100%', maxWidth: '620px', height: 'auto' }} 
          />
          <Text p={1} fontSize={30} fontWeight={500}>A story with stretch.</Text>
          <Text p={2}>These skirts are the through-line to a flexible summer wardrobe</Text>
          <Link to='/women/allwomen'> 
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP CASUAL
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box>
        <SliderWomen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP WHAT'S NEW
          </Button>
        </Link>
      </Box>

      <Flex backgroundColor="#e5e6e7" p={5} marginTop={10} justifyContent="space-between" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Text paddingLeft={10} fontSize={{ base: 20, md: 30 }} fontWeight={500}>Looking for a gift?</Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>Find the perfect gift with our quiz.</Text>
        <Box paddingRight={10} mt={{ base: 5, md: 0 }}>
          <Link to='/women/allwomen'>
            <Button size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SKIRTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Flex justifyContent="space-between" p={10} flexDirection={{ base: 'column', md: 'row' }}>
        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/NA_May24_Wk2_W_SU24Shorts_1_3_Med_MediaAction_D_WLP_BlueAlign?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Shorts" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>Shorts on. Limits off.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHORTS
            </Button>
          </Link>
        </Box>

        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Shirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Shirts" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>Close, for comfort.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHIRTS
            </Button>
          </Link>
        </Box>

        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Pants_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Pants" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>Comfort’s got legs.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP PANTS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box>
        <SliderWomen />
      </Box>

      <Box textAlign="center" marginTop={12}>
        <Link>
          <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
            SHOP BESTSELLERS
          </Button>
        </Link>
      </Box>

      <Flex justifyContent="space-between" p={10} flexDirection={{ base: 'column', md: 'row' }}>
        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_HoodiesSweatshirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Hoodies & Sweatshirts" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>Cozy at the ready.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP HOODIES & SWEATSHIRTS
            </Button>
          </Link>
        </Box>

        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Shoes" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>More possibilities, every step.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP SHOES
            </Button>
          </Link>
        </Box>

        <Box textAlign="center">
          <img 
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
            src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Bags_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1,fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Bags" 
          />
          <Text p={2} fontSize={30} fontWeight={500}>Options, in the bag.</Text>
          <Link to='/women/allwomen'>
            <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
              SHOP BAGS
            </Button>
          </Link>
        </Box>
      </Flex>

      <Box display="flex" justifyContent="center" alignItems="center" margin={0}>
        <Box 
          width={{ base: 'full', md: 1333 }} 
          height={350} 
          backgroundColor="black" 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
        >
          <Box 
            width={{ base: 'full', md: 650 }} 
            height={250} 
            backgroundColor="white" 
            display="flex" 
            flexDirection="column" 
            gap={5} 
            justifyContent="center" 
            alignItems="center"
          >
            <Text fontSize={30} fontWeight={500}>
              Score a new favourite fit for your goals.
            </Text>
            <Link to='/women/allwomen'>
              <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">
                SHOP WE MADE TOO MUCH
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Women
