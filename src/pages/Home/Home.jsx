import React, { useRef, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import Rightbar from "../../components/RightBar/Rightbar.jsx";

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = (e) => {
    setIsOpened(prev => !prev);
  }
  return (
    <>
      <div className="homepage flex flex-row flex-1 justify-around pl-28">
        <div className="feed w-full bg-neutral-200 h-screen">
          <SearchBar />
        </div>
        {/* <div className="bar" onClick={handleClick}></div> */}
      </div>
      <Rightbar />
    </>
  );
};

export default Home;