import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button.jsx";
import Input from "../components/Input/Input.jsx";
import SearchBar from "../components/searchbar/SearchBar.jsx";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";

const Home = () => {
  const storyPeopleRef = useRef();
  const [dragState, setDragState] = useState({
    dragging: false,
    dragStartX: 0,
    scrollLeftStart: 0,
  });

  const repeatFollow = [],
    repeatTopics = [];
  for (let index = 0; index < 5; index++) {
    repeatTopics.push(
      <div key={index} className="topics flex justify-between items-center">
        <div className="topicNameAndTrendNo flex items-center justify-center gap-4">
          <div className="trendNo bg-emerald-500 h-10 w-10 rounded-xl flex justify-center items-center">
            #1
          </div>
          <div className="topicName">Made in India</div>
        </div>
        <div className="tick bg-neutral-400 h-10 w-10 flex items-center justify-center rounded-xl">
          <DownloadDoneRoundedIcon />
        </div>
      </div>
    );
    repeatFollow.push(
      <div key={index} className="followPeople flex items-center justify-between text-inherit">
        <div className="people flex items-center gap-4">
          <div className="image bg-neutral-400 w-10 h-10 rounded-xl"></div>
          <div className="peopleNameAndDest">
            <div className="peopleName">Saikat Das</div>
            <div className="peopleDest text-xs font-thin">
              West Bengal, Kolkata
            </div>
          </div>
        </div>
        <div className="addPeople bg-indigo-500 p-3 rounded-xl">
          <PersonAddAlt1OutlinedIcon />
        </div>
      </div>
    );
  }

  const handleDrag = (e) => {
    if (!dragState.dragging) return;
    const delta = e.clientX - dragState.dragStartX;
    storyPeopleRef.current.scrollLeft = dragState.scrollLeftStart - delta;
  };

  const startDrag = (e) => {
    setDragState({
      dragging: true,
      dragStartX: e.clientX,
      scrollLeftStart: storyPeopleRef.current.scrollLeft,
    });
  };

  const endDrag = () => {
    setDragState({
      ...dragState,
      dragging: false,
    });
  };
  return (
    <>
      <div className="homepage flex flex-row flex-1 justify-around pl-28">
        <div className="feed w-full bg-neutral-200 h-screen">
          <SearchBar />
        </div>
      </div>
      <div className="side overflow-auto max-w-[300px] h-screen bg-stone-700 text-white flex flex-col gap-10 p-4">
        <div className="people">
          <div className="image h-10 w-12 rounded-xl bg-neutral-400"></div>
        </div>
        <div className="featuredStories flex flex-col gap-4">
          <div className="heading text-lg">Featured Stories</div>
          <div
            className="featuredStories overflow-hidden"
            ref={storyPeopleRef}
            onMouseDown={startDrag}
            onMouseMove={handleDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            <div className="storyPeople inline-flex gap-4">
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
              <div className="bg-neutral-400 w-10 h-10 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="follow flex flex-col gap-4">
          <div className="heading text-inherit text-lg">Who to Follow</div>
          {repeatFollow}
          <div className="more uppercase flex gap-1 items-center text-xs text-stone-400">
            see more <KeyboardArrowRightRoundedIcon />
          </div>
        </div>
        <div className="trendTopics flex flex-col gap-4">
          <div className="heeading text-lg">Trend Topics</div>
          {repeatTopics}
        </div>
      </div>
    </>
  );
};

export default Home;
