import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const ArticleCardConteiner = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        width: 453px;
    }

    @media screen and (max-width:320px) {
        width:280px;
    }

`;

const ArticleName = styled.h2`
 font-size: ${({ theme: { secondLevelHeading: { size } } }) => `${size}px`} ;
 font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
 line-height: ${({ theme: { secondLevelHeading: { height } } }) => `${height}px`} ;
 font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
 color: ${({ theme: { primaryText } }) => primaryText};
 @media screen and (max-width: 768px) {
    font-size: ${({ theme: { secondLevelHeadingMobile: { size } } }) => `${size}px`} ;
    font-family: ${({ theme: { secondLevelHeadingMobile: { family } } }) => family};
    line-height: ${({ theme: { secondLevelHeadingMobile: { height } } }) => `${height}px`} ;
    font-weight: ${({ theme: { secondLevelHeadingMobile: { weight } } }) => weight};
 }

`;

type TArticle = {

    image: string,
}


const ContentConteiner = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 16px;  
    .link {
        font-size: ${({ theme: { textSans: { size } } }) => `${size}px`} ;
        font-family: ${({ theme: { textSans: { family } } }) => family};
        line-height: ${({ theme: { textSans: { height } } }) => `${height}px`} ;
        font-weight: ${({ theme: { textSans: { weight } } }) => weight};
        color: ${(props) => props.theme.button.red.default};
        &:hover {
            color: ${(props) => props.theme.button.red.hover};
        } 
        &:active {
            color: ${(props) => props.theme.button.red.active};
        }

    }
`;



const ArticleImage = styled.img`
width: 159px;
height: 85px;


`;

const Article = styled.article<TArticle>`
font-size: ${({ theme: { text: { size } } }) => `${size}px`};
font-family: ${({ theme: { text: { family } } }) => family};
line-height: ${({ theme: { text: { height } } }) => `${height}px`};
font-weight: ${({ theme: { text: { weight } } }) => weight};
color: ${({ theme: { primaryText } }) => primaryText};
 ${(props => !props.image && `grid-column: 1/3`)};
@media screen and (max-width: 768px) {
    font-size: ${({ theme: { text: { size } } }) => `${size}px`};
    font-family: ${({ theme: { text: { family } } }) => family};
    line-height: ${({ theme: { text: { height } } }) => `${height}px`};
    font-weight: ${({ theme: { text: { weight } } }) => weight};
}

`;

type TArticleFullPreview = {
    article: string,
    articleName: string,
    image?: string,
}

export const ArticleFullPreview: FC<TArticleFullPreview> = ({ articleName, article, image = '' }) => {
    return (
        <ArticleCardConteiner>
            <ArticleName>{articleName}</ArticleName>
            <ContentConteiner >
                {image && <ArticleImage src={image} />}
                <Article image={image}>{article}</Article>
                <Link className="link" to='/aricle'>
                    <FormattedMessage id='articleEnter' />
                </Link>
            </ContentConteiner>
        </ArticleCardConteiner>
    )
}
