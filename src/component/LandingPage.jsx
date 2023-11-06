import React from 'react';
import "./landingpage.css";
import { } from "@chakra-ui/react";
import img1 from "./Assets/City.jpg"
import img2 from "./Assets/Group 36.png"
import img3 from "./Assets/Group 38.png"
import img4 from "./Assets/Group 3830.jpg"
import img5 from "./Assets/Group 39.jpg"
import img6 from "./Assets/Group 41.jpg"
import img7 from "./Assets/Group 53.png"
import img8 from "./Assets/Rectangle 5720.jpg"
import img9 from "./Assets/Rectangle 5722.jpg"
import img10 from "./Assets/Rectangle 5779.png"
import img11 from "./Assets/Rectangle 5781.png"
import img12 from "./Assets/Rectangle.jpg"
import img13 from "./Assets/Rectangle 67.png"


import {
  Box,
  Flex,
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
  ChevronDownIcon,
  Stack,
  Container, Grid, GridItem
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import HomeCarousal from './HomeCarousal';

const Links = ['Home', 'AKRU Advantage', 'Lightings', "About"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"

      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorModeValue = useColorModeValue('gray.100', 'gray.900');


  return (
    <>
      <Box pr={5} bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src={img6} alt="Logo" />
            </Box>
            <HStack as={'nav'} ml={12} spacing={8} display={{ base: 'none', md: 'flex' }}>
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
              <MenuButton spacing={8} as={Button}
                // rightIcon={<ChevronDownIcon />} 
                bg="gray.200" color="black" mr={2}>
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
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>

              </MenuButton>
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
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box pt={5} mt={40} p={4}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={6}>
              <Text fontSize="50px">
                Commercial Real Estate
                Investing that is:
              </Text>
              <Text pt="10" fontSize="2xl" color="#052460" fontWeight="bold">
                Safer. Simpler. More Liquid.
              </Text>
              <Text pt="10" color="#052460">
                Experience premium U.S. commercial real estate starting at just $100. AKRU brings high-end investment opportunities within reach. Be at the vanguard of this launch by joining our waitlist, and gain early access to top-tier American commercial real estate assets.

              </Text>
              <Button bg="#052460" color="white" spacing={8}>
                Get Started
              </Button>
            </GridItem>
            <GridItem colSpan={6}>
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
      <Box p={0}>
        <Container>
          <Grid templateColumns="repeat(12, 1fr)" gap={10}>
            {/* First 6 Columns */}
            <Box
              colSpan={6}
              color="#333"
              fontFamily="Pragati Narrow"
              fontSize="80px"
              fontStyle="normal"
              fontWeight="400"
            >
              Institutional Investors?
              We have you covered
            </Box>

            {/* Horizontal Line */}
            <Box
              colSpan={1}
              borderRight="2px solid blue"
              height="100%"
              mt="auto"
              mb="auto"
            />

            {/* Last 6 Columns */}
            <Box
              colSpan={5} // Changed to 5 to ensure alignment with the grid
              color="#333"
              fontFamily="Pragati Narrow"
              fontStyle="normal"
              fontWeight="400"
            >
              <Text fontSize="80px">
                AKRU Private Access for Wealth Managers
              </Text>
              <Text fontSize="40px">
                Keeping in mind the needs of RIAs and institutional investors, we have created a portal specifically tailored to their requirements. Explore the benefits that AKRU Private Access offers.
              </Text>
              <Button
                bg="#052460"
                color="white"
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
          {/* 5 Columns */}
          <GridItem pl={40} pt={40} colSpan={5}>
            <Text >Feartured</Text>
            <Text pt={2}>LIsting</Text>
            <Image pt={10} src={img4}></Image>
          </GridItem>

          {/* 7 Columns */}
          <GridItem colSpan={7}>
            <Image src={img2}></Image>
          </GridItem>
        </Grid>
      </Container>
      <Box p={5} pt={20} pl={50}><HomeCarousal /></Box>
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
          <div className="image-overlay">
            We want to provide our users with the best experience possible, but
            it is important for you to understand several important things. You
            should review our legal disclaimers here, as well as our terms of
            use here. To sum it up, our mission is to provide technology that
            streamlines real estate investments, all in compliance with
            applicable law. In accessing our site, it is your responsibility to
            understand the risks of all your investments, including those issuers
            who tokenize through AKRU. Because we are a technology company and
            not a licensed financial services provider, we cannot and do not
            provide any investment advice or recommendations to you or any other
            investor. While we are seeking to solve many of the problems
            associated with real estate investing, all investments, including
            tokenized real estate, are inherently speculative in nature, are not
            guaranteed to hold their value, and using any new technology like
            ours should include assessment of all the risks involved in new
            frontiers, including regulatory uncertainty
          </div>
        </GridItem>
      </Grid>
    </Container>
    <Box bg="#052460" color="white" py={10}>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={4}>
            <Text fontSize="2xl" mb={4}>Book a meeting with us.</Text>
            <Link color="white" href="#">Set Up A Call</Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="lg" mb={4}>Company</Text>
            <Link color="white" href="#">About Us</Link>
            <Link color="white" href="#">Technology</Link>
            <Link color="white" href="#">Contact Us</Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="lg" mb={4}>Useful Links</Text>
            <Link color="white" href="#">Home</Link>
            <Link color="white" href="#">How It Works</Link>
            <Link color="white" href="#">Help Center</Link>
            <Link color="white" href="#">Why Invest?</Link>
            <Link color="white" href="#">Resources</Link>
            <Link color="white" href="#">Support</Link>
          </GridItem>
          <GridItem colSpan={4}>
            <Text fontSize="lg" mb={4}>Contact</Text>
            <Text>+1 888 966 AKRU (2578)</Text>
            <Text>info@example.com</Text>
          </GridItem>
        </Grid>
        <Box mt={10}>
          <Text fontSize="lg">
            AKRU’s mission is to democratize commercial real estate investing.
            Because we believe real estate investing should be simple and
            accessible, we created a platform that lowers barriers to entry and
            offers a seamless experience for both investors and owners.
          </Text>
        </Box>
      </Container>
      <Box mt={10} bg="black" color="white" py={2} textAlign="center">
        <Text>&copy; 2023 AKRU. All rights reserved.</Text>
      </Box>
    </Box>

    </>
  );
}

export default LandingPage;
