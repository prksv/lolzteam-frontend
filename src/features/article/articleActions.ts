import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api.ts";
import { CommentFields } from "../../components/Article/ArticleCommentInput.tsx";

export const fetchArticles = createAsyncThunk("articles", async () => {
  const { data } = await api.get("articles");

  return data;
});

export type ArticleFetchParams = {
  articleId: number;
};

interface ArticleCommentAction extends CommentFields, ArticleFetchParams {}

export const createArticleComment = createAsyncThunk(
  "articles/comment",
  async ({ articleId, text }: ArticleCommentAction, thunkAPI) => {
    const { data } = await api.post(`articles/${articleId}/comments`, { text });
    thunkAPI.dispatch();
    return data;
  },
);

export const fetchArticle = createAsyncThunk(
  "articles/comment",
  async ({ articleId }: ArticleFetchParams) => {
    const { data } = await api.get(`articles/${articleId}`);

    return data;
  },
);
