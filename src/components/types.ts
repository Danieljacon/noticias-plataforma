// GraphCMS //
export interface GetNewBySlugResponse {
  notice: {
    id: string;
    title: string;
    videoId: string;
    description: string;
    writer: {
      avatarUrl: string;
      bio: string;
      name: string;
      social: {
        id: string;
        socialUrl: string;
        title: string;
        socialIcon: {
          url: string
        }
      }[];
    };
  };
}

export interface GetNewsQuery {
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
// GraphCMS //

export interface NewProps {
  newSlug: string;
}

export interface LastNewsProps {
  title: string;
  date: string;
  author: string;
  image?: string;
  url?: string;
}

export interface AnimatedNewContentProps {
  children: React.ReactNode;
}

export interface SocialProps {
  icon: string;
  title: string;
  url?: string;
}

export interface TopicMostReadProps {
  title: string;
  date: string;
  author: string;
  image: string;
  url?: string;
}
