import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const LikeNew = () => {
  return (
    <div>
      {/* Header Section */}
      <Text
        marginTop={8}
        fontSize={{ base: '24px', md: '35px' }}
        fontWeight={500}
        textAlign="center"
        px={4} // Add padding for better readability on smaller screens
      >
        lululemon Like New keeps good gear going.
      </Text>
      
      {/* Intro Section */}
      <Box marginTop={8} px={4}>
        <Text textAlign="center" fontSize={{ base: '14px', md: '16px' }}>
          Like New launched across the US in April 2022. Since then, we’ve kept more than 1.7 million pieces of gently used
        </Text>
        <Text textAlign="center" fontSize={{ base: '14px', md: '16px' }}>
          lululemon gear in action. Explore the Like New online resale shop to score unique finds and get the good feeling of
        </Text>
        <Text textAlign="center" fontSize={{ base: '14px', md: '16px' }}>
          contributing to a circular ecosystem.
        </Text>
      </Box>

      {/* Shop Button */}
      <Box textAlign="center" marginTop={12}>
        <Button
          p={2}
          size="lg"
          backgroundColor="white"
          color="black"
          border="1px solid black"
          _hover={{ backgroundColor: 'black', color: 'white' }}
        >
          SHOP LIKE NEW
        </Button>
      </Box>
      
      {/* Availability Text */}
      <Text marginTop={5} textAlign="center" px={4} fontSize={{ base: '14px', md: '16px' }}>
        Like New is available across the US. Stay tuned for Like New in Canada.
      </Text>

      {/* Banner Image */}
      <Box marginTop={10} px={4}>
        <img
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_1_Lg_MediaAction_D?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Lululemon Like New Banner"
        />
      </Box>

      {/* Profit Information Section */}
      <Text
        marginTop={8}
        fontSize={{ base: '24px', md: '35px' }}
        fontWeight={500}
        textAlign="center"
        px={4}
      >
        Every score does more.
      </Text>
      <Box marginTop={8} px={4}>
        <Text textAlign="center" fontSize={{ base: '14px', md: '16px' }}>
          Since 2022, 100% of Like New profits have gone to support the Apparel Impact Institute’s Fashion Climate Fund,
        </Text>
        <Text textAlign="center" fontSize={{ base: '14px', md: '16px' }}>
          which aims to implement and advance projects that reduce industry carbon emissions by 2030.*
        </Text>
      </Box>

      {/* Feature Section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={7}
        padding={5}
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center" maxW="500px">
          <img
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_2_Med_MediaAction_D_AnotherRound?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Another Round"
          />
          <Text p={2} fontSize={{ base: '20px', md: '30px' }} fontWeight={500}>
            Back for another round.
          </Text>
          <Text p={2} fontSize={{ base: '14px', md: '16px' }}>
            Extending the life of lululemon gear means you score great finds from seasons past.
          </Text>
          <Flex justify="center" gap={4}>
            <Button p={2} size="lg" backgroundColor="black" color="white" border="1px solid black">
              SHOP WOMEN'S
            </Button>
            <Button p={2} size="lg" backgroundColor="white" color="black" border="1px solid black">
              SHOP MEN'S
            </Button>
          </Flex>
        </Box>

        <Box textAlign="center" maxW="500px">
          <img
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_2_Med_MediaAction_D_TradeIn?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Trade In"
          />
          <Text p={2} fontSize={{ base: '20px', md: '30px' }} fontWeight={500}>
            Trade in. Get rewarded.
          </Text>
          <Text px={2} fontSize={{ base: '14px', md: '16px' }}>
            lululemon gear is made to last—and may outlast your needs. When it does, there’s a
          </Text>
          <Text px={2} fontSize={{ base: '14px', md: '16px' }}>
            lululemon gift card waiting for you.
          </Text>
          <Button p={2} size="lg" backgroundColor="white" color="black" border="1px solid black">
            SHOP SHORTS
          </Button>
        </Box>
      </Flex>

      {/* Final Banner */}
      <Box marginTop={10} px={4}>
        <img
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_1_Med_MediaAction_D?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Final Banner"
        />
      </Box>

      {/* Closing Text */}
      <Text marginTop={10} textAlign="center" px={4} fontSize={{ base: '14px', md: '16px' }}>
        When you're done with your lululemon gear, bring it into a store. Gently used items are carefully cleaned and put on
      </Text>
      <Text textAlign="center" px={4} fontSize={{ base: '14px', md: '16px' }}>
        the Like New online resale shop for others to discover.
      </Text>
      <Text marginTop={10} textAlign="center" px={4} fontSize={{ base: '12px', md: '14px' }}>
        *100% of program profits or 2% of revenue, whichever is higher.
      </Text>
    </div>
  );
};

export default LikeNew;
