
import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0e239151dbedde4cb5bbd6b1e7b2bdc5&query=${keyword}&language=en-US&page=1&include_adult=false`
  );
  
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranılan şey bulunamadı...!</div>
      ) : (
        <div className="flex flex-wrap items-center gap-3  ">
          {data.results.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
