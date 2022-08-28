import LikeIcon from "./LikeIcon";
import PencilIcon from "./PencilIcon";
import DeleteIcon from "./DeleteIcon";
import { StyledWrapper } from "./UrlCard.styled";
import React from "react";

// 임시로 추가해둠

interface Tag {
  id: number;
  name: string;
  createdAt: number;
}

interface Category {
  id: number;
  name: string;
  isPinned: boolean;
}

interface URL {
  id: number;
  url: string;
  title: string;
  memo?: string;
  imageUrl: string;
  isStarred: boolean;
  isWatched: boolean;
  createdAt: number;
  watchedAt: number;
  tags?: Tag[];
  category: Category;
}

interface Props extends URL {}

const UrlCard = ({
  url,
  imageUrl,
  isStarred,
  isWatched,
  tags,
  title,
  id,
}: Props) => {
  const handleUrlCardClick = () => {
    window.open(url);
  };
  return (
    <StyledWrapper onClick={handleUrlCardClick} isWatched={isWatched}>
      <div className="card-header">
        <img className="header-image" src={imageUrl} width="100%" height="80" />
      </div>

      <div className="card-body">
        <h1 className="body-title">{title}</h1>
        <h3 className="body-tag">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>{tag.name}</React.Fragment>
          ))}
        </h3>
      </div>

      <div className="card-footer">
        <h3 className="footer-url">{url}</h3>
        <div className="footer-icon-wrapper">
          <LikeIcon isLiked={isStarred} />
          <PencilIcon />
          <DeleteIcon />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default UrlCard;
