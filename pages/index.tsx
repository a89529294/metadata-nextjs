import Head from "next/head";
import Link from "next/link";

import Widget from "../components/Widget";

function IndexPage() {
  return (
    <>
      <Head>
        <title key="title">Welcome to my Next.js website</title>
      </Head>

      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <div>
        <Widget pageName="index" />
      </div>
    </>
  );
}
export default IndexPage;
