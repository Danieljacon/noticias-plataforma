import TopicMostRead from "./TopicMostRead";
import Slider from "react-slick";
import LastNews from "./LastNews";
import { gql, useQuery } from "@apollo/client";

const GET_NEWS = gql`
  query MyQuery {
    notices(orderBy: id_DESC) {
      id
      postedAt
      title
      slug
      writer {
        name
      }
      image {
        url
      }
    }
  }
`;

interface GetNewsQuery {
  notices: {
    id: string;
    postedAt: string;
    title: string;
    slug: string;
    writer: {
      name: string;
    };
    image: {
      url: string;
    };
  }[];
}

const News = () => {
  let settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const { data } = useQuery<GetNewsQuery>(GET_NEWS);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <span className="text-4xl font-bold text-gray-900">
          Tópico mais lido
        </span>

        <TopicMostRead
          url={data?.notices[0].slug}
          title={data?.notices[0].title}
          author={data?.notices[0].writer.name}
          image={`url('${data.notices[0].image.url}`}
          date={data?.notices[0].postedAt}
        />
      </section>

      <section className="max-w-[615px] flex flex-col gap-4">
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
                  date={notice.postedAt}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default News;
