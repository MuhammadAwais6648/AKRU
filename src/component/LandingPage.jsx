import React from "react";
import "./landingpage.css";
import { Center } from "@chakra-ui/react";
import img1 from "./Assets/City.jpg";
import img2 from "./Assets/Group 36.png";
import img3 from "./Assets/Group 38.png";
import img4 from "./Assets/Group 3830.jpg";
import img5 from "./Assets/Group 39.jpg";
import img6 from "./Assets/Group 41.jpg";
import img7 from "./Assets/Group 53.png";
import img8 from "./Assets/Rectangle 5720.jpg";
import img9 from "./Assets/Rectangle 5722.jpg";
import img10 from "./Assets/Rectangle 5779.png";
import img11 from "./Assets/Rectangle 5781.png";
import img12 from "./Assets/Rectangle.jpg";
import img13 from "./Assets/Rectangle 67.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Flex,
  Icon,
  InputLeftElement,
  InputGroup,
  Avatar,
  Img,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  Input,
  ChevronDownIcon,
  Stack,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import HomeCarousal from "./HomeCarousal";

const Links = ["Home", "AKRU Advantage", "Lightings", "About"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorModeValue = useColorModeValue("gray.100", "gray.900");
  const iconStyle = {
    width: "50px",
    height: "50px",
    flexShrink: 0,
    margin: "0 8px", // Adjust the padding as needed
  };

  return (
    <>
      <Box pr={5} bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box pl={5}>
              <Image src={img6} alt="Logo" />
            </Box>
            <HStack
              as={"nav"}
              ml={12}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <div>
            <Button bg="gray.200" spacing={8} color="black" mr={2}>
              Asset Owners
            </Button>
            <Button bg="gray.200" spacing={8} color="black" mr={2}>
              Wealth Managers
            </Button>
            <Menu>
              <MenuButton
                spacing={8}
                as={Button}
                // rightIcon={<ChevronDownIcon />}
                bg="gray.200"
                color="black"
                mr={2}
              >
                Login
              </MenuButton>
              <MenuList>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </MenuList>
            </Menu>
            <Button bg="#052460" color="white" spacing={8}>
              Get Started
            </Button>
          </div>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box pt={5} mt={40} p={4} position="relative">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={4}>
              <Text fontSize="50px">
                Commercial Real Estate Investing that is:
              </Text>
              <Text pt="10" fontSize="2xl" color="#052460" fontWeight="bold">
                Safer. Simpler. More Liquid.
              </Text>
              <Text pt="10" color="#052460">
                Experience premium U.S. commercial real estate starting at just
                $100.{" "}
                <Box>
                  {" "}
                  AKRU brings high-end investment opportunities within reach.{" "}
                </Box>
                <Box>
                  {" "}
                  Be at the vanguard of this launch by joining our waitlist,
                </Box>
                <Box>
                  {" "}
                  and gain early access to top-tier American commercial real
                  estate assets.
                </Box>
              </Text>
              <Button bg="#052460" color="white" spacing={8}>
                Get Started
              </Button>
            </GridItem>
            <GridItem pl={100} colSpan={8}>
              <Image
                src={img8}
                alt="Your Image"
                borderRadius="30px 0px 0px 30px"
                w="100%"
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box p={0} position="relative">
        <Container>
          <Grid templateColumns="1fr 2px 1fr" gap={0}>
            <Box
            
              color="#333"
              fontFamily="Pragati Narrow"
              fontSize="40px"
              fontStyle="normal"
              fontWeight="400"
              pt={20}
              as="h1"
            >
              Institutional Investors? We have you covered
            </Box>
            <Box width="2px" height="100%" background="blue" />
            <Box
              color="#333" 
              fontFamily="Pragati Narrow"
              fontStyle="normal"
              fontWeight="400"
            >
              <Text pl={6} fontSize="40px" >
                AKRU Private Access for Wealth Managers
              </Text>
              <Text pl={6} fontSize="20px">
                Keeping in mind the needs of RIAs and institutional investors,
                we have created a portal specifically tailored to their
                requirements. Explore the benefits that AKRU Private Access
                offers.
              </Text>
              <Button
                p={6}
                bg="#052460"
                color="black"
                mt={4}
                borderRadius="10px"
                background="rgba(5, 36, 96, 0.10)"
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box pt={10}>
        <Image src={img1}></Image>
        <Img alt="complex" src={img12} />
      </Box>

      <Container pt={10} maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem pl={40} pt={40} colSpan={5}>
            <Text>Feartured</Text>
            <Text pt={2}>LIsting</Text>
            <Image pt={10} src={img4}></Image>
          </GridItem>
          <GridItem colSpan={7}>
            <Image src={img2}></Image>
          </GridItem>
        </Grid>
      </Container>
      <Box p={5} pt={20} pl={50}>
        <HomeCarousal />
      </Box>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={2}></GridItem>
          <GridItem colSpan={8} p={20}>
            <Image src={img3} alt="Your Image" />
          </GridItem>
          <GridItem colSpan={2}></GridItem>
        </Grid>
      </Container>

      <Container maxW="container.xl">
        <Grid
          className="grid-container"
          templateColumns="repeat(12, 1fr)"
          gap={6}
        >
          <GridItem colSpan={12}>
            <div textAlign={Center} className="image-overlay">
              We want to provide our users with the best experience possible,
              but it is important for you to understand several important
              things. You should review our legal disclaimers here, as well as
              our terms of use here. To sum it up, our mission is to provide
              technology that streamlines real estate investments, all in
              compliance with applicable law. In accessing our site, it is your
              responsibility to understand the risks of all your investments,
              including those issuers who tokenize through AKRU. Because we are
              a technology company and not a licensed financial services
              provider, we cannot and do not provide any investment advice or
              recommendations to you or any other investor. While we are seeking
              to solve many of the problems associated with real estate
              investing, all investments, including tokenized real estate, are
              inherently speculative in nature, are not guaranteed to hold their
              value, and using any new technology like ours should include
              assessment of all the risks involved in new frontiers, including
              regulatory uncertainty
            </div>
          </GridItem>
        </Grid>
      </Container>
      <Box bg="white" color="black" py={10}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={5}>
              {/* Place your logo here */}
              <img src={img6} alt="Logo" />
            </GridItem>
            <GridItem colSpan={7} borderRadius={10} bg="blue" p={4}>
              <Flex justify="space-between">
                <Box>
                  <Text color="white" fontSize="2xl" mb={4}>
                    Book a meeting with us.
                  </Text>
                </Box>
                <Box flex="1" pl={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon name="search" color="gray.300" />}
                    />
                    <Input
                      type="text"
                      placeholder="Set Up A Call"
                      bg="white"
                      textAlign="center"
                      borderRadius="10px"
                      _placeholder={{
                        color: "black",
                      }}
                    />
                  </InputGroup>
                </Box>
              </Flex>
            </GridItem>

            <GridItem colSpan={3}>
              <Text fontSize="lg" mb={4}>
                Company
              </Text>
              <Box>
                <Link color="black" width={300} href="#">
                  Home
                </Link>
              </Box>
              <Box>
                <Link color="black" width={100} href="#">
                  Why Invest?
                </Link>
              </Box>
              <Box>
                <Link color="black" colSpan={3} href="#">
                  Benefits
                </Link>
              </Box>
              <Box>
                <Link color="black" colSpan={3} href="#">
                  Technology
                </Link>
              </Box>
              <Box>
                <Link color="black" colSpan={3} href="#">
                  Listings
                </Link>
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Box>
                <Text fontSize="lg" mb={4}>
                  Useful Links
                </Text>
              </Box>
              <Box>
                <Link color="black" href="#">
                  Home
                </Link>
              </Box>
              <Box>
                <Link color="black" href="#">
                  How It Works
                </Link>
              </Box>
              <Box>
                <Link color="black" href="#">
                  Help Center
                </Link>
              </Box>
              <Box>
                <Link color="black" href="#">
                  Why Invest?
                </Link>
              </Box>
              <Box>
                <Link color="black" href="#">
                  Resources
                </Link>
              </Box>
              <Box>
                <Link color="black" href="#">
                  Support
                </Link>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize="lg" mb={4}>
                Contact
              </Text>

              <Text>+1 888 966 AKRU (2578)</Text>
              <Box>
                <Link color="black" href="#">
                  Help Center
                </Link>
                <Box></Box>
                <Link color="black" href="#">
                  Sport
                </Link>
                <Box></Box>
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
              <Box>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  color="#1DA1F2"
                  style={iconStyle}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  color="#1877F2"
                  style={iconStyle}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="#E4405F"
                  style={iconStyle}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  color="#0077B5"
                  style={iconStyle}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  color="#FF0000"
                  style={iconStyle}
                />
              </Box>

              <Box p={3} display="flex" alignItems="center">
                <FontAwesomeIcon icon={faPhone} size="lg" color="blue" />
                <Text ml={2}>+1 888 966 AKRU (2578)</Text>
              </Box>
            </GridItem>
          </Grid>
          <Box mt={10}>
            <Text fontSize="lg">
              AKRU’s mission is to democratize commercial real estate investing.
              Because we believe real estate investing should be simple and
              accessible, we created a platform that lowers barriers to entry
              and offers a seamless experience for both investors and owners.
            </Text>
          </Box>
        </Container>
        <Box mt={10} bg="white" color="black" py={2} textAlign="center">
          <Text>&copy; 2023 AKRU. All rights reserved.</Text>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
