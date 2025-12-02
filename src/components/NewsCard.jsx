// NewsCard.jsx
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, author, thumbnail_url, details, rating, total_view } = news;

  // format date like: Wednesday, August 24, 2022
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    undefined,
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="relative card bg-base-100 shadow-sm rounded-xl">
      {/* top-right icons (share + bookmark) */}
      <div className="bg-base-200 p-3">
        <div className="absolute top-3 right-3 flex items-center gap-2 text-gray-500">
          <button aria-label="share" className="p-1 hover:text-gray-800">
            <FaShareAlt size={14} />
          </button>
          <button aria-label="bookmark" className="p-1 hover:text-gray-800">
            <FaRegBookmark size={14} />
          </button>
        </div>

        {/* Author row */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-semibold text-sm">{author.name}</div>
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
      </div>
      <div className="p-3">
        {/* Title */}
      <h2 className="font-semibold text-lg leading-snug mb-2">{title}</h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details excerpt */}
      <p className="text-gray-600 text-sm mt-3">
        {details.length > 160 ? details.slice(0, 160).trim() + "..." : details}
      </p>

      {/* Read More (subtle chevron) */}
      <Link to={`/news-Details/${id}`} className="mt-2 text-orange-500 font-semibold inline-flex items-center gap-1">
        Read More
        <span aria-hidden className="text-sm">
          ›
        </span>
      </Link>

      {/* Footer: rating and views */}
      <div className="flex justify-between items-center mt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
              size={14}
            />
          ))}
          <span className="ml-1 text-gray-700 text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaEye size={14} />
          <span>{total_view}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsCard;
