import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { ArticleCard } from "../../components/Article";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { useEffect } from "react";
import { fetchArticles } from "../../features/article/articleActions.ts";

export function MainPage() {
  const dispatch = useAppDispatch();

  const articles = useAppSelector((state) => state.articles.articles);
  const isArticlesLoading = useAppSelector((state) => state.articles.isLoading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Box>
      <Heading mb="20px">Статьи</Heading>
      {!articles && <Text>Публикаций пока что нет :(</Text>}
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
    </Box>
  );
}
