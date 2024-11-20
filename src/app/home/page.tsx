import Navbar from "@/components/Navbar/Navbar";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <Flex height="100vh">
      <Navbar />

      <Flex w="100%" justify="center" align="center">
        <Box
          bg="purple.600"
          borderRadius="md"
          p={6}
          color="white"
          width={{ base: "90%", md: "400px" }}
          boxShadow="lg"
          textAlign="center"
        >
          <Heading as="h3" size="lg" mb={4}>
            O que deseja fazer?
          </Heading>

          <Flex direction="column" gap={4}>
            <Link href="/problem">
              <Button colorScheme="purple" width="full">
                Relate seu problema
              </Button>
            </Link>
            <Link href="/mapa">
              <Button colorScheme="purple" width="full" color="gray.400">
                Mapa de Calor
              </Button>
            </Link>
            <Link href="/formularios">
              <Button colorScheme="purple" width="full">
                Meus formulários
              </Button>
            </Link>
            <Link href="/problempendente">
              <Button colorScheme="purple" width="full">
                Problemas Pendentes
              </Button>
            </Link>
            <Link href="/relatorio">
              <Button colorScheme="purple" width="full">
                Relatório
              </Button>
            </Link>
            <Link href="/chat">
              <Button colorScheme="purple" width="full">
                Chat
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
