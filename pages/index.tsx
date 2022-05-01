import Head from "next/head";
import HomePage from "@pages/Home";

const Home = () => (
  <>
    <Head>
      <title>Emotion using the vanilla version supporting SSR</title>
    </Head>
    <div>
      <HomePage />
    </div>
  </>
);

export default Home;
