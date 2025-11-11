import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    return (
        <div>
            CATEGORY NEWS
        </div>
    );
};

export default CategoryNews;