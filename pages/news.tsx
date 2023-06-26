import React from 'react';
import Link from 'next/link';
import { getAllPosts} from '@/sanity/queries/getAllPosts';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    },
    revalidate: 60,  // Re-generate the post every minute
  }
}


type Props = {
    posts: {
        title: string
        description: string
        imageUrl: string
        alt: string
        slug: string
        _id: string
    }[]
}

const Blog = ({ posts }: Props) => {
  return (
    <>
    
    <Navbar />
    <Layout>
    <div className=" mt-20 lg:mt-52 p-4  text-gray-700">
      <h1 className="text-4xl font-semibold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link href={`/posts/${post.slug}`} key={post._id}>        
              <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
              <img src={post.imageUrl} alt={post.alt} className="w-full h-64 object-cover"/>
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
    </>
  )
}

export default Blog;
