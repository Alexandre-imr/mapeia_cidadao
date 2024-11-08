import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, purple.800, pink.400)"
    >
      <Box
        bg="black"
        borderRadius="lg"
        p={8}
        width={{ base: "90%", md: "400px" }}
        textAlign="center"
        boxShadow="lg"
      >
        <Image src="/Logo.png" alt="Logo" mb={4} mx="auto" />

        <Heading as="h2" size="lg" color="white" mb={6}>
          Login
        </Heading>

        <FormControl id="email" mb={4}>
          <FormLabel color="white" textAlign="left">
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="Email"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>

        <FormControl id="password" mb={4}>
          <FormLabel color="white" textAlign="left">
            Senha
          </FormLabel>
          <Input
            type="password"
            placeholder="Senha"
            bg="gray.700"
            color="white"
            _placeholder={{ color: "gray.500" }}
          />
        </FormControl>

        <Button colorScheme="green" width="full" mt={4} mb={4}>
          Entrar
        </Button>

        {/* Link para Cadastro */}
        <Text color="white">
          Não tem uma conta?
          <Link href="/register" color="green">
            Cadastra-se
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
