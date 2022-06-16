import {
  TArticle, TComment, TProfile, TTags, TUser,
} from '../types/types';

export type TAPINewUser = {
  invite: string,
  user: {
    username: string;
    email: string;
    password: string;
    nickname?: string;
    invite: string;
  }
};

export type TAPIAuth = {
  user: {
    email: string;
    username: string;
    bio?: string;
    image?: string;
    token: string;
    nickname: string;
    invite: string;
    roles: string[];
  };
};

export type TAPILoginUser = {
  user: {
    email: string;
    password: string;
  }
};

export type TAPIUser = {
  name: number | undefined;
  roles: string[],
  _id?: string[],
  bio?: string[],
  favorites?: string[],
  followingUsers?: string[],
  followingTags?: string[],
  email: string,
  salt? : string,
  hash?: string,
  nickname: string,
  createdAt?: string,
  updatedAt?: string,
  __v?: number,
  image?: string,
  username: string,
};

export type TAPIPatchUserData = {
  email?: string;
  username?: string;
  bio?: string;
  image?: string;
  password?: string;
  nickname?: string;
};

export type TAPIPatchUser = {
  user: TAPIPatchUserData;
};

export type TAPIArticles = {
  articles: Array<TArticle>,
  articlesCount: number,
};

export type TAPIParamsObject = {
  limit?: number,
  offset?: number,
  tag?: string,
  favorited?: string,
  author?: string
};

export type TAPIArticle = {
  article: TArticle;
};

export type TAPIPatchArticleData = {
  title?: string | null;
  description?: string | null;
  body?: string | null;
  tagList?: TTags;
  link?: string | null;
};

export type TAPITags = {
  tags: TTags;
  followingTags: TTags
};

export type TAPIComment = {
  comment: TComment;
};
export type TAPIComments = {
  comments: Array<TComment>;
};

export type TAPIProfile = {
  profile: TProfile;
};

export type TAPIErrors = {
  [error: string]: string;
};
export type TAPIError = {
  errors: TAPIErrors;
  statusCode: number;
};

export type TAPIUsers = Array<TAPIUser> | null;

export type TAPIUsersRequest = {
  users: Array<TAPIUser>;
  usersCount: number;
}

export type TAPIUserData = {
  users: Array<TAPIUser>;
  usersCount?: number;
}