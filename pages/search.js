import Head from "next/head";
import HeaderResults from "../components/HeaderResults";
import { config } from "../config";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <HeaderResults />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const { API_TOKEN, API_CONTEXT } = config;
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_TOKEN}&cx=${API_CONTEXT}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
