import React from 'react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';

const NewsCard = ({news}) => {
    console.log(news.rating.number)
    return (
<div className="card w-full bg-base-100 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-base-300">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={news.author.img} alt="author avatar" />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>

        {/* Top right icons */}
        <div className="ml-auto flex items-center gap-2 text-gray-500">
          <button className="btn btn-ghost btn-xs hover:text-orange-500">
            <FaRegBookmark size={17}/>
          </button>
          <button className="btn btn-ghost btn-xs hover:text-blue-500">
            <FaShareAlt size={17}/>
          </button>
        </div>
      </div>

      {/* Image */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt="news"
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-base leading-snug">{news.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{news.details}</p>

        <a className="text-blue-500 text-sm font-medium mt-1 hover:underline">
          Read More
        </a>

        <div className="flex items-center justify-between mt-3">
          <Rating
            initialValue={news.rating.number}
            readonly
            allowFraction
            size={22}
            SVGstyle={{ display: "inline-block" }}
            fillColor="#FF8C47"
            emptyColor="gray"
          />

          <p className="text-sm text-gray-500">👁️ {news.total_view}</p>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;