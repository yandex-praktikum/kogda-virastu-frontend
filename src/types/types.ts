export type TUser = {
  email: string;
  username: string;
  bio?: string;
  image?:string;
};

// Исправлено и переименовано по модели данных сервера
export type TProfile = {
  following: boolean;
  image?: string;
  username: string;
  email: string;
  bio?: string;
};

export type TTags = Array<string>;

export type TArticle = {
  author: TProfile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  // Тип tagList в ответе сервера: Array<string>
  tagList: TTags;
  title: string;
  updatedAt: string;
  // Это поле присутствует **только** в ответе сервера, отдельным полем на одном уровне с articles
  //  articlesCount: number;
};

export type TArticles = Array<TArticle>;

// Исправлено по модели данных сервера
export type TComment = {
  id: string;
  body: string;
  createdAt: string;
  author: TProfile;
};
