import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function PassRec() {
  return (
    <>
      <div className="box flex bg-[url(/background.jpg)] bg-no-repeat bg-cover bg-center h-screen w-full">
        <div className="layer flex flex-col items-center lg:items-start md:items-center">
          <div className="logo">
            <img src="/logo.jpg" alt="" srcset="" className="w-10" />
          </div>

          <div className="form flex flex-col justify-center gap-10 h-full w-min p-5 text-white">
            <div className="forms flex flex-col gap-4">
              <div className="text flex flex-col gap-3">
                <h2 className="uppercase text-gray-300 text-sm">
                  take no worries
                </h2>
                <h2 className="cna font-bold text-3xl sm: md:text-4xl lg:text-5xl text-nowrap ">
                  Password Recovery
                </h2>
                <h3 className="text-gray-400 text-sm">
                  Already A member?{" "}
                  <Link className="text-blue-500" to="/login">
                    Log in
                  </Link>
                </h3>
              </div>
              <p className="font-bold">Email</p>
              <Input className="focus:border focus:outline-none focus:border-[#6366F1]"/>
              <div className="buttons flex gap-4 justify-between">
                <Button
                  content="Change method"
                  className="bg-gray-500 text-nowrap"
                />
                <Button
                  content="Recover Password"
                  className="bg-blue-500 text-white text-nowrap font-normal"
                />
              </div>
              {/* <h3>Or connect with socials</h3>
              <div className="connection">
                <Button content="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassRec;
