import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { Divider, RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk } from '../thunks';
import { TArticle } from '../services/types';

const RibbonWrapper = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  row-gap: 32px;

  @media screen and (max-width: 1100px) {
    padding-left: 5%;
  }

  @media screen and (max-width: 769px) {
    column-gap: 20px;
    row-gap: 32px;
    max-width: 474px;
    padding: 0;
  }

  @media screen and (max-width: 765px) {
    flex-flow: column nowrap;
  }
`;

const ItemWrapper = styled.li`
  list-style: none outside;
  max-width: calc(50% - 16px);
  width: 100%;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;

  @media screen and (max-width: 800px) {
    max-width: calc(50% - 10px);
  }

  @media screen and (max-width: 765px) {
    max-width: max-content;
  }
`;
const activeStyle = {
  fontFamily: 'Alegreya Sans',
  fontSize: '18px',
  lineHeight: '24px',
  textDecoration: 'none',
  padding: '16px 8px',
  marginBottom: '33px',
  color: '#0A0A0B',
  borderBottom: '2px solid #008aff',
};
const notActiveStyle = {
  fontFamily: 'Alegreya Sans',
  fontSize: '18px',
  lineHeight: '24px',
  padding: '16px 8px',
  textDecoration: 'none',
  color: '#62626A',
};
const Links = styled.div`
  display: flex;
  padding: 0;

  @media screen and (max-width: 1100px) {
    padding-left: 5%;
  }

  @media screen and (max-width: 769px) {
    padding: 0;
  }
`;

type TFeedRibbon = {
  type: string;
};

const FeedRibbon: FC<TFeedRibbon> = ({ type }) => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const resizeHandler = () => {
    if (window.screen.width > 765) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  };
  useEffect(() => {
    if (window.screen.width > 765) setMobileScreen(true);
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.view.feed);
  const { tagsFollow } = useSelector((state) => state.view);
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  const { isPublicFeedFetching } = useSelector((state) => state.api);
  if (posts) {
    posts.filter((post) => post.tagList.some((tag) => tags.includes(tag)));
  }
  if (!posts || isPublicFeedFetching) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return activeStyle;
    }
    return notActiveStyle;
  };

  const allPosts = posts.filter(
    (post) => post.tagList.find((tag) => tags.includes(tag) || !tags || tags.length < 1),
  );
  const authorPosts = posts.filter(
    (post) => post.author.following || post.tagList.some((tag) => tagsFollow?.includes(tag)),
  );
  const renderArticle = (arr: Array<TArticle>) => arr.map((post, i) => {
    const onClick: MouseEventHandler = () => {
      if (post.favorited) {
        dispatch(deleteLikeThunk(post.slug));
      } else {
        dispatch(addLikeThunk(post.slug));
      }
    };
    return (
      <React.Fragment key={post.slug}>
        <ItemWrapper>
          <ArticleFullPreview article={post} onLikeClick={onClick} />
        </ItemWrapper>
        {i % 2 && i !== arr.length - 1 && mobileScreen ? (
          <Divider distance={0} />
        ) : null}
      </React.Fragment>
    );
  });

  return (
    <>
      <Links>
        <NavLink to='/' style={activeLink}>
          Все посты
        </NavLink>
        <NavLink to='/article' style={activeLink}>
          Мои подписки
        </NavLink>
      </Links>
      <ScrollRibbon>
        <RibbonWrapper>
          {type === 'all' && renderArticle(allPosts)}
          {type === 'subscribe' && renderArticle(authorPosts)}
        </RibbonWrapper>
      </ScrollRibbon>
    </>
  );
};

export default FeedRibbon;
