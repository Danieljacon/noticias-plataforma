import { gql, useQuery } from "@apollo/client";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import AnimatedNewContent from "./AnimatedNewContent";
import RiseLoader from "react-spinners/RiseLoader";
import { GetNewBySlugResponse, NewProps } from "./types";
import Social from "./Social";

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
        social {
          ... on Social {
            id
            socialUrl
            title
            socialIcon {
              url
            }
          }
        }
      }
    }
  }
`;

const NewsContent = (props: NewProps) => {
  const { data } = useQuery<GetNewBySlugResponse>(GET_NEW_BY_SLUG_QUERY, {
    variables: {
      slug: props.newSlug,
    },
  });

  if (!data?.notice) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RiseLoader size={25} color={"white"} />
      </div>
    );
  }

  return (
    <AnimatedNewContent>
      <Player>
        <Youtube videoId={data.notice.videoId} />
        <DefaultUi />
      </Player>

      <div className="p-11 flex flex-col gap-2">
        <div className="flex gap-7">
          <h1 className="max-w-[220px] text-2xl font-bold">
            {data.notice.title}
          </h1>

          <div className="flex flex-col gap-4 items-start">
            <div className="flex gap-2">
              <img
                src={data.notice.writer.avatarUrl}
                alt=""
                className=" object-cover w-14 h-14 border-4 border-gray-900 rounded-full outline outline-1 outline-gray-400"
              />
              <div className="flex flex-col justify-center min-w-fit">
                <span className="text-2xl font-bold">
                  {data.notice.writer.name}
                </span>
                <span className="text-sm text-gray-200">
                  {data.notice.writer.bio}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              {
                data.notice.writer.social.map((social) => {
                  return (
                    <Social
                    key={social.id}
                    icon={social.socialIcon.url}
                    url={social.socialUrl}
                    title={social.title}
                  />
                  )
                })
              }
              {/* <Social
                icon={<LinkedinLogo size={28} color="#fcfcfc" weight="bold" />}
                title={data.notice.writer.social[1].title}
              /> */}
              {/* <Social
                icon={<GithubLogo size={28} color="#fcfcfc" weight="bold" />}
                title="Github"
              /> */}
            </div>
          </div>
        </div>

        <p className="text-base text-gray-200">{data.notice.description}</p>
      </div>
    </AnimatedNewContent>
  );
};

export default NewsContent;
