import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

function Post() {
  return (
    <>
    <div className="post text-neutral-400 bg-neutral-50 p-5 m-5 rounded-xl flex flex-col gap-4 w-min">
      <div className="nameAndInfo flex justify-between items-center">
        <div className="imageAndname flex gap-2 items-center">
          <div className="image w-10 h-10 flex-none bg-neutral-400 rounded-xl"></div>
          <div className="nameAndTime flex flex-col justify-center">
            <div className="name font-bold text-black">Saikat Das</div>
            <div className="time text-sm text-neutral-400">4 min ago</div>
          </div>
        </div>
        <div className="moreInfo"><MoreVertIcon /></div>
      </div>
      <div className="captionWithPhoto flex flex-col gap-2">
        <div className="caption">Hii my name is saikat</div>
        <div className="image w-80 h-60 bg-neutral-400 rounded-xl"></div>
      </div>
      <div className="reaction flex justify-between items-center text-neutral-700">
        <div className="leftReaction flex gap-4">
          <div className="love flex items-center gap-1"><FavoriteBorderRoundedIcon/> 340K</div>
          <div className="comment flex items-center gap-1"><ChatBubbleOutlineRoundedIcon/> 9M</div>
          <div className="share flex items-center gap-1">Share <ShareRoundedIcon/></div>
        </div>
        <div className="save"><BookmarkBorderRoundedIcon/></div>
      </div>
    </div>
    </>
  );
}

export default Post;
