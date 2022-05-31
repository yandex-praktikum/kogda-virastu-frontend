import React, { FC, MouseEventHandler, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk } from '../thunks';
import { blue, greySecondary, primaryBlack } from '../constants/colors';

const RibbonWrapper = styled.ul`
width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  gap: 32px;
`;

const ItemWrapper = styled.li`
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
`;

const TabContainer = styled.div`
  
  display: flex;
  gap: 16px
`;

interface IButtonProps {
  active: boolean;
}

const Button = styled.button<IButtonProps>`
    background-color: transparent;
    color: ${greySecondary};
    border: none;
    ${({ active }) => active && `
    border-bottom: 2px solid ${blue}; 
    color: ${primaryBlack};
  `}
    cursor: pointer;
    padding: 16px 8px;
    margin-bottom: 32px;
    :active {
      outline: none;
    }
  `;

const FeedRibbon : FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.view.feed);
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  const { isPublicFeedFetching } = useSelector((state) => state.api);
  const [activePost, setActivePost] = useState(false);
  const [active, setActive] = useState(true);
  if (!posts || isPublicFeedFetching) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }
  return (
    <ScrollRibbon>
      <>
        <TabContainer>
          <Button
            type='button'
            onClick={() => setActivePost(!activePost)}
            active={activePost}>
            <FormattedMessage id='viewAllArticle' />
          </Button>
          <Button
            type='button'
            onClick={() => setActive(!active)}
            active={active}>
            <FormattedMessage id='mySubscriptions' />
          </Button>
        </TabContainer>
        <RibbonWrapper>
          {posts.filter((post) => post.tagList.some((tag) => (tags.includes(tag)
                || !tags
                || tags.length < 1))).map((post) => {
            const onClick : MouseEventHandler = () => {
              if (post.favorited) {
                dispatch(deleteLikeThunk(post.slug));
              } else {
                dispatch(addLikeThunk(post.slug));
              }
            };
            return (
              <ItemWrapper key={post.slug}>
                <ArticleFullPreview
                  article={post}
                  onLikeClick={onClick} />
              </ItemWrapper>
            );
          })}
        </RibbonWrapper>
      </>
    </ScrollRibbon>
  );
};

export default FeedRibbon;
