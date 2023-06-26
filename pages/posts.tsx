import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  posts: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        _id: string;
      };
      alt: string;
    };
  }[];
};

const PostsPage = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/post/${post.slug.current}`} key={post._id}>
          <p>
            <h2>{post.title}</h2>
          </p>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  `);

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
