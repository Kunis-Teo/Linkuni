import LikeIcon from "./LikeIcon";
import PencilIcon from "./PencilIcon";
import DeleteIcon from "./DeleteIcon";

import { StyledWrapper } from "./UrlCard.styled";

const UrlCard = () => {
  return (
    <StyledWrapper>
      <div className="card-header">
        <div className="header-image"></div>
      </div>
      <div className="card-body">
        <h1 className="body-title">타이틀</h1>
        <h3 className="body-tag">#태그</h3>
      </div>
      <div className="card-footer">
        <h3 className="footer-url">www.URL.com</h3>
        <div className="footer-icon-wrapper">
          <LikeIcon isLiked={false} />
          <PencilIcon />
          <DeleteIcon />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default UrlCard;
