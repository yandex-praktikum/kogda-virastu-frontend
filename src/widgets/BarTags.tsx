import React, { FC} from 'react';
import { useSelector } from '../services/hooks';
import styled from 'styled-components';
import Tag from './tag';
type TBarTags = {
    tagList: string[]
}
const Lists = styled.ul`
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    gap: 4px 24px;
    width:526px;
    @media screen and (max-width:768px) {
        max-width:453px;
     }
     @media screen and (max-width:320px) {
        max-width:352px;
     }
`
const List = styled.li`
    list-style-type: none;
`
export const BarTags:FC<TBarTags> = ({tagList}) => {
    const { tag: activeTag } = useSelector((state) => state.view)
    return(
        <Lists>
            {tagList.map((tag) => {
                return (
                    <List>
                    <Tag tag={tag}  isActive={tag === activeTag} />
                    </List>
                )
            })}
        </Lists>
    )
}
export default BarTags