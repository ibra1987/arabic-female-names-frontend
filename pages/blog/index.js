import Head from "next/head";
import Post from "../../components/blog/Post";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta title="my page" />
      </Head>

      <div className="my-6 bg-pink-500 text-center p-4 text-3xl text-white">
        {" "}
        Have Fun Reading
      </div>
      <div className="my-4 grid grid-cols-3 gap-3">
        {posts.length > 0 &&
          posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `https://cmm.27f.myftpupload.com/wp-json/wp/v2/posts?per_page=100`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    }, // will be passed to the page component as props
  };
}
