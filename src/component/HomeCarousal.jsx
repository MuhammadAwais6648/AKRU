import React from "react";
import { Box, Link, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./Assets/Group 53.png";
import img2 from "./Assets/Rectangle 5779.png";
import img3 from "./Assets/Rectangle 5781.png";

const HomeCarousel = () => {
  const dummyImages = [img1, img1, img1];

  return (
    <Box>
      <Box className="container">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {dummyImages.map((src, index) => (
            <Box p={10} key={index}>
              <Box className="work1 ml-2 mr-2">
                <Box className="image-box">
                  <Box className="name-desc hover-1 image-box rounded">
                    <Box className="img align-items-center justify-content-center rounded">
                      <Image src={src} alt={`Image ${index}`} />
                      <Link
                        href="#"
                        className="icon d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-search"></span>
                      </Link>
                    </Box>
                    {/* <Box className="hover-1-content p-2">
                      <Box className="title float-left">Title</Box>
                      <br />
                      <Box className="sub-txt-desc float-left">Description</Box>
                      <br />
                      <p className="hover-1-description float-left mb-0">
                        <strong>
                          <Link to="/link">Learn More</Link>{" "}
                          <i className="fa fa-angle-double-right"></i>{" "}
                        </strong>
                      </p>
                    </Box> */}
                  </Box>
                </Box>
                <br />
                <p className="hover-1-description float-left mb-0">
                  <strong>
                    Book Now <i className="fa fa-angle-double-right"></i>
                  </strong>
                </p>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default HomeCarousel;
