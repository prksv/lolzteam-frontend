import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { ArticleCard } from "../../components/Article";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { useEffect, useState } from "react";
import { fetchArticles } from "../../features/article/articleActions.ts";
import { Response } from "../../app/api.ts";
import { TArticle } from "../../features/article/articleSlice.ts";
import { PayloadAction } from "@reduxjs/toolkit";

export function MainPage() {
  const dispatch = useAppDispatch();

  const articles = useAppSelector((state) => state.articles.articles);
  const isArticlesLoading = useAppSelector((state) => state.articles.isLoading);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles(page))
      .unwrap()
      .then((payload) => {
        setTotalPages(payload.meta!.last_page);
      });
  }, [page]);

  return (
    <Flex direction="column">
      <Heading mb="20px">Статьи</Heading>
      {!isArticlesLoading && articles.length <= 0 && (
        <Text>Публикаций пока что нет :(</Text>
      )}
      <Flex gap="20px" flexWrap="wrap">
        {isArticlesLoading &&
          articles.length <= 0 &&
          [...Array(6)].map((_, key) => {
            return <Skeleton key={key} width="300px" height="250px" />;
          })}

        {articles?.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
            />
          );
        })}
      </Flex>
      <HStack mt="100px" alignSelf="center">
        {[...Array(totalPages)].map((_, key) => {
          key += 1;
          return (
            <Button
              onClick={() => setPage(key)}
              bg={page === key ? "gray.200" : ""}
            >
              {key}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
}
