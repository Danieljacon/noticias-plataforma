import { GithubLogo, LinkedinLogo } from "phosphor-react";
import logo_danielJacon from "../assets/logo_daniel-jacon.svg";

const Header = () => {
  return (
    <header className="flex pt-5 justify-between pb-4">
      <div className="flex gap-4">
        <a href="" className="flex items-center  text-gray-900 font-bold">
          <div className="w-11 h-11 bg-gray-900 rounded-[4px] flex justify-center items-center">
            <LinkedinLogo size={28} color="#fcfcfc" weight="bold" />
          </div>
          Linkedin
        </a>

        <a href="" className="flex items-center  text-gray-900 font-bold">
          <div className="w-11 h-11 bg-gray-900 rounded-[4px] flex justify-center items-center">
            <GithubLogo size={28} color="#fcfcfc" weight="bold" />
          </div>
          Github
        </a>
      </div>

      <img src={logo_danielJacon} alt="Logo Daniel Jacon" />
    </header>
  );
};

export default Header;
