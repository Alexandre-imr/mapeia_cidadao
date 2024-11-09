import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Heading,
  Image,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex height="100vh">
      <Box flex="1" bg="gray.200" display={{ base: "none", md: "block" }}>
        <Image src="/Capa.png" alt="Capa" w="100%" h="100%" />
      </Box>
      <Flex
        flex="1"
        bgGradient="linear(to-r, purple.800, purple.400)"
        align="center"
        justify="center"
      >
        <Box>
          <Image src="/Logo.png" alt="Capa" />
          <Flex direction="column" align="center" mb="4">
            <Heading as="h2" size="lg" color="white">
              MAPEIA CIDADÃO
            </Heading>
            <Text fontSize="xl" color="white" mt="4" mb="8">
              Cadastre-se
            </Text>
          </Flex>

          <FormControl id="email" mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              bg="purple.900"
              color="white"
              placeholder="Digite seu email"
            />
          </FormControl>

          <FormControl id="password" mb="4">
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              bg="purple.900"
              color="white"
              placeholder="Digite sua senha"
            />
          </FormControl>

          <Button colorScheme="green" width="full" mt="4">
            Entrar
          </Button>

          <Text textAlign="center" mt="4" color="white">
            Não tem uma conta?
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
