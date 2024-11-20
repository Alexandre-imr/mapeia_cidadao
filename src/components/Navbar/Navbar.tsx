// src/components/Navbar.tsx

import { Flex, Link, Box, VStack, Image } from "@chakra-ui/react";

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
        <Link as="a" href="/home">Home</Link>
        <Link as="a" href="/problem">Relate seu problema</Link>
        <Link color="gray.400">
          Mapa de Calor
        </Link>
        <Link as="a" href="/formularios">Meus formulários</Link>
        <Link as="a" href="/problempendente">Problemas Pendentes</Link>
        <Link as="a" href="/relatorio">Relatório</Link>
        <Link as="a" href="/chat">Chat</Link>
      </VStack>
    </Flex>
  );
}
