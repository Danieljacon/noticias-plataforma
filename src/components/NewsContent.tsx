import { gql, useQuery } from "@apollo/client";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { useParams } from "react-router-dom";

const GET_NEW_BY_SLUG_QUERY = gql`
  query GetNewBySlug($slug: String) {
    notice(where: { slug: $slug }) {
      id
      title
      videoId
      description
      writer {
        avatarUrl
        bio
        name
      }
    }
  }
`;

interface GetNewBySlugResponse {
  notice: {
    id: string;
    title: string;
    videoId: string;
    description: string;
    writer: {
      avatarUrl: string;
      bio: string;
      name: string;
    };
  };
}

interface NewProps {
  newSlug: string;
}

const NewsContent = (props: NewProps) => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  const { data } = useQuery<GetNewBySlugResponse>(GET_NEW_BY_SLUG_QUERY, {
    variables: {
      slug: slug,
    },
  });
  console.log(data?.notice);

  if(!data?.notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Player>
        <Youtube videoId={data.notice.videoId} />
        <DefaultUi />
      </Player>

      <div className="p-11 flex flex-col gap-2">
        <div className="flex gap-7">
          <h1 className="max-w-[220px] text-2xl font-bold">
            {data.notice.title}
          </h1>

          <div className="flex gap-2 items-start">
            <img
              src={data.notice.writer.avatarUrl}
              alt=""
              className="w-14 h-14 border-4 border-gray-900 rounded-full outline outline-1 outline-gray-400"
            />
            <div className="flex flex-col justify-center min-w-fit">
              <span className="text-2xl font-bold">{data.notice.writer.name}</span>
              <span className="text-sm text-gray-200">
                {data.notice.writer.bio}
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
