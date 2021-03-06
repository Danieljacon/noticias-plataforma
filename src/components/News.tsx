import TopicMostRead from "./TopicMostRead";
import Slider from "react-slick";
import LastNews from "./LastNews";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import RiseLoader from "react-spinners/RiseLoader";
import { GetNewsQuery } from "./types";
import AnimatedNewContent from "./AnimatedNewContent";
import { GET_NEWS } from "../graphql/querys";

const News = () => {
  let settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const { data } = useQuery<GetNewsQuery>(GET_NEWS);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen">
        <RiseLoader size={25} />
      </div>
    );
  else
    return (
      <AnimatedNewContent>
        <div className="flex flex-col gap-8 max-w-[615px]">
          <section className="flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold text-gray-900">
              Tópico mais lido
            </span>

            <TopicMostRead
              url={data?.notices[0].slug}
              title={data?.notices[0].title}
              author={data?.notices[0].writer.name}
              image={`url('${data.notices[0].image.url}`}
              date={format(new Date(data.notices[0].postedAt), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            />
          </section>

          <section className="flex flex-col gap-4">
            <span className="text-2xl font-bold text-gray-900">
              Últimas notícias
            </span>
            <div className="flex flex-col">
              <Slider {...settings}>
                {data.notices.map((notice) => {
                  return (
                    <LastNews
                      key={notice.id}
                      url={notice.slug}
                      title={notice.title}
                      author={notice.writer.name}
                      image={notice.image.url}
                      date={format(new Date(notice.postedAt), "dd 'de' MMMM", {
                        locale: ptBR,
                      })}
                    />
                  );
                })}
              </Slider>
            </div>
          </section>
        </div>
      </AnimatedNewContent>
    );
};

export default News;
