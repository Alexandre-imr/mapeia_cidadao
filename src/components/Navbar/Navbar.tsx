// src/components/Navbar.tsx

import { Flex, Link, Box, Text, VStack, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      direction="column"
      align="flex-start"
      bg="purple.800"
      color="white"
      w="200px"
      h="100vh"
      padding="1rem"
      position="fixed"
      top="0"
      left="0"
    >
      <Image src="Logo.png" />
      <Box mb="8"></Box>
      <VStack align="flex-start" spacing="4">
        <Link>Home</Link>
        <Link>Relate seu problema</Link>
        <Link>Mapa de Calor</Link>
        <Link>Chat</Link>
        <Link>Meus formulários</Link>
      </VStack>
    </Flex>
  );
}
