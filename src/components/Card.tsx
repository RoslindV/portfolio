type CardType = {
  title?: string;
  content?: string;
};

const Card = (props: CardType) => {
  const { title, content } = props;
  return (
    <div className="h-[380px] w-[275px] bg-[#252525] rounded-[20px] flex flex-col items-center p-[30px]">
      <p className="text-[#B24BF3]">{title}</p>
      <p className="pt-[80px]">{content}</p>
    </div>
  );
};

export default Card;
