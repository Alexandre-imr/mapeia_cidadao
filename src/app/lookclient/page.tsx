// src/app/client.tsx

import Navbar from "@/components/Navbar/Navbar";
import {
  Box,
  Text,
  Flex,
  Textarea,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";

export default function ClientPage() {
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
            Relate Seu Problema
          </Heading>
          <Text fontSize="md" mb={4}>
            Preencha o formulário
          </Text>
          <Link href="/problem">
            <Button colorScheme="green" width="full" mt={4} mb={4}>
              Clique Aqui
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
