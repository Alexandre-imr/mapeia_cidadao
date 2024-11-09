"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Select,
  VStack,
  Flex,
  SimpleGrid,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";

const perguntas = [
  {
    id: 1,
    pergunta: "Selecione a área principal do problema:",
    opcoes: ["Cachorro1", "Verde", "Vermelho", "Amarelo"],
  },
  {
    id: 2,
    pergunta: "O problema afeta a qualidade de vida da população ?",
    opcoes: ["Cachorro2", "Banana", "Laranja", "Uva"],
  },
  {
    id: 3,
    pergunta: "Você considera que o problema é sazonal ocorre durante o ano ?",
    opcoes: ["Cachorro3", "Esportes", "Música", "Viagem"],
  },
  {
    id: 4,
    pergunta: "Qual a gravidade desse problema ?",
    opcoes: ["Cachorro4", "Esportes", "Música", "Viagem"],
  },
  {
    id: 5,
    pergunta:
      "Esse problema já foi resolvido ou melhorado anteriormente, mas voltou a acontecer ?",
    opcoes: ["Cachorro5", "Esportes", "Música", "Viagem"],
  },
  {
    id: 6,
    pergunta: "Esse problema afeta outras áreas além da principal ?",
    opcoes: ["Cachorro6", "Esportes", "Música", "Viagem"],
  },
  {
    id: 7,
    pergunta: "Esse problema tem impacto econômico ?",
    opcoes: ["Cachorro7", "Esportes", "Música", "Viagem"],
  },
  {
    id: 8,
    pergunta:
      "Você já presenciou ou foi diretamente afetado por esse problema ?",
    opcoes: ["Cachorro8", "Esportes", "Música", "Viagem"],
  },
  {
    id: 9,
    pergunta: "Esse problema tem impacto econômico ?",
    opcoes: ["Cachorro9", "Esportes", "Música", "Viagem"],
  },
  {
    id: 10,
    pergunta:
      "Esse problema já teve algum impacto em serviços essenciais da sua região ?",
    opcoes: ["Cachorro10", "Esportes", "Música", "Viagem"],
  },
];

const CardPerguntas = () => {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [mensagem, setMensagem] = useState("");

  const handleSelectChange = (id: number, value: string) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const webhookUrl =
      "https://n8n-certo-n8n.3zyhkx.easypanel.host/webhook-test/4cbe3cf8-f52e-43c7-9b53-15b75c8f22da"; // Substitua pela URL do seu webhook
    const data = {
      respostas,
      mensagem,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Dados enviados com sucesso!");
      } else {
        alert("Erro ao enviar dados");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar ao webhook");
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="">
      <Navbar />
      <Box>
        <SimpleGrid columns={2} spacing={10}>
          {perguntas.map(({ id, pergunta, opcoes }) => (
            <Box
              key={id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="white"
            >
              <Text mb={2} fontWeight="bold">
                {pergunta}
              </Text>
              <Select
                placeholder="Selecione uma opção"
                onChange={(e) => handleSelectChange(id, e.target.value)}
              >
                {opcoes.map((opcao, index) => (
                  <option key={index} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </Select>
            </Box>
          ))}
        </SimpleGrid>
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
          mt={10}
        >
          <Text>
            Na sua opinião, qual seria a melhor solução para esse problema?
          </Text>
          <Textarea
            placeholder="Escreva sua mensagem aqui..."
            size="md"
            resize="vertical"
            focusBorderColor="purple.400"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </Box>
        <Button
          mt={4}
          colorScheme="green"
          onClick={handleSubmit}
          w="100%"
          height="32px"
          mb="32px"
        >
          Enviar
        </Button>
      </Box>
    </Flex>
  );
};

export default CardPerguntas;
