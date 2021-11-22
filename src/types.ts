export interface LoginFormItems {
  username: string;
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
}

export interface Board {
  id: string;
  name: string;
}

export type NewsStatus = 'draft' | 'published' | 'archives';

export interface News {
  id: string;
  boardId: string;
  author: string;
  title: string;
  description: string;
  imageURL: string;
  createdAt: string;
  status: NewsStatus;
}

export interface BoardNews {
  draft: News[];
  published: News[];
  archives: News[];
}
