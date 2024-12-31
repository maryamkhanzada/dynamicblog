







import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Link from 'next/link'; // Import Link from Next.js
import { Button } from './ui/button';
import Image from 'next/image';


interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
     <Image src={post.imageUrl} alt={post.title} width={1000} height={1000}></Image>

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${isDarkBackground ? "text-slate-400" : "text-slate-600"}`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        
        {/* Using Next.js Link for navigation */}
        <Link href={`/posts/${post.id}`} passHref>
          <Button className="w-full px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
            Read More
          </Button>
        </Link>
      </div>
    </Card>
  );
}

