import React from 'react';
import styled from 'styled-components';

import AuthorHeadingWidget from './author-heading-widget';
import { TBriefPostAnnounceProps } from '../types/widgets.types';
import { HeaderFiveText } from '../ui-lib';
import { primaryBlack } from '../constants/colors';

const BriefPostAnnounceWrapper = styled.li`
  padding-right: 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  max-height: 150px;
  width: 100%;
  word-break: break-all;
  @media screen and (max-width: 1918px) {
    width: 280px;
  }
  @media screen and (max-width: 1700px) {
    width: 160px;
  }
  @media screen and (max-width: 639px) {
    width: 280px;
  }
`;

const BriefPostAnnounceWidget : React.FC<TBriefPostAnnounceProps> = ({
  name,
  title,
  image,
  date,
  isLiked,
  likesCount,
  onLikeClick,
}) => (
  <BriefPostAnnounceWrapper>
    <AuthorHeadingWidget
      name={name}
      date={date}
      image={image}
      isAuthor={false}
      isLiked={isLiked}
      likesCount={likesCount}
      onLikeClick={onLikeClick} />
    <HeaderFiveText marginCSS='margin-right: 70px;' color={primaryBlack}>
      {title}
    </HeaderFiveText>
  </BriefPostAnnounceWrapper>
);

export default BriefPostAnnounceWidget;
