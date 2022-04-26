import { FC } from "react";

const TagFilterTab : FC<{tag: string}> = ({tag}) => {

  return (
    tag
     ?
      <li className="nav-item">
        <a href="" className="nav-link active">
          <i className="ion-pound"></i> {tag}
        </a>
      </li>
    :
      null
  );
};

export default TagFilterTab;