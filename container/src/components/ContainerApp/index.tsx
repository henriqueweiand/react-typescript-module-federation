import {
  Center,
  Box,
  Flex,
  Heading,
  Spinner,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

var version = process.env.BUILD_DATE;

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
}: ContainerAppProps) => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('addValue', (event: any) => {
        setNumber(event.detail);
      });
    return ()=> {
      window.removeEventListener('addValue', () => {});
    };
  },[])

  return (
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Box color="#fff" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
        Latest Build Date: <Text fontWeight="bold">{version}</Text>
      </Box>
      <Flex
        border="1px solid #151421"
        borderRadius="1rem"
        height="50vh"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        padding="5rem"
        backgroundColor="#6F60EA"
      >
        <Heading color="#fff">CONTAINER</Heading>
        <Flex direction="row" justifyContent="space-around">
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              mr="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                External APP count {number}
              </Heading>
              <CounterAppOne />
              <Button mt="1rem" w="100%" to="/app1" as={RouterLink}>
                To App
              </Button>
            </Box>
          </React.Suspense>
        </Flex>
      </Flex>
    </Center>
  );
};
