export const API_ROOT = 'http://localhost:3000/api';

export const REGISTER_ROUTE = '/users';
export const LOGIN_ROUTE = '/users/login';
export const USER_ROUTE = '/user';
export const ADMIN_ROUTE = '/admin';
export const ARTICLES_ROUTE = '/articles';
export const ADMIN_FEED_ROUTE = `${ADMIN_ROUTE}${ARTICLES_ROUTE}/state/:value`;
export const FEED_ROUTE = `${ARTICLES_ROUTE}/feed`;
export const TAGS_ROUTE = '/tags';
export const PROFILES_ROUTE = '/profiles';
export const INVITE_ROUTE = '/user/invites/new';

export const JWT = 'JWT-RT-BLG';
