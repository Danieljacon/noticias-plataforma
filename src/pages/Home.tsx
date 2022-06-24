import Header from "../components/Header";
import News from "../components/News";
import NewsContent from "../components/NewsContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col px-[3.75rem] pb-[3.75rem]">
        <Header />
        <News />
      </div>
      <main className="flex-1 max-w-[622px] bg-gray-900">
        <NewsContent />
      </main>
    </div>
  );
};

export default Home;
