import { Header } from "../components/Header";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Article } from "../components/Article";
import { RegisterModal } from "../components/RegisterModal";

function App() {
  return (
    <>
      <Box display="block" px="50px">
        <Header />
        <Box>
          <Heading>Статьи</Heading>
          <Flex gap="5%" justifyContent="flex-start" flexWrap="wrap">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </Flex>
        </Box>
      </Box>
      <RegisterModal />
    </>
  );
}

export default App;
