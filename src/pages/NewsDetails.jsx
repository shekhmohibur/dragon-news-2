import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SocialLogin from "../components/homelayout/SocialLogin";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header className="py-3">
        <Header />
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto py-5 gap-5">
        <section className="col-span-9">
          <h2>Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
