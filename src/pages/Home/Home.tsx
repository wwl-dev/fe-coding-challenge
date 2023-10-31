import { useGetTrendingQuery } from "@redux/services";

export const Home = () => {
  const { isLoading } = useGetTrendingQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>Loaded</h2>
    </>
  );
};

export default Home;
