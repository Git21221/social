import React, { useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import Rightbar from "../../components/RightBar/Rightbar.jsx";
import "./Home.css";
import NewPost from "../../components/newPost/NewPost.jsx";
import Post from "../../components/post/Post.jsx";
import { useSelector } from "react-redux";
import Story from "../../components/story/Story.jsx";

const Home = () => {
  const { isStoryOpened, storyId } = useSelector((state) => state.story);
  if (!isStoryOpened)
    return (
      <>
        <div className="homepage flex flex-row flex-1 justify-around pl-28">
          <div className="feed w-full bg-neutral-200 h-screen">
            <SearchBar />
            <div className="posts">
              <NewPost />
              <Post />
            </div>
          </div>
        </div>
        <Rightbar />
      </>
    );
  else
    return (
      <>
        <Story index={storyId}/>
        <Rightbar />
      </>
    );
};

export default Home;
