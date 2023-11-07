 
import LandingPage from "./component/LandingPage.jsx"
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <LandingPage />
     
    </ChakraProvider>
  );
}

export default App;
