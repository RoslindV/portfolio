import React from "react";
import { GitHub, LinkedIn } from "../assets/icons";

const Contact = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      ref={ref}
      className="h-[500px] bg-[#252525] text-white flex flex-col items-center"
    >
      <p className="pt-[110px] text-[25px] ">CONTACT</p>
      <p className="font-medium text-[36px] text-[#B24BF3] pt-[50px]">
        Let's Talk
      </p>
      <p className="pt-[20px]">
        Want to create something together? I would love to hear from you. Here's
        how you can contact me
      </p>
      <div className="flex gap-5 p-10">
        <a
          href="https://www.linkedin.com/in/roslind-vasantha-997764197/"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/RoslindV" target="_blank">
          <GitHub />
        </a>
      </div>
    </div>
  );
});

export default Contact;
