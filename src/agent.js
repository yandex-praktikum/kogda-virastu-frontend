import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import API_ROOT from './constants/base-url';

// eslint-disable-next-line no-undef
const superagent = superagentPromise(_superagent, global.Promise);

const encode = encodeURIComponent;
const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: (url) => superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) => superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const Auth = {
  current: () => requests.get('/user'), // getCurrentUser
  login: (email, password) => requests.post('/users/login', { user: { email, password } }), // loginUser
  register: (username, email, password) => requests.post('/users', { user: { username, email, password } }), // registerUser
  save: (user) => requests.put('/user', { user }), // patchUser
};

const Tags = {
  getAll: () => requests.get('/tags'), // fetchTags
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article) => ({ ...article, slug: undefined });
const Articles = {
  all: (page) => requests.get(`/articles?${limit(10, page)}`), // fetchArticles
  byAuthor: (author, page) => requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`), // fetchArticles
  byTag: (tag, page) => requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`), // fetchArticles
  del: (slug) => requests.del(`/articles/${slug}`), // deleteArticle
  favorite: (slug) => requests.post(`/articles/${slug}/favorite`), // postLikeArticle
  favoritedBy: (author, page) => requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`), // fetchArticle
  feed: () => requests.get('/articles/feed?limit=10&offset=0'), // fetchFeed
  get: (slug) => requests.get(`/articles/${slug}`), // getArticle
  unfavorite: (slug) => requests.del(`/articles/${slug}/favorite`), // deleteLikeArticle
  update: (article) => requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }), // patchArticle
  create: (article) => requests.post('/articles', { article }), // postArticle
};

const Comments = {
  create: (slug, comment) => requests.post(`/articles/${slug}/comments`, { comment }), // postComment
  delete: (slug, commentId) => requests.del(`/articles/${slug}/comments/${commentId}`), // deleteComment
  forArticle: (slug) => requests.get(`/articles/${slug}/comments`), // fetchComments
};

const Profile = {
  follow: (username) => requests.post(`/profiles/${username}/follow`), // postFollowProfile
  get: (username) => requests.get(`/profiles/${username}`), // fetchProfile
  unfollow: (username) => requests.del(`/profiles/${username}/follow`), // deleteFollowProfile
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: (_token) => { token = _token; },
};
