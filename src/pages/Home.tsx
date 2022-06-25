import Header from "../components/Header";
import News from "../components/News";
import NewsContent from "../components/NewsContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";

const Home = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <main className="max-w-[1390px] m-auto">
      <div className="flex min-h-screen bg-gray-50">
        <div className="flex-1 flex flex-col px-[3.75rem] pb-[3.75rem] overflow-y-scroll max-h-screen">
          <Header />
          <News />
        </div>
        <main className="flex-1 max-w-[622px] bg-gray-900 overflow-y-scroll max-h-screen">
          {slug 
            ? <NewsContent newSlug={slug} /> 
            : <NewsContent newSlug="doutor-estranho-no-multiverso-da-loucura" />}
        </main>
      </div>
    </main>
  );
};

export default Home;
