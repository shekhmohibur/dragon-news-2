import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/homelayout/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data);
        }else if(id == "1"){
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }else{
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        
        
    },[data, id])
    return (
        <div>
            <h2 className='mb-5'>Dragon News Home</h2>
            <div className='flex flex-col gap-4'>
                {
                    categoryNews.map(news=> <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;