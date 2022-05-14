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
