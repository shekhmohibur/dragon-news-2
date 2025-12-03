import { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const newsPromise = fetch("/news.json").then((res) => res.json());
const LatestNews = () => {
  const data = use(newsPromise);
  const [latestNews, setLatestNews] = useState();
  useEffect(() => {
    const filteredLatest = data?.filter((news) => news.others.is_today_pick);
    setLatestNews(filteredLatest);
  }, [data]);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee speed={70} pauseOnHover={true}>
        {latestNews?.map((news) => (
          <p className="text-accent font-semibold px-8">{news.title}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
