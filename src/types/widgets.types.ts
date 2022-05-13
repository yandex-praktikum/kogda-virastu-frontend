import React from 'react';

export type TAuthorHeadingProps = {
  image?: string;
  name: string;
  date: Date;
  isAuthor: boolean;
  isLiked: boolean;
  likesCount: number;
  onDeleteClick?: React.MouseEventHandler<SVGSVGElement>;
  onLikeClick: React.MouseEventHandler<SVGSVGElement>;
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
