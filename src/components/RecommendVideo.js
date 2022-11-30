import React from "react";
import { MdVerified } from "react-icons/md";

const RecommendVideo = ({ thumbnail, title, channel, views, uploadTime }) => {
  return (
    <div className="text-yt-white flex cursor-pointer">
      <img
        src={thumbnail}
        alt=""
        className="h-32 w-52 rounded-2xl object-contain"
      />
      <div className="pl-2">
        <h2 className="text-sm font-medium">
          {title.length <= 70 ? title : `${title.substr(0, 60)}...`}
        </h2>
        <p className="text-xs text-yt-gray pt-2 flex items-center">
          {channel}
          <span className="p-1">
            <MdVerified />
          </span>
        </p>
        <div className="flex">
          <p className="text-xs text-yt-gray pr-1">{views} views</p>
          <p className="text-xs text-yt-gray pr-1">{uploadTime}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideo;
