interface Props {
  title: string;
  date: string;
  author: string;
  image: string;
  url?: string;
}

const TopicMostRead = (props: Props) => {
  return (
    <a
      href={props.url}
      style={{
        backgroundImage: props.image,
      }}
      className={`bg-gray-400 rounded-lg min-h-[289px] flex flex-col p-8 justify-end shadow-gradientShadow bg-cover bg-no-repeat hover:pb-14 transition-all cursor-pointer`}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-gray-100 font-bold">{props.title}</h1>
        <div className="flex gap-6">
          <span>{props.date}</span>
          <span>{props.author}</span>
        </div>
      </div>
    </a>
  );
};

export default TopicMostRead;
