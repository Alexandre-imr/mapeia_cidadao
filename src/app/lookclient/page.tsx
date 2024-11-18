// src/app/client.tsx
"use client";

import Navbar from "@/components/Navbar/Navbar";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function ClientPage() {
  return (
    <Flex height="100vh" direction="column">
      <Navbar />

      <Flex w="100%" justify="center" align="center" flex="1">
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
            {`Relate Seu Problema`}
          </Heading>
          <Text fontSize="md" mb={4}>
            {`Preencha o formulário`}
          </Text>
          <NextLink href="/problem" passHref>
            <Button as="a" colorScheme="green" width="full" mt={4} mb={4}>
              {`Clique Aqui`}
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
}
