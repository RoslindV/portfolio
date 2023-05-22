import React from "react";

const About = React.forwardRef((props: any, ref: any) => {
  console.log(props);
  return (
    <div
      {...props}
      ref={ref}
      id="about"
      className="bg-[#252525] text-white flex flex-col items-center py-[90px]"
    >
      <p className="text-[25px] ">ABOUT</p>
      <p className="text-[35px] text-[#B24BF3] pt-[20px] text-center">
        ROSLIND VASANTHA
      </p>
      <p className="pt-[60px] px-5 text-center">
        Hi, I'm currently working as a front-end developer. I have 1 year
        experience as a full-stack developer. I have worked in healthcare,
        communication and industrial automation domains.
      </p>
      <span className="text-[20px] pt-[80px]">SKILLS</span>
      <div className="flex gap-20">
        <ul className="marker:text-[#B24BF3] list-disc pt-[30px]">
          <li className="pt-[10px]">HTML</li>
          <li className="pt-[10px]">CSS</li>
          <li className="pt-[10px]">JavaScript</li>
        </ul>
        <ul className="marker:text-[#B24BF3] list-disc pt-[30px]">
          <li className="pt-[10px]">React</li>
          <li className="pt-[10px]">NodeJS</li>
          <li className="pt-[10px]">MongoDB</li>
        </ul>
      </div>
    </div>
  );
});

export default About;
