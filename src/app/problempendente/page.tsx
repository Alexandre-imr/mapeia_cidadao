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

interface Problema {
  codigo: string;
  area: string;
  descricao: string;
  status: string;
}

export default function ProblemasPendentesPage() {
  // Lista inicial de problemas pendentes
  const [problemasPendentes] = useState<Problema[]>([
    {
      codigo: "#1234",
      area: "Saúde",
      descricao: "Falta de médico na unidade de saúde.",
      status: "Pendente",
    },
    {
      codigo: "#2446",
      area: "Transporte",
      descricao: "Ônibus atrasado frequentemente.",
      status: "Pendente",
    },
    {
      codigo: "#2447",
      area: "Infraestrutura",
      descricao: "Buraco na rua causando acidentes.",
      status: "Pendente",
    },
    {
      codigo: "#2448",
      area: "Saúde",
      descricao: "Demora no atendimento de emergência.",
      status: "Pendente",
    },
  ]);

  return (
    <Flex height="100vh" ml="200px">
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
            Problema Pendentes
          </Heading>
        </Box>

        {/* Tabela de problemas pendentes */}
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
              {problemasPendentes.map((problema, index) => (
                <Tr key={index}>
                  <Td>{problema.codigo}</Td>
                  <Td>{problema.area}</Td>
                  <Td>{problema.status}</Td>
                  <Td>
                    <IconButton
                      aria-label="Abrir problema"
                      icon={<FiExternalLink />}
                      colorScheme="purple"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        alert(`Abrindo problema ${problema.codigo}`)
                      }
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
