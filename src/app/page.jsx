import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=0e239151dbedde4cb5bbd6b1e7b2bdc5&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  console.log(data);

  return (
    <div className="flex items-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
