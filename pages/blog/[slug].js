import Link from "next/link";
import { useEffect, useState } from "react";

const singlePost = ({ post, notFound }) => {
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
    <>
      {post && (
        <div className="bg-white mt-4">
          <div className="w-full p-4  ">
            <h1 className="text-5xl tracking-wide text-gray-600">
              {post.title.rendered}
            </h1>
            <div className="w-full p-4 transition-all my-4">
              <img src={imageSource} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        </div>
      )}

      {notFound && (
        <div className="w-full p-4 text-center text-gray-600">
          We could not find this blog post <br />
          <Link href={"/"} className="text-xs my-6 text-gray-200">
            Homepage
          </Link>
        </div>
      )}
    </>
  );
};

export default singlePost;

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const res = await fetch(
    `https://cmm.27f.myftpupload.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = await res.json();
  if (!data.length) {
    return {
      props: {
        post: null,
        notFound: true,
      },
    };
  }

  return {
    props: {
      post: data[0],
      notFound: false,
    }, // will be passed to the page component as props
  };
}
