// type ProptType = {
//   onClick: (page: string) => void;
// };
import { useState, useEffect } from "react";
import { Hamburger } from "../assets/icons";

const pages = [
  {
    id: "1",
    pageName: "HOME",
    refName: "home",
  },
  {
    id: "2",
    pageName: "ABOUT",
    refName: "about",
  },
  {
    id: "3",
    pageName: "PROJECTS",
    refName: "project",
  },
  {
    id: "1",
    pageName: "CONTACT",
    refName: "contact",
  },
];

const Header = ({ onClick }: any) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 36;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setToggle(false);
    }
  };

  return (
    <>
      <div
        onScroll={() => setToggle(false)}
        className="bg-black text-white xs:flex flex-col items-end p-2 sticky top-0 hidden xs:visible"
      >
        <div onClick={() => setToggle(!toggle)}>
          <Hamburger />
        </div>
        {toggle && (
          <div className="flex flex-col gap-3 items-end absolute top-16 bg-[#252525] p-2">
            {pages.map((page) => (
              <a
                onClick={() => {
                  onClick(page.refName);
                  setToggle(false);
                }}
                className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
              >
                {page.pageName}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="bg-black text-white flex justify-end gap-10 py-6 px-8 sticky top-0 xs:hidden">
        {pages.map((page) => (
          <a
            key={page.id}
            onClick={() => onClick(page.refName)}
            className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
          >
            {page.pageName}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
