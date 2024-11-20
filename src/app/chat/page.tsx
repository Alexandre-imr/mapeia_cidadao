"use client";

import Navbar from "@/components/Navbar/Navbar";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([...messages, { text: newMessage, isUser: true }]);
    setNewMessage(""); // Limpa o campo de texto
  };

  return (
    <Flex height="100vh">
      <Navbar />

      {/* Corpo do chat */}
      <Flex flex="1" flexDir="column" p={6} bg="purple.700">
        {/* Cabeçalho com o texto "Suporte" dentro de uma moldura */}
        <Flex justify="center" mb={4}>
          <Box
            bg="purple.600"
            borderRadius="lg"
            p={2}
            px={4}
            color="white"
            textAlign="center"
            boxShadow="lg"
          >
            <Text fontSize="lg" fontWeight="bold">
              Suporte
            </Text>
          </Box>
        </Flex>

        {/* Área das mensagens */}
        <Flex
          flex="1"
          overflowY="auto"
          flexDirection="column"
          p={4}
          gap={4}
          bg="purple.800"
          borderRadius="md"
        >
          {messages.map((message, index) => (
            <HStack
              key={index}
              justifyContent={message.isUser ? "flex-end" : "flex-start"}
            >
              {!message.isUser && <Avatar size="sm" name="Suporte" />}
              <Box
                bg={message.isUser ? "blue.400" : "gray.400"}
                color="white"
                p={3}
                borderRadius="lg"
                maxWidth="60%"
              >
                <Text>{message.text}</Text>
              </Box>
              {message.isUser && <Avatar size="sm" name="Você" />}
            </HStack>
          ))}
        </Flex>

        {/* Campo para enviar mensagem */}
        <Flex mt={4} ml="calc(15% + 2rem)">
          <Input
            placeholder="Digite uma mensagem..."
            bg="white"
            color="black"
            mr={2}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            flex="1"
          />
          <Button colorScheme="purple" onClick={handleSendMessage}>
            Enviar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
