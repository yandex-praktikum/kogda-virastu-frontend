import React, { FC } from "react";
import { TComment } from "../../types/types";
import Comment from "../../components/Article/Comment";
import { TAuthor } from "../../services/types";

const CommentList: FC<{
  comments: [comment: TComment];
  currentUser: TAuthor;
  slug: string;
}> = (props) => {
  1;
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <Comment
            comment={comment}
            currentUser={props.currentUser}
            slug={props.slug}
            key={comment.id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
