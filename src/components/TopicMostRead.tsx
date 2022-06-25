import { Link } from "react-router-dom";
import { TopicMostReadProps } from "./types";

const TopicMostRead = (props: TopicMostReadProps) => {
  return (
    <Link
      to={`/news/${props.url}`}
      style={{
        backgroundImage: props.image,
      }}
      className={`bg-gray-400 bg-center rounded-lg min-h-[289px] flex flex-col p-8 justify-end shadow-gradientShadow bg-cover bg-no-repeat hover:pb-14 transition-all cursor-pointer`}
    >
      <div className="flex flex-col gap-3">
        <h1 className=" text-lg md:text-2xl text-gray-100 font-bold">{props.title}</h1>
        <div className="flex gap-6">
          <span>{props.date}</span>
          <span>{props.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default TopicMostRead;
