import logo from './logo.svg';
import './App.css';
import LandingPage from "./component/LandingPage.jsx"
import Navebar from './component/Navbar';
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from './component/HomePage';


function App() {
  return (
    <ChakraProvider>
      <LandingPage />
      {/* <HomePage /> */}
      {/* <Navebar/> */}
    </ChakraProvider>
  );
}

export default App;
