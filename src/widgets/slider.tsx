import styled from 'styled-components';
import React, {
  FC, useState, MouseEventHandler,
} from 'react';
import BuletSlider from '../ui-lib/buledSlider';
import { useSelector } from '../services/hooks';
import BriefPostAnnounceWidget from './brief-post-announce-widget';
import { mobileViewThreshold } from '../constants';
import { TArticle } from '../types/types';

const SlideContainer = styled.div`
display: flex;
width: 100%;
`;
const SlidersContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
@media screen and (min-width: ${mobileViewThreshold}px) {
    display: none;
    }
`;
type TSlide = {
  data: TArticle;
  name: number;
  page: number;
};
const Slide : FC<TSlide> = ({ data, name, page }) => {
  const {
    author: {
      username,
      nickname,
    },
    title,
    createdAt,
    favorited,
    favoritesCount,
    slug,
  } = data;
  const nope = (): void => {
  };
  if (page === name) {
    return (
      <SlideContainer>
        <BriefPostAnnounceWidget
          key={slug}
          name={nickname ?? username}
          title={title}
          date={new Date(createdAt)}
          isLiked={favorited}
          likesCount={favoritesCount}
          onLikeClick={nope} />
      </SlideContainer>
    );
  }
  return null;
};
const BuletBar = styled.div`
        display: flex;
        gap:12px;
        padding-top:16px;
    `;

const Slider: FC = () => {
  const data = useSelector((state) => state.view.topFeed) ?? [];
  const range = [];
  for (let i = 0; i < data?.length ?? 0; i += 1) {
    range.push(i);
  }
  const [page, setPage] = useState<number>(0);

  return (
    <SlidersContainer>
      {
                data && data.length > 0 && data.map((DataSlide: TArticle, index: number) => (
                  <Slide key={DataSlide.slug} data={DataSlide} name={index} page={page} />
                ))
            }
      <BuletBar>
        {
                data && range.map((pageSlide) => {
                  const isActive = pageSlide === page;
                  const onClick : MouseEventHandler = () => {
                    setPage(pageSlide);
                    console.log(`Клик по кнопке № ${pageSlide}!`);
                  };
                  return (
                    <BuletSlider key={pageSlide} onClick={onClick} isActive={isActive} />
                  );
                })
            }
      </BuletBar>
    </SlidersContainer>

  );
};
export default Slider;
