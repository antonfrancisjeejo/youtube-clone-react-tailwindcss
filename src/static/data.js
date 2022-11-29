import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { MdVideoLibrary, MdOutlineLocalMovies } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlineClockCircle, AiOutlineBulb } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { HiSignal } from "react-icons/hi2";

export const SideBarItems = {
  Top: [
    { icon: <AiFillHome size={21} />, name: "Home" },
    { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
  ],
  Middle: [
    { icon: <MdVideoLibrary size={21} />, name: "Library" },
    { icon: <VscHistory size={21} />, name: "History" },
    { icon: <AiOutlinePlaySquare size={21} />, name: "Your videos" },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later" },
    { icon: <BiLike size={21} />, name: "Liked videos" },
  ],
  Explore: [
    { icon: <HiOutlineFire size={21} />, name: "Trending" },
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music" },
    { icon: <MdOutlineLocalMovies size={21} />, name: "Movies" },
    { icon: <HiSignal size={21} />, name: "Live" },
    { icon: <SiYoutubegaming size={21} />, name: "Gaming" },
    { icon: <BsNewspaper size={21} />, name: "News" },
    { icon: <CiTrophy size={23} />, name: "Sports" },
    { icon: <AiOutlineBulb size={21} />, name: "Learning" },
    { icon: <GiDress size={21} />, name: "Fasion & beauty" },
  ],
};

export const CategoryItems = [
  "All",
  "Music",
  "Mixes",
  "Silicon Valley",
  "T-Series",
  "Kollywood",
  "Tollywood",
  "Hollywood",
  "Sitcom",
  "Cricket",
  "Tech",
  "Gaming",
];
