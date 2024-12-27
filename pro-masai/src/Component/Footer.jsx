import { Box, Flex, Text } from '@chakra-ui/react';
import { FaTwitter } from "react-icons/fa";
import { BiLogoPinterestAlt, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io5";
import { GiChoice } from "react-icons/gi";

const Footer = () => {
  return (
    <div style={{ padding: "5px" ,fontSize:'15px'}}>
      <Flex flexDirection="column" gap={15} p={5}>
        <Box>
          {/* Upper Section */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            justifyContent="start"
            gap={{ base: 5, sm: 20 }}
            wrap="wrap"
          >
            {/* MY ACCOUNT */}
            <Flex flexDirection="column" gap={5}>
              <Box fontWeight={500}>MY ACCOUNT</Box>
              <Flex flexDirection="column" gap={4}>
                <p>Membership Program</p>
                <p>Sign In</p>
                <p>Register</p>
                <p>Order Status</p>
                <p>Returns</p>
              </Flex>
            </Flex>

            {/* HELP */}
            <Flex flexDirection="column" gap={5}>
              <Box fontWeight={500}>HELP</Box>
              <Flex flexDirection="column" gap={4}>
                <p>FAQ</p>
                <p>Accessibility Statement</p>
                <p>Services</p>
                <p>Shipping Policy</p>
                <p>Returns</p>
                <p>Redeem Gifts Cards</p>
                <p>Sizing</p>
                <p>Our Products</p>
              </Flex>
            </Flex>

            {/* ABOUT US */}
            <Flex flexDirection="column" gap={5}>
              <Box fontWeight={500}>ABOUT US</Box>
              <Flex flexDirection="column" gap={4}>
                <p>Our Business</p>
                <p>Media</p>
                <p>Investors</p>
                <p>Strategic Sales</p>
                <p>Affiliates and Creators</p>
                <p>Sweat Collective</p>
                <p>FURTHER</p>
              </Flex>
            </Flex>

            {/* CONTACT US */}
            <Flex flexDirection="column" gap={5}>
              <Box fontWeight={500}>CONTACT US</Box>
              <Flex flexDirection="column" gap={4}>
                <p>Live Chat</p>
                <p>Email Sign Up</p>
                <p>Contact Us</p>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Box>
          {/* Lower Section */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            justifyContent="start"
            gap={{ base: 5, sm: 20 }}
            wrap="wrap"
          >
            {/* Careers, Community, and Others */}
            <Flex flexDirection="column" gap={4} fontWeight={500}>
              <p>CAREERS</p>
              <p>COMMUNITY</p>
              <p>LIKE NEW</p>
              <p>SUSTAINABILITY</p>
              <p>SOCIAL IMPACT</p>
              <p>DIVERSITY AND INCLUSION</p>
              <p>LULULEMON APPS</p>
              <p>SITEMAP</p>
            </Flex>

            {/* Gift Cards and Privacy Section */}
            <Flex flexDirection="column" gap={4}>
              <Box fontWeight={500}>GIFT CARDS</Box>
              <Box fontWeight={500}>STORE LOCATOR</Box>
              <p>Privacy Policy</p>
              <Flex alignItems="center">
                <p>Your Privacy Choices</p>
                <GiChoice size={25} />
              </Flex>
              <p>California Privacy Rights</p>
              <p>California Transparency Act</p>
            </Flex>

            {/* Social Media Icons */}
            <Flex gap={5} alignItems="center" mt={{ base: 5, sm: 0 }}>
              <FaTwitter size={25} />
              <BiLogoPinterestAlt size={25} />
              <IoLogoYoutube size={25} />
              <BiLogoFacebook size={25} />
              <BiLogoInstagram size={25} />
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* Footer Bottom */}
      <hr />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={5}
        flexDirection={{ base: "column", sm: "row" }}
        textAlign={{ base: "center", sm: "left" }}
      >
        <Text>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</Text>
        <Text>Privacy Policy | Terms of Use</Text>
      </Flex>
    </div>
  );
};

export default Footer;
