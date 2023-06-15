"use client";
import { useRouter } from "next/router";
import Navbar from "@/app/components/Navbar";
import AboutPage from "@/app/about/page";
import { Client, Databases, ID, Query } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6489c0eba659e78d6de7");

const BlogPage = ({ params }) => {
  const [blogPost, setBlogPost] = useState();
  const { slug } = params;

  useEffect(() => {
    document.title =
      "JavaScript Journeys: Exploring the Realm of Code and Creativity";
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6489c8e51f9e6e274f12",
      "6489c8ed5238714db94b",
      [Query.equal("slug", slug)]
    );

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
