/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { nanoid } from '@reduxjs/toolkit';
import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';
import { setSelectedTags } from '../store';
import Tag from './tag';
import { HeaderThreeText } from '../ui-lib';
<<<<<<< HEAD
import { TTags } from '../types/types';
=======
import Preloader from './preloader';
>>>>>>> develop

const PopularTagsContainer = styled.div`
  margin-bottom: 56px;
  position: relative;
  z-index: 10;

  @media screen and (max-width:768px) {
    margin-bottom: 40px;
  }
`;

const TagList = styled.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
`;

const PopularTags: FC = () => {
  const dispatch = useDispatch();
  const { topTags } = useSelector((state) => state.all);
  const { selectedTags } = useSelector((state) => state.view);
  const [popularTags, setPopularTags] = useState<TTags>([]);

  const handleClick = (ev:React.MouseEvent, tag: string) => {
    ev.preventDefault();
    if (selectedTags) {
      dispatch(setSelectedTags([...selectedTags, tag]));
    } else {
      dispatch(setSelectedTags([tag]));
    }
  };

  const deactivateTag = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    dispatch(setSelectedTags(selectedTags!.filter((el) => el !== tag)));
  };
<<<<<<< HEAD

  useEffect(() => {
    const tags = topTags && topTags.map((tag) => tag.name);
    if (tags) {
      setPopularTags(tags);
    }
  }, [topTags]);

  if (popularTags) {
    return (
      <PopularTagsContainer>
        <HeaderThreeText paddingCSS='padding-bottom: 16px;'>
          <FormattedMessage id='popularTags' />
        </HeaderThreeText>
        <TagList>
          {
            popularTags.map((tag) => (
              <Tag
                key={nanoid()}
                tag={tag}
                pointer
                handleClick={handleClick}
                isActive={selectedTags?.includes(tag) || false}
                deactivateTag={(e) => deactivateTag(e, tag)} />
            ))
          }
        </TagList>
      </PopularTagsContainer>

    );
  }
=======
  // if (tags) {
>>>>>>> develop
  return (
    <PopularTagsContainer>
      <HeaderThreeText paddingCSS='padding-bottom: 16px;'>
        <FormattedMessage id='popularTags' />
      </HeaderThreeText>
      {
        tags
          ? (
            <TagList>
              {
                tags.map((tag) => (
                  <Tag
                    key={tag}
                    tag={tag}
                    pointer
                    handleClick={handleClick}
                    isActive={selectedTags?.includes(tag) || false}
                    deactivateTag={(e) => deactivateTag(e, tag)} />
                ))
              }
            </TagList>
          )
          : <Preloader />
      }
    </PopularTagsContainer>
  );
  // }
  // return (
  //   <Preloader />
  // <div>Loading Tags...</div>
  // );
};
export default PopularTags;
