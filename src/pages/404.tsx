import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import Head from "next/head";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => {
  return (
    <>
      <Head>
        <title>404 :: Page Not Found</title>
      </Head>
      <Container height="100vh">
        <Flex w={"full"} h={"100vh"}>
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
          >
            <Player
              autoplay
              loop
              src="/animations/404.json"
              style={{ height: "300px", width: "300px" }}
            />
            <Stack maxW={"2xl"} align={"center"} spacing={6}>
              <Text
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Sorry, The Page Could Not Be Found
              </Text>
            </Stack>
          </VStack>
        </Flex>
        <DarkModeSwitch />
      </Container>
    </>
  );
};

export default Index;

// import {
//   Link as ChakraLink,
//   Text,
//   Code,
//   List,
//   ListIcon,
//   ListItem,
// } from "@chakra-ui/react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

// import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
// import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import { CTA } from "../components/CTA";
// import { Footer } from "../components/Footer";

// const Index1 = () => (
//   <>
//     <Head>
//       <title>404 :: Page Not Found</title>
//     </Head>

//     <Container height="100vh">
//       <Player
//         autoplay
//         loop
//         src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
//         style={{ height: "300px", width: "300px" }}
//         controls={false}
//       />

//       <DarkModeSwitch />
//     </Container>
//   </>
// );

// export default Index;
