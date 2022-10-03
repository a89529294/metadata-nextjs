import { useState } from "react";
import Head from "next/head";

function Widget({ pageName }: { pageName: string }) {
  const [active, setActive] = useState(true);
  const title = ` You're browsing the ${pageName} page `;
  if (active) {
    return (
      <>
        <Head>
          <title key="title">{title}</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take a look at the title!
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={() => setActive(true)}>Change page title</button>
    </>
  );
}
export default Widget;
