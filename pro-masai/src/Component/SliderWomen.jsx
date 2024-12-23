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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Box position="relative">
      {/* Slider Component */}
      <Slider {...settings} ref={sliderRef}>
        {data.map((item) => (
          <div key={item.id}>
            <Box w={350} p={6}>
              <Link to={`/women/${item.id}`}>
                <Box>
                  <img
                    style={{ width: '300px', alignItems: 'center' }}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>
                <Flex justifyContent="space-between">
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
        >
          <AiOutlineRight />
        </Button>
      </Box>
    </Box>
  );
};

export default SliderWomen;
