import {
  Button,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Card, Heading,
} from "@chakra-ui/react";

export function Article() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="1">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Читать
        </Button>
      </CardFooter>
    </Card>
  );
}
