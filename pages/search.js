import Head from "next/head";
import HeaderResults from "../components/HeaderResults";
import { config } from "../components/config";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }, context) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} ~ Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <HeaderResults />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  console.log(context);

  const { API_TOKEN, API_CONTEXT } = config;
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response: await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_TOKEN}&cx=${API_CONTEXT}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //After the server has rendered .... Pass the results to the client ...

  return {
    props: {
      results: data,
    },
  };
}
