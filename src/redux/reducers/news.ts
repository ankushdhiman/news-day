import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { News } from '../../types';

export const newsApiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/v1',
  }),
  tagTypes: ['News'],
  endpoints(build) {
    return {
      fetchNews: build.query<News, string>({
        query: newsId => `/news/${newsId}`,
      }),
      addNews: build.mutation<News, News>({
        query: news => ({
          url: '/news',
          method: 'POST',
          body: news,
        }),
      }),
      updateNews: build.mutation<News, News>({
        query: news => ({
          url: '/news',
          method: 'PUT',
          body: news,
        }),
      }),
      deleteNews: build.mutation<string, string>({
        query: newsId => ({
          url: `/news${newsId}`,
          method: 'DELETE',
        }),
      }),
      updateNewsStatus: build.mutation<string, Partial<News>>({
        query: ({ id, status }) => ({
          url: `/news${id}/${status}`,
          method: 'DELETE',
        }),
      }),
    };
  },
});

export const { useFetchNewsQuery, useAddNewsMutation } = newsApiSlice;
