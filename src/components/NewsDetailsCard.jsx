import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

/**
 * Props: { data }
 * Where `data` is the article object you provided earlier.
 * This component includes ONLY the elements visible in the screenshot.
 */
const NewsDetailsCard = ({ news }) => {
  const { title, thumbnail_url, details, author, category_id } = news;

  // a compact "human" date similar to the screenshot link line
  const humanDate = new Date(author?.published_date).toLocaleDateString(
    undefined,
    { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-white rounded-md overflow-hidden shadow-sm">
        {/* Thumbnail */}
        <div className="w-full">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full object-cover"
          />
        </div>

        <div className="p-6">
          {/* Title */}
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight mb-3">
            {title}
          </h1>
          {/* Article excerpt / details */}
          <p className="text-sm text-gray-700 leading-relaxed text-justify whitespace-pre-wrap">
            {details}
          </p>

          {/* Pink left-arrow button (All news in this category) */}
          <div className="mt-6">
            <Link to={`/category/${category_id}`}
              type="button"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-pink-700 text-white px-4 py-2 rounded-md"
            >
              <FaArrowLeft className="text-sm" />
              <span className="text-sm font-medium">All news in this category</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
