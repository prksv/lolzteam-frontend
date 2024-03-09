import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createArticleComment,
  fetchArticle,
  fetchArticles,
} from "./articleActions.ts";
import { TUserPublic } from "../auth/authSlice.ts";
import { Response } from "../../app/api.ts";

export type TComment = {
  text: string;
  user?: TUserPublic;
};

export type TArticle = {
  id: number;
  title: string;
  description: string;
  content?: string;
  comments?: TComment[];
};

interface ArticleState {
  articles: TArticle[];
  isLoading: boolean;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addComment(
      state,
      { payload }: PayloadAction<{ articleId: number; comment: TComment }>,
    ) {
      const index = state.articles.findIndex(
        (article) => article.id === payload.articleId,
      );

      state.articles[index].comments?.unshift(payload.comment);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.articles = payload.data;
      state.isLoading = false;
    });
    builder.addCase(
      fetchArticle.fulfilled,
      (state, { payload }: PayloadAction<Response<TArticle>>) => {
        const index = state.articles.findIndex(
          (article) => article.id === payload.data.id,
        );

        if (index === -1) {
          state.articles.push(payload.data);
        } else {
          state.articles[index] = payload.data;
        }

        state.isLoading = false;
      },
    );
  },
});

export const { addComment } = articleSlice.actions;

export default articleSlice.reducer;
