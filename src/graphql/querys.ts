import { gql } from "@apollo/client";

export const GET_NEW_BY_SLUG_QUERY = gql`
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

export const GET_NEWS = gql`
  query MyQuery {
    notices(orderBy: postedAt_DESC) {
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
