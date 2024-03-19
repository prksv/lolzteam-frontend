import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api.ts";
import { CommentFields } from "../../components/Article/ArticleCommentInput.tsx";
import { addComment, TArticle } from "./articleSlice.ts";
import { Response } from "../../app/api.ts";
import { AxiosError } from "axios";
import { openModal } from "../modal/modalSlice.ts";

export const fetchArticles = createAsyncThunk(
  "articles",
  async (page: number = 1): Promise<Response<Array<TArticle>>> => {
    const { data } = await api.get(`articles?page=${page}`);

    return data;
  },
);

export type ArticleFetchParams = {
  articleId: number;
};

interface ArticleCommentAction extends CommentFields, ArticleFetchParams {}

export const createArticleComment = createAsyncThunk(
  "articles/comment",
  async ({ articleId, text }: ArticleCommentAction, thunkAPI) => {
    try {
      const { data } = await api.post(`articles/${articleId}/comments`, {
        text,
      });
      thunkAPI.dispatch(addComment({ articleId, comment: data.data }));
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          thunkAPI.dispatch(openModal("login"));
        }
        return thunkAPI.rejectWithValue(err.response?.data);
      }
    }
  },
);

export const fetchArticle = createAsyncThunk(
  "articles/comment",
  async ({ articleId }: ArticleFetchParams) => {
    const { data } = await api.get(`articles/${articleId}`);

    return data;
  },
);
