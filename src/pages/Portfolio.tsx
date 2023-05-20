import { useRef } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  //   const handleClick = () => {
  //     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  const handleClick = (page: string) => {
    console.log("clicked");
    switch (page) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });

        break;
      case "project":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header onClick={handleClick} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Portfolio;
