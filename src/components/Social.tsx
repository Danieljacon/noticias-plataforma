import { SocialProps } from "./types";

const Social = (props: SocialProps) => {
  return (
    <a
      href={props.url}
      className="flex items-center  text-gray-100 font-bold gap-1"
    >
      <div className="flex justify-center items-center">
        <span>
          <img src={props.icon} className="w-6 h-6"/>
        </span>
      </div>
      {props.title}
    </a>
  );
};

export default Social;
