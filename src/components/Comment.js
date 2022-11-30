import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = ({ name, uploaded, image, comment }) => {
  return (
    <div className="flex flex-row mb-3">
      <img src={image} alt="profile" className="w-12 h-12 rounded-full mr-3" />
      <div>
        <div className="flex items-center">
          <p className="text-sm font-medium pr-2">{name}</p>
          <p className="text-xs text-yt-gray">
            {new Date(uploaded?.toDate()).toString().slice(0, 25)}
          </p>
        </div>
        <p className="text-base pt-2">{comment}</p>
        <div className="flex py-3 justify-between w-36">
          <div className="flex">
            <BiLike size={24} className="cursor-pointer" />
            <p className="text-sm px-2 text-yt-gray">24</p>
          </div>
          <BiDislike size={23} className="cursor-pointer" />
          <p className="text-sm">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
