import React from "react";
import profileImage from "../assets/images/picture.jpeg";

const Home = React.forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} id="home" className="h-[700px] bg-black text-white">
      <div className="flex flex-col items-center pt-[100px]">
        <div className="w-[250px] h-[250px] rounded-[125px] overflow-hidden bg-[#C4C4C4]">
          <img src={profileImage} />
        </div>
        <span className="text-[#B24BF3] font-black text-[36px] mt-[25px]">
          Roslind Vasantha
        </span>
        <p className="mt-[5px]">I am a web developer</p>
      </div>
    </div>
  );
});
export default Home;
