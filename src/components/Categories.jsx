import React, { use } from 'react';
import { NavLink } from 'react-router';
const category = fetch("/categories.json")
.then((res) => res.json());
const Categories = () => {
    const categories = use(category);
    return (
        <div>
            <h2 className='font-semibold'>All Categories</h2>
            <div className='grid grid-cols-1 mt-5'>
                {
                    categories?.map((categori) => (<NavLink 
                        key={categori.id}
                         className="btn rounded-none font-semibold text-accent py-6"
                         to={`category/${categori.id}`}
                         >{categori.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;