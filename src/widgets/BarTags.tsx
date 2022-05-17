import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from '../services/hooks';
import { uid } from '../services/helpers/uid';

import Tag from './tag';

type TBarTags = {
  tagList: string[],
};

type TLists = {
  // eslint-disable-next-line react/require-default-props
  isHasImage?: boolean,
  // eslint-disable-next-line react/require-default-props
  rowReverse?: boolean;
};

const Lists = styled.ul<TLists>`
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
    gap: 4px 24px;
    //width:526px;
    white-space: pre-line;
    padding:0;
    @media screen and (max-width:768px) {
        max-width:453px;
        ${({ isHasImage }) => isHasImage && 'margin-left: -60px'}
     }
     @media screen and (max-width:600px) {
        max-width:352px;
        margin:0;
        
        flex-direction: row;
     }
`;
const List = styled.li`
    list-style-type: none;
`;

const BarTags: FC<TBarTags & TLists> = ({ tagList, isHasImage = false, rowReverse = false }) => {
  const { tag: activeTag } = useSelector((state) => state.view);
  return (
    <Lists isHasImage={isHasImage} rowReverse={rowReverse}>
      {tagList.map((tag) => (
        <List key={uid()}>
          <Tag tag={tag} isActive={tag === activeTag} />
        </List>
      ))}
    </Lists>
  );
};
export default BarTags;
