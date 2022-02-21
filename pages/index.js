import Head from "next/head";
import ChildrenCB from "../ads/ChildrenCB";
import SearchForm from "../components/home /SearchForm";
import TodaysChoice from "../components/home /TodaysChoice";
import Subscribe from "../components/shared/Subscribe";

export default function Home({ names }) {
  return (
    <>
      <Head>
        <meta title="my page" />
      </Head>

      <SearchForm />
      <TodaysChoice names={names} />
      <ChildrenCB />
      <Subscribe />
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/female-names/random-names`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      names: data,
    }, // will be passed to the page component as props
  };
}
