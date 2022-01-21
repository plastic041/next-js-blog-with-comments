import { CMS_NAME } from "../lib/constants";
import Head from "next/head";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Layout preview={preview}>
        <MoreStories posts={allPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
