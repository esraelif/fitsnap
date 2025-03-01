import Image from "next/image";
import { BlogPost } from "../types";

interface BlogProps {
  blogPosts: BlogPost[];
}

export default function Blog({ blogPosts }: BlogProps) {
  return (
    <section id="blog" className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-6 border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-600">By {post.author}</p>
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-48 object-cover mt-4 rounded-md"
          />
          <p className="mt-4">{post.content}</p>
          <p className="mt-2">{post.body}</p>
        </div>
      ))}
    </section>
  );
}
