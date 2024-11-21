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
    opcoes: [
      "Saneamento Básico",
      "Infraestrutura Urbana",
      "Meio Ambiente",
      "Segurança Pública",
    ],
  },
  {
    id: 2,
    pergunta: "O problema afeta a qualidade de vida da população?",
    opcoes: ["Sim", "Não", "Parcialmente", "Não Sei"],
  },
  {
    id: 3,
    pergunta:
      "Você considera que o problema é sazonal ou ocorre durante o ano?",
    opcoes: ["Sazonal", "Durante o Ano Todo", "Não Sei", "Outros"],
  },
  {
    id: 4,
    pergunta: "Qual a gravidade desse problema?",
    opcoes: ["Baixa", "Média", "Alta", "Crítica"],
  },
  {
    id: 5,
    pergunta:
      "Esse problema já foi resolvido ou melhorado anteriormente, mas voltou a acontecer?",
    opcoes: ["Sim", "Não", "Não Sei", "Não Aplicável"],
  },
  {
    id: 6,
    pergunta: "Esse problema afeta outras áreas além da principal?",
    opcoes: ["Sim", "Não", "Não Sei", "Não Aplicável"],
  },
  {
    id: 7,
    pergunta: "Esse problema tem impacto econômico?",
    opcoes: ["Sim, Significativo", "Sim, Moderado", "Não", "Não Sei"],
  },
  {
    id: 8,
    pergunta:
      "Você já presenciou ou foi diretamente afetado por esse problema?",
    opcoes: ["Sim", "Não", "Indiretamente", "Não Sei"],
  },
  {
    id: 9,
    pergunta: "O problema poderia ser resolvido com ações da comunidade local?",
    opcoes: ["Sim", "Não", "Não Sei", "Depende"],
  },
  {
    id: 10,
    pergunta:
      "Esse problema já teve algum impacto em serviços essenciais da sua região?",
    opcoes: [
      "Sim, Serviços de Saúde",
      "Sim, Transporte",
      "Sim, Outros Serviços",
      "Não",
    ],
  },
];

const CardPerguntas = () => {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [mensagem, setMensagem] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSelectChange = (id: number, value: string) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      respostas,
      mensagem,
    };

    try {
      const response = await fetch(
        "https://n8n-certo-n8n.3zyhkx.easypanel.host/webhook-test/4cbe3cf8-f52e-43c7-9b53-15b75c8f22da",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatusMessage("Formulário enviado!");
      } else {
        setStatusMessage("Falha no envio.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setStatusMessage("Falha no envio.");
    } finally {
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Navbar />
      {showMessage && (
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          alignItems="center"
          justifyContent="center"
          zIndex="10"
        >
          <Box
            bg="white"
            p={8}
            borderRadius="md"
            textAlign="center"
            boxShadow="lg"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              {statusMessage}
            </Text>
            <Button colorScheme="green" onClick={closeMessage}>
              Fechar
            </Button>
          </Box>
        </Flex>
      )}
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
