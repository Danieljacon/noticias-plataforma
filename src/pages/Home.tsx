import Header from "../components/Header";
import News from "../components/News";
import NewsContent from "../components/NewsContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(false);
  }, [slug]);

  return (
    <main className="max-w-[1390px] m-auto">
      <div className="flex min-h-screen bg-gray-50">
        {isOpen ? (
          <div className="bg-gray-50 z-40 absolute max-w-full flex-1 md:flex flex-col px-[3rem] pb-[6.75rem] overflow-y-scroll max-h-screen">
            <Header />
            <News />
          </div>
        ) : (
          <div className="hidden max-w-full flex-1 md:flex flex-col px-[3.75rem] pb-[3.75rem] overflow-y-scroll max-h-screen">
            <Header />
            <News />
          </div>
        )}

        <main className="z-0 flex-1 max-w-full md:max-w-[622px] bg-gray-900 overflow-y-scroll max-h-screen">
          {slug ? (
            <NewsContent newSlug={slug} />
          ) : (
            <NewsContent newSlug="doutor-estranho-no-multiverso-da-loucura" />
          )}
        </main>
      </div>
      <div className="fixed z-50 bottom-0 md:hidden w-full">
        <button
          className="bg-gray-700 p-2 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Fechar notícias" : "Abrir notícias"}
        </button>
      </div>
    </main>
  );
};

export default Home;
