import React from 'react';
import styled from 'styled-components';

import AuthorHeadingWidget from './author-heading-widget';
import { TBriefPostAnnounceProps } from '../types/widgets.types';
import useMouseEvents from '../services/hooks/use-mouse-events';
import { HeaderFiveText } from '../ui-lib';
import { primaryBlack } from '../constants/colors';

const BriefPostAnnounceWrapper = styled.div`
  padding-right: 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  max-height: 150px;
  @media screen and (max-width: 600px) {
    display: none;
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
}) => {
  const {
    status: { isHovered },
    handlers: { onMouseEnter, onMouseLeave },
  } = useMouseEvents({});

  return (
    <BriefPostAnnounceWrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
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
        -
        {isHovered}
      </HeaderFiveText>
    </BriefPostAnnounceWrapper>
  );
};

export default BriefPostAnnounceWidget;
