import React from 'react';
import ArticleList from '../ArticleList';
import { useDispatch, useSelector } from '../../services/hooks';
import { getPrivateFeedThunk, getPublicFeedThunk,getAllTagsThunk} from '../../thunks';
import TagFilterTab from './TagFilterTab';
import YourFeedTab from './YourFeedTab';
import GlobalFeedTab from './GlobalFeedTab';
import { FeedTypes } from '../../types/types';
import { calculateOffset } from '../../services/helpers';



/* const YourFeedTab = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.system);
  const { positionFeed } = useSelector((state) => state.view)

  const clickHandler = (e: any) => {
    dispatch(loadPrivateFeedThunk())
    dispatch(changePositionFeed('privat'))
    e.preventDefault()

  }
  if (isLoggedIn) {
    return (
      <li className="nav-item">
        <a href=""
          className={positionFeed === 'privat' ? 'nav-link active' : 'nav-link'}
          onClick={clickHandler}>
          Your Feed
        </a>
      </li>
    )
  }
  else return null
}
const GlobalFeedTab = () => {
  const dispatch = useDispatch();
  const { positionFeed } = useSelector((state) => state.view)
  const clickHandler = (e: any) => {
    e.preventDefault();
    dispatch(getAllTagsThunk())
    dispatch(changePositionFeed('global'))
  }
  return (
    <li className="nav-item">
      <a
        href=""
        className={positionFeed === 'global' ? 'nav-link active' : 'nav-link'}
        onClick={clickHandler}>
        Global Feed
      </a>
    </li>
  )
}
const TagFilterTab = (props: any) => {

  if (!props.tag) {
    return null;
  }
  else {
    return (
      <li className="nav-item">
        <a href="" className="nav-link active">
          <i className="ion-pound"></i>
        </a>
      </li>

    )
  }
}


 */
const MainView = () => {
  const dispatch = useDispatch();
  const {
    page, perPage, feedType, tag,
  } = useSelector((state) => state.view);
  React.useEffect(() => {
    switch (feedType) {
      case FeedTypes.public: {
        dispatch(getPublicFeedThunk({
          offset: calculateOffset(page, perPage),
          limit: perPage,
        }));
        break;
      }
      case FeedTypes.private: {
        dispatch(getPrivateFeedThunk({
          offset: calculateOffset(page, perPage),
          limit: perPage,
        }));
        break;
      }
      case FeedTypes.tags: {
        dispatch(getPublicFeedThunk({
          offset: calculateOffset(page, perPage),
          limit: perPage,
          tag,
        }));
        break;
      }
      default: throw new TypeError('Несоответствующий feedType!');
    }
  }, [dispatch, feedType, page, perPage, tag]);

  return (
    <div className='col-md-9'>
      <div className='feed-toggle'>
        <ul className='nav nav-pills outline-active'>
          <YourFeedTab />
          <GlobalFeedTab />
          <TagFilterTab />
        </ul>
      </div>
      <ArticleList />
    </div>
  );
};
export default MainView;
