import React from "react";

import Card from "../components/Card";

const projects = [
  {
    id: "1",
    title: "Sabhae",
    content:
      "Sabhae is an all-in-one collaboration tool that helps in online meetings, collaboration, and communication for teams",
  },
  {
    id: "2",
    title: "Accrepro",
    content:
      "AccrePro is an accreditation management solution specifically designed for healthcare institutions",
  },
  {
    id: "3",
    title: "Fidio",
    content: "Fidio is used for industrial automation and machine analytics",
  },
];

const Projects = React.forwardRef((props: any, ref: any) => {
  console.log(props);
  return (
    <div
      ref={ref}
      className="bg-black text-white flex flex-col items-center py-[90px]"
    >
      <span className=" text-[25px]">PROJECTS</span>
      <div className="flex justify-center gap-10 pt-[25px] flex-wrap">
        {projects.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
});

export default Projects;
