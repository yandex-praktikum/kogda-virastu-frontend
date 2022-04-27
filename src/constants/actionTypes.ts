export const APP_LOAD = 'APP_LOAD';
export const REDIRECT = 'REDIRECT';
export const ARTICLE_SUBMITTED = 'ARTICLE_SUBMITTED';
export const SETTINGS_SAVED = 'SETTINGS_SAVED';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const SETTINGS_PAGE_UNLOADED = 'SETTINGS_PAGE_UNLOADED';
export const HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
export const HOME_PAGE_UNLOADED = 'HOME_PAGE_UNLOADED';
export const ARTICLE_PAGE_LOADED = 'ARTICLE_PAGE_LOADED';
export const ARTICLE_PAGE_UNLOADED = 'ARTICLE_PAGE_UNLOADED';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ARTICLE_FAVORITED = 'ARTICLE_FAVORITED';
export const ARTICLE_UNFAVORITED = 'ARTICLE_UNFAVORITED';
export const SET_PAGE = 'SET_PAGE';
export const APPLY_TAG_FILTER = 'APPLY_TAG_FILTER';
export const CHANGE_TAB = 'CHANGE_TAB';
export const PROFILE_PAGE_LOADED = 'PROFILE_PAGE_LOADED';
export const PROFILE_PAGE_UNLOADED = 'PROFILE_PAGE_UNLOADED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const LOGIN_PAGE_UNLOADED = 'LOGIN_PAGE_UNLOADED';
export const REGISTER_PAGE_UNLOADED = 'REGISTER_PAGE_UNLOADED';
export const ASYNC_START = 'ASYNC_START';
export const ASYNC_END = 'ASYNC_END';
export const EDITOR_PAGE_LOADED = 'EDITOR_PAGE_LOADED';
export const EDITOR_PAGE_UNLOADED = 'EDITOR_PAGE_UNLOADED';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
export const UPDATE_FIELD_EDITOR = 'UPDATE_FIELD_EDITOR';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const PROFILE_FAVORITES_PAGE_UNLOADED = 'PROFILE_FAVORITES_PAGE_UNLOADED';
export const PROFILE_FAVORITES_PAGE_LOADED = 'PROFILE_FAVORITES_PAGE_LOADED';

export interface IAppLoadAction {
  readonly type: typeof APP_LOAD;
}

export interface IRedirectAction {
  readonly type: typeof REDIRECT;
}

export interface IArticleSubmittedAction {
  readonly type: typeof ARTICLE_SUBMITTED;
}

export interface ISettingsSavedAction {
  readonly type: typeof SETTINGS_SAVED;
}

export interface IDeleteArticleAction {
  readonly type: typeof DELETE_ARTICLE;
}

export interface ISettingsPageUnloadedAction {
  readonly type: typeof SETTINGS_PAGE_UNLOADED;
}

export interface IHomePageLoadedAction {
  readonly type: typeof HOME_PAGE_LOADED;
}

export interface IHomePageUnloadedAction {
  readonly type: typeof HOME_PAGE_UNLOADED;
}

export interface IArticlePageLoadedAction {
  readonly type: typeof ARTICLE_PAGE_LOADED;
  payload: {
    errors?: {},
    article: {} | null,
    comment: {
      id: string,
      body: string,
      createdAt: string,
      author: string },
  }
}

export interface IArticlePageUnloadedAction {
  readonly type: typeof ARTICLE_PAGE_UNLOADED;
}

export interface IAddCommentAction {
  readonly type: typeof ADD_COMMENT;
}

export interface IArticleFavoritedAction {
  readonly type: typeof ARTICLE_FAVORITED;
}

export interface ISetPageAction {
  readonly type: typeof SET_PAGE;
}

export interface IApplyTagFilterAction {
  readonly type: typeof APPLY_TAG_FILTER;
}

export interface IChangeTabAction {
  readonly type: typeof CHANGE_TAB;
}

export interface IProfilePageLoadedAction {
  readonly type: typeof PROFILE_PAGE_LOADED;
}

export interface IProfilePageUnloadedAction {
  readonly type: typeof PROFILE_PAGE_UNLOADED;
}

export interface ILoginAction {
  readonly type: typeof LOGIN;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export interface IRegisterAction {
  readonly type: typeof REGISTER;
}

export interface ILoginPageUnloadedAction {
  readonly type: typeof LOGIN_PAGE_UNLOADED;
}

export interface IRegisterPageUnloadedAction {
  readonly type: typeof REGISTER_PAGE_UNLOADED;
}

export interface IAsyncStartAction {
  readonly type: typeof ASYNC_START;
}

export interface IAsyncEndAction {
  readonly type: typeof ASYNC_END;
}

export interface IEditorPageLoadedAction {
  readonly type: typeof EDITOR_PAGE_LOADED;
}

export interface IEditorPageUnloadedAction {
  readonly type: typeof EDITOR_PAGE_UNLOADED;
}

export interface IAddTagAction {
  readonly type: typeof ADD_TAG;
}

export interface IRemoveTagAction {
  readonly type: typeof REMOVE_TAG;
}

export interface IUpdateFieldAuthAction {
  readonly type: typeof UPDATE_FIELD_AUTH;
}

export interface IUpdateFieldEditorAction {
  readonly type: typeof UPDATE_FIELD_EDITOR;
}

export interface IFollowUserAction {
  readonly type: typeof FOLLOW_USER;
}

export interface IUnfollowUserAction {
  readonly type: typeof UNFOLLOW_USER;
}

export interface IProfileFavoritesPageUnloadedAction {
  readonly type: typeof PROFILE_FAVORITES_PAGE_UNLOADED;
}

export interface IProfileFavoritesPageLoadedAction {
  readonly type: typeof PROFILE_FAVORITES_PAGE_LOADED;
}

export interface IDeleteCommentAction {
  readonly type: typeof DELETE_COMMENT;
}

export type TArticleActions =
  | IArticlePageLoadedAction
  | IArticlePageUnloadedAction
  | IAddCommentAction
  | IDeleteCommentAction;

export type TAppActions =
  | IAppLoadAction
  | IRedirectAction
  | IArticleSubmittedAction
  | ISettingsSavedAction
  | IDeleteArticleAction
  | ISettingsPageUnloadedAction
  | IHomePageLoadedAction
  | IHomePageUnloadedAction
  | IArticleFavoritedAction
  | ISetPageAction
  | IApplyTagFilterAction
  | IChangeTabAction
  | IProfilePageLoadedAction
  | IProfilePageUnloadedAction
  | ILoginAction
  | ILogoutAction
  | IRegisterAction
  | ILoginPageUnloadedAction
  | IRegisterPageUnloadedAction
  | IAsyncStartAction
  | IAsyncEndAction
  | IEditorPageLoadedAction
  | IEditorPageUnloadedAction
  | IAddTagAction
  | IRemoveTagAction
  | IUpdateFieldAuthAction
  | IUpdateFieldEditorAction
  | IFollowUserAction
  | IUnfollowUserAction
  | IProfileFavoritesPageUnloadedAction
  | IProfileFavoritesPageLoadedAction;
