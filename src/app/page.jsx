import Image from "next/image";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationAnime = reproduce(recommendationAnime, 5);

  return (
    <>
      <section>
        <Header
          title={"Top Anime"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Recommendation"} />
        <AnimeList api={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
