import React, { useRef, useState } from "react";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Rightbar.css";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { useDispatch, useSelector } from "react-redux";
import { isStoryOpen } from "../../features/storySlice";

function Rightbar() {
  const storyPeopleRef = useRef();

  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(true);

  const [dragState, setDragState] = useState({
    dragging: false,
    dragStartX: 0,
    scrollLeftStart: 0,
  });

  const handleStoryClick = (id) => {
    dispatch(isStoryOpen({isStoryOpened: true, storyId: id}));
  }

  const repeatFollow = [],
    repeatTopics = [],
    repeatStory = [];
  for (let index = 1; index <= 10; index++) {
    repeatTopics.push(
      <div key={index} className="topics flex justify-between items-center">
        <div className="topicNameAndTrendNo flex items-center justify-center gap-4">
          <div className="trendNo bg-emerald-500 h-10 w-10 rounded-xl flex justify-center items-center">
            #{index}
          </div>
          <div className="topicName">Made in India</div>
        </div>
        <div className="tick bg-neutral-400 h-10 w-10 flex items-center justify-center rounded-xl">
          <DownloadDoneRoundedIcon />
        </div>
      </div>
    );
    repeatFollow.push(
      <div
        key={index}
        className="followPeople text-nowrap flex items-center justify-between text-inherit"
      >
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
    repeatStory.push(
      <div key={index} className="bg-neutral-400 w-10 h-10 rounded-xl flex items-center justify-center" onClick={() => handleStoryClick(index)}>{index}</div>
    );
  }

  function handleDrag(e) {
    if (!dragState.dragging) return;
    console.log("handleDrag");
    const delta = e.clientX - dragState.dragStartX;
    storyPeopleRef.current.scrollLeft = dragState.scrollLeftStart - delta;
  }

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

  const handleClick = (e) => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <div
        className={`side lg:relative md:relative sm:fixed fixed right-0 overflow-auto w-[300px] h-screen bg-stone-700 text-white flex flex-col gap-10 p-4 ${!isOpened ? "custom" : ""}`}
      >
        <div
          className={`bar ${!isOpened ? "custom-bar" : ""}`}
          onClick={handleClick}
        ></div>
        <div className="people">
          <div className="image h-10 w-10 rounded-xl bg-neutral-400"></div>
        </div>
        <div className="featuredStories flex flex-col gap-4">
          <div className="heading text-lg text-nowrap">Featured Stories</div>
          <div
            className="featuredStories overflow-hidden"
            ref={storyPeopleRef}
            onMouseDown={startDrag}
            onMouseMove={handleDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={startDrag}
            onTouchMove={handleDrag}
            onTouchEnd={endDrag}
            onTouchCancel={endDrag}
          >
            <div className="storyPeople inline-flex gap-4">{repeatStory}</div>
          </div>
        </div>
        <div className="follow flex flex-col gap-4">
          <div className="heading text-inherit text-lg text-nowrap">
            Who to Follow
          </div>
          {repeatFollow}
          <div className="more uppercase flex gap-1 items-center text-xs text-stone-400 text-nowrap">
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
}

export default Rightbar;
