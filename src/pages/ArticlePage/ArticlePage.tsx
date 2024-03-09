import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { TArticle } from "../../features/article/articleSlice.ts";
import { Response } from "../../app/api.ts";
import Markdown from "react-markdown";
import {
  ArticleCommentInput,
  CommentFields,
} from "../../components/Article/ArticleCommentInput.tsx";
import { ArticleComment } from "../../components/Article/ArticleComment.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import {
  createArticleComment,
  fetchArticle,
} from "../../features/article/articleActions.ts";
import { useEffect } from "react";

export function ArticlePage() {
  const dispatch = useAppDispatch();
  // const { content, title, id, comments } = response.data;
  const { articleId } = useParams<{ articleId: string }>();

  const article = useAppSelector((state) =>
    state.articles.articles.find((article) => article.id === Number(articleId)),
  );

  useEffect(() => {
    if (!articleId) {
      return;
    }

    dispatch(fetchArticle({ articleId: Number(articleId) }));
  }, [articleId]);

  const onCommentSubmit = (values: CommentFields) => {
    dispatch(createArticleComment({ ...values, articleId: Number(articleId) }));
  };

  return (
    <Container maxW="900px">
      <Heading mb="20px">
        <Skeleton minHeight="20px" isLoaded={article?.title !== undefined}>
          {article?.title}
        </Skeleton>
      </Heading>
      <Box px="15px" boxShadow="2px" minH="300px" pb="50px">
        <SkeletonText noOfLines={10} isLoaded={article?.content !== undefined}>
          <Text whiteSpace="pre-line">
            <Markdown children={article?.content} skipHtml />
          </Text>
        </SkeletonText>
      </Box>

      <VStack maxW="800px">
        <ArticleCommentInput onSubmit={onCommentSubmit} />
        <Divider />
        <VStack alignSelf="start" p="15px" gap="15px">
          {article?.comments?.map((comment) => {
            return (
              <ArticleComment
                username={comment.user!.username}
                text={comment.text}
              />
            );
          })}
        </VStack>
      </VStack>
    </Container>
  );
}
