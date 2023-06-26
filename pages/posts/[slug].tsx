import React from 'react';
import { getPostBySlug} from '@/sanity/queries/getPostBySlug';
import { getAllSlugs} from '@/sanity/queries/getAllSlugs';
import { PortableText } from '@portabletext/react';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllSlugs();
  return {
    paths,
    fallback: false
  }
}

type Props = {
    post: {
        title: string
        description: string
        imageUrl: string
        alt: string
        body: any[]
    }
}

const Post = ({ post }: Props) => {
  return (
    <>
    <Navbar />
    <Layout>
    <div className="p-4 mt-20  text-gray-700">
      <h1 className="text-4xl font-semibold mb-6 text-center">{post.title}</h1>
      <img src={post.imageUrl} alt={post.alt} className="w-full h-64 object-cover mb-6"/>
      <div>
        <PortableText value={post.body}         

        />
      </div>
    </div>
    </Layout>
    </>
  )
}

export default Post;
