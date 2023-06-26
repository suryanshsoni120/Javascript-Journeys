"use client";
import { useRouter } from "next/router";
import Navbar from "@/app/components/Navbar";
import AboutPage from "@/app/about/page";
import { Client, Databases, ID, Query } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABSE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

const BlogPage = ({ params }) => {
  const [blogPost, setBlogPost] = useState();
  const { slug } = params;

  useEffect(() => {
    document.title =
      "JavaScript Journeys: Exploring the Realm of Code and Creativity";
    const databases = new Databases(client);

    let promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("slug", slug),
    ]);

    promise.then(
      function (response) {
        setBlogPost(response.documents[0]);
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
        <h1 className="text-2xl font-bold my-4">{blogPost?.title}</h1>
        <div className="mb-4">
          <img
            src={blogPost?.url}
            alt={blogPost?.metadesc}
            className="mb-4 h-60"
          />
        </div>
        <p
          className="text-gray-700 pb-5"
          dangerouslySetInnerHTML={{ __html: blogPost?.content }}
        />
      </div>
    </>
  );
};

export default BlogPage;
