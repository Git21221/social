import React from "react";
import Input from "../Input/Input";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";


function NewPost() {
  return (
    <>
    <div className="addPostBox bg-neutral-50 h-[150px] w-auto p-5 m-5 rounded-2xl flex flex-col justify-between">
      <div className="inputAndImg flex items-center">
        <div className="image flex-none w-10 h-10 bg-neutral-400 rounded-xl"></div>
        <Input
          placeholder="What are you thinking?"
          className="bg-transparent focus:outline-none"
        />
      </div>
      <div className="additionalOptions flex items-center justify-between">
        <div className="options flex gap-2 text-neutral-400">
          <div className="camera bg-neutral-100 p-2 rounded-xl"><CameraAltRoundedIcon/></div>
          <div className="video bg-neutral-100 p-2 rounded-xl"><VideocamRoundedIcon/></div>
          <div className="addMore bg-neutral-100 p-2 rounded-xl"><AddRoundedIcon/></div>
        </div>
        <div className="share bg-indigo-500 text-white px-4 py-2 rounded-xl">share <KeyboardArrowRightRoundedIcon/></div>
      </div>
    </div>
    </>
  );
}

export default NewPost;
