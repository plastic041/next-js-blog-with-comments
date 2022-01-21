import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

import { CMS_NAME } from "../../lib/constants";
import Date from "../../components/date";
import ErrorPage from "next/error";
import Head from "next/head";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import { useRouter } from "next/router";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>
              {post.title} | Next.js Blog Example with {CMS_NAME}
            </title>
          </Head>
          <article>
            <h1 className="titlebox">
              <span>{post.title}</span>
              <Date dateString={post.date} />
            </h1>
            <PostBody content={post.body} />
          </article>

          <hr />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
