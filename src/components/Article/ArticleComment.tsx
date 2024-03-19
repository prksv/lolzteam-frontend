import { Box, Text } from "@chakra-ui/react";

interface ArticleCommentProps {
  username: string;
  text: string;
}

export function ArticleComment({ username, text }: ArticleCommentProps) {
  return (
    <Box>
      <Text itemType="span" fontWeight="bold">
        {username}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
}
