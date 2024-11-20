import Navbar from "@/components/Navbar/Navbar";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

export default function RelatorioPage() {
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
            FAÇA DOWNLOAD DO RELATÓRIO
          </Heading>

          <Button
            as="a"
            href="/path-to-report"
            colorScheme="purple"
            width="full"
            mt={4}
            textAlign="center"
          >
            Clique aqui
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
