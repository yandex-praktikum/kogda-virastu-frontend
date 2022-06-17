export const API_ROOT = 'http://localhost:3000/api';

export const REGISTER_ROUTE = '/users';
export const LOGIN_ROUTE = '/users/login';
export const USER_ROUTE = '/user';
export const ADMIN_ROUTE = '/admin';
export const ARTICLES_ROUTE = '/articles';
export const MODERATION_ARTICLE_ROUTE = `${ADMIN_ROUTE}${ARTICLES_ROUTE}`;
export const PENDING_FEED_ROUTE = '/admin/articles/state/pending';
export const FEED_ROUTE = `${ARTICLES_ROUTE}/feed`;
export const TAGS_ROUTE = '/tags';
export const PROFILES_ROUTE = '/profiles';
export const INVITE_ROUTE = '/user/invites/new';

export const JWT = 'JWT-RT-BLG';
