import React from "react";
import { useDispatch } from "react-redux";
import { isStoryOpen } from "../../features/storySlice";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Input from "../Input/Input";
import '../searchbar/Searchbar.css'

function Story({ index }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="storyPage flex flex-col flex-1 gap-4 pl-28 bg-neutral-200 items-center justify-center">
        <div className="story w-min p-5 m-5 bg-neutral-50 rounded-2xl flex flex-col gap-4">
          <div className="backAndName flex justify-between items-center">
            <div
              className="back text-white bg-neutral-400 px-4 py-2 rounded-xl flex items-center hover:cursor-pointer"
              onClick={() => dispatch(isStoryOpen({ isStoryOpened: false }))}
            >
              <ChevronLeftRoundedIcon/>Back
            </div>
            <div className="name flex items-center gap-2">
              <div className="textname font-bold text-neutral-600">Saikat Das</div>
              <div className="image bg-neutral-400 w-10 h-10 rounded-xl"></div>
            </div>
          </div>
          <div className="slider flex items-center justify-center gap-4 text-neutral-400">
            <div className="leftSlide transition-all h-10 w-10 flex items-center justify-center rounded-full hover:bg-neutral-400 hover:text-white">
              <ArrowBackIosNewRoundedIcon />
            </div>
            <div className="story h-96 w-96 bg-neutral-400 flex items-center justify-center rounded-xl text-white">
              {index}
            </div>
            <div className="rightSlide transition-all h-10 w-10 flex items-center justify-center rounded-full hover:bg-neutral-400 hover:text-white">
              <ArrowForwardIosRoundedIcon />
            </div>
          </div>
          <div className="comment flex items-center justify-center w-auto text-neutral-400 border px-2 rounded-lg">
            <div className="searchbar">
              <Input
                placeholder="Write a comment..."
                className="text-black bg-transparent focus:outline-none"
              />
            </div>
            <div className="reaction flex items-center gap-2">
              <div className="send">
                <SendRoundedIcon />
              </div>
              <div className="emoji">
                <SentimentSatisfiedRoundedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
