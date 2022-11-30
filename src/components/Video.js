import React from "react";
import { MdVerified } from "react-icons/md";

const Video = ({
  thumbnail,
  duration,
  title,
  channel,
  views,
  uploadTime,
  logo,
}) => {
  return (
    <div className="flex flex-col max-w-[260px] cursor-pointer">
      <div className="relative w-full">
        <img
          src={thumbnail}
          alt=""
          className="h-full w-full overflow-hidden rounded-2xl"
        />
        <p className="absolute right-2 top-[85%] px-1 text-xs bg-yt-black text-yt-white rounded">
          {duration}
        </p>
      </div>
      <div className="flex mt-3">
        <img src={logo} alt="" className="h-9 w-9 rounded-full" />
        <div className="ml-2">
          <h2 className="font-medium text-yt-white text-sm mt-0 mb-0 items-center">
            {title.length <= 50 ? title : `${title.substr(0, 50)}...`}
          </h2>
          <h3 className="text-yt-gray text-xs mt-1 flex items-center">
            {channel}
            <span className="p-1">
              <MdVerified />
            </span>
          </h3>
          <p className="text-yt-gray m-0 font-medium text-xs">
            {views} Views • {uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
