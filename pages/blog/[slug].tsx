import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import PostHead from "../../components/PostHead";
import posts from "../../data/posts";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params ?? {};
  const post = posts.find((p) => p.slug === slug);
  return {
    props: {
      post,
    },
  };
};

function Post({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
}
export default Post;
