import TopicMostRead from "./TopicMostRead";
import Slider from "react-slick";
import LastNews from "./LastNews";

const News = () => {
  var settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <span className="text-4xl font-bold text-gray-900">
          Tópico mais lido
        </span>

        <TopicMostRead
          title="Doutor Estranho no Multiverso da Loucura: Wanda é incrível"
          author="Daniel Jacon"
          image={
            "bg-[url('https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/nc829_doctor_strange__23agk31-1210x544.jpg')]"
          }
          date="12 de Junho"
        />
      </section>

      <section className="max-w-[615px] flex flex-col gap-4">
        <span className="text-2xl font-bold text-gray-900">
          Últimas notícias
        </span>
        <div className="flex flex-col">
          <Slider {...settings}>
            <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
            <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
            <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
                        <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
                        <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
                        <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
                        <LastNews
              title="News Title Lorem Ipsum Dolor Sit Amet"
              author="Maria Joaquina"
              image="https://dimensaosete.com.br/static/c725e19b3ebbff8236035ee16e6e1fc4/8a681/luffy-transformacoes.webp"
              date="13 de Junho"
            />
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default News;
