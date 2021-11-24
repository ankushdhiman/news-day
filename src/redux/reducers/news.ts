import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { News, Board, BoardNews } from '../../types';

export const newsApiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/v1',
  }),
  tagTypes: ['News', 'Board'],
  endpoints(build) {
    return {
      fetchBoards: build.query<Board[], void>({
        query: () => '/board',
        providesTags: ['Board'],
      }),
      fetchBoardNews: build.query<BoardNews, string>({
        query: boardId => `/board/${boardId}/news`,
        providesTags: ['News'],
      }),
      fetchNews: build.query<News, string>({
        query: newsId => `/news/${newsId}`,
        providesTags: ['News'],
      }),
      addNews: build.mutation<News, News>({
        query: news => ({
          url: '/news',
          method: 'POST',
          body: news,
        }),
        invalidatesTags: ['News'],
      }),
      updateNews: build.mutation<News, News>({
        query: news => ({
          url: '/news',
          method: 'PUT',
          body: news,
        }),
        invalidatesTags: ['News'],
      }),
      deleteNews: build.mutation<string, string>({
        query: newsId => ({
          url: `/news${newsId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['News'],
      }),
      updateNewsStatus: build.mutation<string, Partial<News>>({
        query: ({ id, status }) => ({
          url: `/news${id}/${status}`,
          method: 'POST',
        }),
        invalidatesTags: ['News'],
      }),
    };
  },
});

export const {
  useFetchNewsQuery,
  useAddNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useUpdateNewsStatusMutation,
  useFetchBoardsQuery,
  useFetchBoardNewsQuery,
} = newsApiSlice;
