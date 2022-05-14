import { IComparator, TArticles } from '../types';

const makeTopFeed = (
  articles: TArticles,
  compareFunction: IComparator,
  qty : number,
) : TArticles => articles.sort(compareFunction).slice(qty);

export default makeTopFeed;
