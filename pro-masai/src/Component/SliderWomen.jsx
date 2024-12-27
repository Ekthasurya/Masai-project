import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { women } from '../Data/women';

const SliderWomen = () => {
  const data = women;
  const sliderRef = useRef(null); // Reference to the Slider component

  // Responsive settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (e.g., mobile landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens (e.g., mobile portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box position="relative">
      {/* Slider Component */}
      <Slider {...settings} ref={sliderRef}>
        {data.map((item) => (
          <div key={item.id}>
            <Box
              w="full"
              p={4}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Link to={`/women/${item.id}`}>
                <Box mb={2}>
                  <img
                    style={{
                      width: '100%',
                      maxWidth: '250px',
                      height: 'auto',
                      margin: '0 auto',
                    }}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  w="full"
                  maxWidth="250px"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <Box fontWeight={500}>{item.title}</Box>
                  <Box>{item.price}</Box>
                </Flex>
              </Link>
            </Box>
          </div>
        ))}
      </Slider>

      {/* Custom Previous Button */}
      <Box position="absolute" top="50%" left="6" transform="translateY(-50%)">
        <Button
          onClick={() => sliderRef.current.slickPrev()}
          backgroundColor="gray.500"
          color="white"
          p={3}
          borderRadius="full"
        >
          <AiOutlineLeft />
        </Button>
      </Box>

      {/* Custom Next Button */}
      <Box position="absolute" top="50%" right="4" transform="translateY(-50%)">
        <Button
          onClick={() => sliderRef.current.slickNext()}
          backgroundColor="gray.500"
          color="white"
          p={3}
          borderRadius="full"
        >
          <AiOutlineRight />
        </Button>
      </Box>
    </Box>
  );
};

export default SliderWomen;
