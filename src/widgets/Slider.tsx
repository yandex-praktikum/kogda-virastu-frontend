import BuletSlider from '../ui-lib/buledSlider';
import styled, { useTheme } from 'styled-components';
import React, { FC, useState, } from 'react';
import { useSelector } from '../services/hooks';

const SlideContainer = styled.div`
display: flex;
justify-content:center;
`
const SlidersContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 280px;
`
type TSlide = () => {
    data: any;
    name: number;
    page: number;
}
const Slide = ({ data, name, page }:any) => {

    if (page === name) {
        return (<SlideContainer>
            {data}
        </SlideContainer>)
    }
    else return null
}
const BuletBar = styled.div`
        display: flex;
        gap:12px;
        padding-top:16px;
        @media screen and (min-width:320px)  {
            display:flex
        }
    `

export const Slider = ({ TestArray }: any) => {
    const range = [];
    for (let i = 0; i < 5; ++i) {
        range.push(i);
    }
    const post = useSelector((state) => state.view.topFeed);
    const [page, setPage] = useState<number>(0);
    const onClick = (page: number) => {
        setPage(page)
    }
    return (
        <SlidersContainer>
            {
                TestArray.map((test: any, index: number) => (
                    <Slide key={index} data={test} name={index} page={page} />
                ))
            }
            <BuletBar>{
                range.map(pageSlide => {
                    const isActive = pageSlide === page;
                    return (
                        <BuletSlider onClick={(e) => onClick(pageSlide)} isActive={isActive} />
                    )
                })
            }
            </BuletBar>
        </SlidersContainer>

    )
}
export default Slider