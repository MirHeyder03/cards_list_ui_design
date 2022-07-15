import React from "react";
import "./card.scss";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
export default function Cards({ api, toogleBookMark }) {
  return (
    <div className="api-item">
      <div className="api-icon">
        <img src={api.icon} />
      </div>
      <div className="item-detail">
        <h4>{api.name}</h4>
        <div className="item-category">{api.category}</div>
        <div className="item-description">{api.description}</div>
      </div>
      <div className="item-hover">
        <button onClick={() => toogleBookMark(api.id)}>
          {api.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
        </button>
        <a href="#">
          API Docs <RiArrowRightSLine />
        </a>
      </div>
    </div>
  );
}
