import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Board, BoradNews } from '../../types';

export const boardApiSlice = createApi({
  reducerPath: 'boardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/v1',
  }),
  tagTypes: ['Board'],
  endpoints(build) {
    return {
      fetchBoards: build.query<Board[], void>({
        query: () => '/board',
      }),
      fetchBoardNews: build.query<BoradNews, string>({
        query: boardId => `/board/${boardId}/news`,
      }),
    };
  },
});

export const { useFetchBoardsQuery, useFetchBoardNewsQuery } = boardApiSlice;
