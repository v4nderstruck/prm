import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/Navbar";
import NextEvents from "~/components/NextEvents";
import RecommendationBox from "~/components/RecommendationBox";
import Stats from "~/components/Stats";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>PRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <Navbar />
        <div className="px-0 lg:px-44 w-full">
          <div
            className="container gap-8 w-full mt-16 flex flex-col lg:flex-row 
            items-center lg:items-start lg:justify-between">
            <div className="flex-none order-1 flex flex-col gap-8">
              <Stats />
              <RecommendationBox />
            </div>
            <div className="flex-1 order-2">
              <NextEvents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

