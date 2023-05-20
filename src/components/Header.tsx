// type ProptType = {
//   onClick: (page: string) => void;
// };

const Header = ({ onClick }: any) => {
  return (
    <div className="bg-black text-white flex justify-end gap-10 py-6 px-8 sticky top-0">
      <a
        onClick={() => onClick("home")}
        className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
      >
        HOME
      </a>
      <a
        onClick={() => onClick("about")}
        className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
      >
        ABOUT
      </a>
      <a
        onClick={() => onClick("project")}
        className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
      >
        PROJECTS
      </a>
      <a
        onClick={() => onClick("contact")}
        className="cursor-pointer active:underline active:underline-offset-8 active:decoration-[#B24BF3]"
      >
        CONTACT
      </a>
    </div>
  );
};

export default Header;
