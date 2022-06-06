import React, {
  FC, MouseEventHandler, useEffect, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { Divider, RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk } from '../thunks';

export const RibbonWrapper = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none outside;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-left: 5%;
  gap: 32px;

  @media screen and (max-width: 800px) {
    column-gap: 20px;
    row-gap: 32px;
}

@media screen and (max-width: 765px) {
  flex-flow: column nowrap;
  padding: 0;
}
`;

export const ItemWrapper = styled.li`
  list-style: none outside;
  max-width: calc(50% - 32px);
  width: 100%;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;

  @media screen and (max-width: 800px) {
    max-width: calc(50% - 20px);
}

@media screen and (max-width: 765px) {
  max-width: max-content;
}
`;

const FeedRibbon : FC = () => {
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
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  const { isPublicFeedFetching } = useSelector((state) => state.api);
  if (!posts || isPublicFeedFetching) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }
  return (
    <ScrollRibbon>
      <RibbonWrapper>
        {posts.filter((post) => post.tagList.some((tag) => (tags.includes(tag)
            || !tags
            || tags.length < 1))).map((post, i) => {
          const onClick : MouseEventHandler = () => {
            if (post.favorited) {
              dispatch(deleteLikeThunk(post.slug));
            } else {
              dispatch(addLikeThunk(post.slug));
            }
          };
          return (
            <React.Fragment key={post.slug}>
              <ItemWrapper>
                <ArticleFullPreview
                  article={post}
                  onLikeClick={onClick} />
              </ItemWrapper>
              {i % 2 && i !== posts.length - 1 && mobileScreen
                ? <Divider distance={0} /> : null}
            </React.Fragment>
          );
        })}
      </RibbonWrapper>
    </ScrollRibbon>
  );
};

export default FeedRibbon;
