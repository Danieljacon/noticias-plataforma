import { GithubLogo, LinkedinLogo } from "phosphor-react";
import logo_danielJacon from "../assets/logo_daniel-jacon.svg";
import Social from "./Social";

const Header = () => {
  return (
    <header className="flex pt-5 justify-between pb-5">
      <div className="flex gap-4">
        <Social
          icon={<LinkedinLogo size={28} color="#fcfcfc" weight="bold" />}
          title="Linkedin"
        />
        <Social
          icon={<GithubLogo size={28} color="#fcfcfc" weight="bold" />}
          title="Github"
        />
      </div>

      <img src={logo_danielJacon} alt="Logo Daniel Jacon" />
    </header>
  );
};

export default Header;
