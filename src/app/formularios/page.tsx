"use client";

import Navbar from "@/components/Navbar/Navbar";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

interface Formulario {
  codigo: string;
  area: string;
  status: string;
}

export default function MeusFormulariosPage() {
  // Lista inicial de formulários, que será atualizada a partir da funcionalidade de "Relate seu problema".
  const [formularios, setFormularios] = useState<Formulario[]>([
    { codigo: "#2446", area: "Saúde", status: "Pendente" },
  ]);

  return (
    <Flex height="100vh">
      <Navbar />

      {/* Corpo da página */}
      <Flex flex="1" flexDir="column" p={6} bg="purple.700">
        {/* Cabeçalho */}
        <Box
          bg="purple.600"
          borderRadius="md"
          p={4}
          mb={4}
          color="white"
          textAlign="center"
          boxShadow="lg"
        >
          <Heading as="h1" size="lg">
            Meus formulários
          </Heading>
        </Box>

        {/* Tabela de formulários */}
        <Box
          bg="purple.800"
          borderRadius="md"
          p={4}
          color="white"
          boxShadow="lg"
          overflowX="auto"
        >
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="white">Código</Th>
                <Th color="white">Área</Th>
                <Th color="white">Status</Th>
                <Th color="white">Abrir</Th>
              </Tr>
            </Thead>
            <Tbody>
              {formularios.map((formulario, index) => (
                <Tr key={index}>
                  <Td>{formulario.codigo}</Td>
                  <Td>{formulario.area}</Td>
                  <Td>{formulario.status}</Td>
                  <Td>
                    <IconButton
                      aria-label="Abrir formulário"
                      icon={<FiExternalLink />}
                      colorScheme="purple"
                      variant="outline"
                      onClick={() => {
                        // Ação ao clicar no ícone
                        console.log(`Abrindo formulário ${formulario.codigo}`);
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
