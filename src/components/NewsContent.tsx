import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";

const NewsContent = () => {
  return (
    <div>
      <Player>
        <Youtube videoId="76Iio61YVAs" />
        <DefaultUi />
      </Player>

      <div className="p-11 flex flex-col gap-2">
        <div className="flex gap-7">
          <h1 className="max-w-[220px] text-2xl font-bold">
            Doutor Estranho no Multiverso da Loucura: Wanda é incrível
          </h1>

          <div className="flex gap-2 items-start">
            <img
              src="https://github.com/Danieljacon.png"
              alt=""
              className="w-14 h-14 border-4 border-gray-900 rounded-full outline outline-1 outline-gray-400"
            />
            <div className="flex flex-col justify-center min-w-fit">
              <span className="text-2xl font-bold">Daniel Jacon</span>
              <span className="text-sm text-gray-200">
                Desenvolvedor em Jobspace
              </span>
            </div>
          </div>
        </div>

        <p className="text-base text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          commodo, felis vitae eleifend condimentum, dolor turpis aliquet
          lectus, sed molestie purus mi accumsan nisl. Vestibulum vitae tellus
          suscipit felis malesuada pulvinar. Sed imperdiet, est vel.
        </p>
      </div>
    </div>
  );
};

export default NewsContent;
