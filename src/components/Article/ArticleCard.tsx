import {
  Button,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Card,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TArticle } from "../../features/article/articleSlice.ts";

export function ArticleCard({ id, title, description }: TArticle) {
  return (
    <Card maxW="sm" width="300px" height="250px">
      <CardBody>
        <Stack mt="6" spacing="1">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link to={`article/${id}`}>
          <Button variant="solid">Читать</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
