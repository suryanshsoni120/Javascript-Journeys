"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABSE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

export default function Home() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    document.title =
      "JavaScript Journeys: Exploring the Realm of Code and Creativity";
    const databases = new Databases(client);

    const promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);

    promise.then(
      function (response) {
        setblogPosts(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white shadow-md p-4">
              <Link href={`/blog/${post.slug}`}>
                <img
                  src={post.url}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              </Link>
              <p className="text-gray-600">{post.metadesc}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
