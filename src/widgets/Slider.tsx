import BuletSlider from '../ui-lib/buledSlider';
import styled, { useTheme } from 'styled-components';
import React, { FC, useState, useEffect } from 'react';
import { useSelector } from '../services/hooks';
import { BriefPostAnnounceWidget } from '../widgets/brief-post-announce-widget';
import { mobileViewThreshold } from '../constants';
import { TArticle } from '../types/types';

const SlideContainer = styled.div`
display: flex;
width: 100%;
`
const SlidersContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
@media screen and (min-width: ${mobileViewThreshold}px) {
    display: none;
    }
`
type TSlide = () => {
    data: TArticle[];
    name: number;
    page: number;
}
const Slide = ({ data, name, page }: any) => {
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
        return (<SlideContainer>
            <BriefPostAnnounceWidget
                key={slug}
                name={nickname ?? username}
                title={title}
                date={new Date(createdAt)}
                isLiked={favorited}
                likesCount={favoritesCount}
                onLikeClick={nope} />
        </SlideContainer>)
    }
    else return null
}
const BuletBar = styled.div`
        display: flex;
        gap:12px;
        padding-top:16px;
    `

export const Slider: FC<{ data: TArticle[] }> = ({ data }) => {
    const range = [];
    for (let i = 0; i < 5; ++i) {
        range.push(i);
    }
    const [page, setPage] = useState<number>(0);
    const onClick = (page: number) => {
        setPage(page)
    }
    return (
        <SlidersContainer>
            {
                data && data.map((DataSlide: TArticle, index: number) => (
                    <Slide key={index} data={DataSlide} name={index} page={page} />
                ))
            }
            <BuletBar>{
                data && range.map((pageSlide, index) => {
                    const isActive = pageSlide === page;
                    return (
                        <BuletSlider key={index} onClick={(e) => onClick(pageSlide)} isActive={isActive} />
                    )
                })
            }
            </BuletBar>
        </SlidersContainer>

    )
}
export default Slider