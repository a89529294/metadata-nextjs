import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";
function AboutPage() {
  return (
    <>
      <Head>
        <title key="title">About this website</title>
      </Head>
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
}
export default AboutPage;
