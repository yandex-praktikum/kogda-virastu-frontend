import React, { FC, MouseEvent, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from '../services/hooks';
import { setTagsFollow } from '../store';
import Tag from './tag';
import addTagFollowThunk from '../thunks/add-tag-follow-thunk';
import deleteTagFollowThunk from '../thunks/delete-tag-follow-thunk';
import { RegularText } from '../ui-lib';

type TBarTags = {
  tagList: string[],
};

type TLists = {
  isHasImage?: boolean,
  rowReverse?: boolean;
};

const Lists = styled.ul<TLists>`
    margin: 0;
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    position: relative;
    /*
    flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
    */

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

Lists.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

const List = styled.li`
    list-style-type: none;
`;

const MessageContainer = styled.div`
  padding: 0 16px;
  height: 32px;
  background-color: rgba(10, 10, 11, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  position: absolute;
  top: -56px;
  left: calc(50% - 267px / 2);
`;

const BarTags: FC<TBarTags & TLists> = ({ tagList, isHasImage = false, rowReverse = false }) => {
  const { tagsFollow } = useSelector((state) => state.view);
  const dispatch = useDispatch();
  const pointer = !rowReverse;
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [tagName, setTagName] = useState('');

  const handleClickTag = (e: MouseEvent<HTMLButtonElement>, tag: string, isActive: boolean) => {
    e.preventDefault();
    if (pointer) {
      if (!isActive) {
        dispatch(addTagFollowThunk(tag));
        setVisible(true);
        setTagName(tag);
        setTimeout(() => setVisible(false), 2000);
        if (tagsFollow) {
          dispatch(setTagsFollow([...tagsFollow, tag]));
        } else {
          dispatch(setTagsFollow([tag]));
        }
      } else {
        dispatch(deleteTagFollowThunk(tag));
        dispatch(setTagsFollow(tagsFollow!.filter((el) => el !== tag)));
      }
    }
  };

  return (
    <Lists isHasImage={isHasImage} rowReverse={rowReverse}>
      {tagList.map((tag) => (
        <List key={nanoid(10)}>
          <Tag
            tag={tag}
            pointer={pointer}
            isShowIcon={false}
            isLocationArticle={pointer}
            isActive={!!tagsFollow?.includes(tag)}
            handleClick={handleClickTag} />
          {visible && (
            <MessageContainer>
              <RegularText
                size='medium'
                weight={500}
                color={theme.button.blue.font}
                sansSerif>
                Вы подписались на тег #
                {tagName}
              </RegularText>
            </MessageContainer>
          )}
        </List>
      ))}
    </Lists>
  );
};

BarTags.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

export default BarTags;
