import { Container, Grid, GridItem } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={6}>
          {/* Content for the first 6 columns */}
          Commercial Real Estate 
Investing that is:
        </GridItem>
        <GridItem colSpan={6}>
          {/* Content for the last 6 columns */}
          Column 7-12
        </GridItem>
      </Grid>
    </Container>
  );
}

export default HomePage;