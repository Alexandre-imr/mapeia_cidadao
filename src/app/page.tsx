import { Button, Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

function Page() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Page;
