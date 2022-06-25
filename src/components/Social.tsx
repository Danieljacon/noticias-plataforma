interface Props {
    icon: React.ReactNode;
    title: string;
    url?: string;
}

const Social = (props: Props) => {
  return (
    <a href={props.url} className="flex items-center  text-gray-900 font-bold gap-1">
      <div className="w-11 h-11 bg-gray-900 rounded-[4px] flex justify-center items-center">
        {props.icon}
      </div>
      {props.title}
    </a>
  );
};

export default Social;
