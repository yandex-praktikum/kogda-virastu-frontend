import React from 'react';

export type TAuthorHeadingProps = {
  image?: string;
  name: string;
  date: string
  isAuthor: boolean;
  isLiked: boolean;
  likesCount: number;
  onDeleteClick?: React.MouseEventHandler<SVGSVGElement>;
  onLikeClick: React.MouseEventHandler<SVGSVGElement>;
};

export type TCommentAuthorHeadingProps = {
  image?: string;
  name: string;
  date: Date;
  isAuthor: boolean;
  onDeleteClick?: React.MouseEventHandler<SVGSVGElement>;
};

export type TBriefPostAnnounceProps = {
  image?: string;
  name: string;
  title: string;
  date: Date;
  isLiked: boolean;
  likesCount: number;
  onLikeClick: React.MouseEventHandler<SVGSVGElement>;
};

export type TTopAnnounceWidgetProps = {
  caption: string;
};

export type TAuthorProps = {
  userName: string,
  createAt: Date,
  imageSrc?: string,
};

export type TCommentInputProps = TAuthorProps & {
  onChangeArea(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  disabledButton?: boolean | undefined;
};

interface IGenericVoidHandler {
  () : void;
}

export type TModalProps = {
  onClose: IGenericVoidHandler;
  onSubmit: IGenericVoidHandler;
};
