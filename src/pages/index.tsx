import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  return (
    <main>
      <h1>Hello World</h1>
      {!isLoading && data && <p>{data.greeting}</p>}
    </main>
  );
};

export default Home;
