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

export type TCommentAuthorHeadingProps = {
  image?: string;
  name: string;
  date: Date;
  isAuthor: boolean;
  onDeleteClick?: React.MouseEventHandler<SVGSVGElement>;
};
