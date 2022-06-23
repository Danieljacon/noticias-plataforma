import Header from "../components/Header";
import NewsContent from "../components/NewsContent";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col px-[3.75rem] pb-[3.75rem]">
        <Header />
        <main className="">News</main>
      </div>
      <main className="flex-1 max-w-[622px] bg-gray-900">
        <NewsContent />
      </main>
    </div>
  );
};

export default Home;
