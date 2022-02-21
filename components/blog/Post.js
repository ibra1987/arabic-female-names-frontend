import { useEffect, useState } from "react";
import Link from "next/link";

const Post = ({ post }) => {
  const [imageSource, setImageSource] = useState("");
  useEffect(() => {
    getFeaturedImage(post.featured_media);
  }, [post]);

  const getFeaturedImage = async (imageID) => {
    const response = await fetch(
      `https://cmm.27f.myftpupload.com/wp-json/wp/v2/media/${imageID}`
    );
    const data = await response.json();

    if (!data) return "no image found";

    setImageSource(data.source_url);
  };
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="m-2 mt-6 hover:border hover:bg-pink-50 hover:border-pink-50 rounded-md border border-gray-300 shadow-xl 
      hover:scale-105 hover:cursor-pointer transition-transform ease-in duration-200"
      >
        {imageSource ? (
          <img
            src={imageSource}
            className="rounded-md bg-gray-500 transition "
          />
        ) : (
          <div className="bg-gray-200 h-2/5 flex justify-center items-center text-white">
            Image
          </div>
        )}

        <h1 className=" m-2 font-bold text-3xl text-indigo-600 mt-2 hover:underline hover:cursor-pointer">
          {post.title.rendered}
        </h1>

        <div
          className="text-sm text-gray-500  hover:cursor-pointer m-2"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></div>
      </div>
    </Link>
  );
};

export default Post;
