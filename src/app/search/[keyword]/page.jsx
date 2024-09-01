import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  // );
  // const searchAnime = await response.json();
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);
  const decodeKeyword = decodeURIComponent(keyword);

  return (
    <>
      <section>
        <Header title={`Search Results for "${decodeKeyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
