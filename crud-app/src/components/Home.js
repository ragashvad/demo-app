    
import React from 'react';
import authors from './authors';
import categories from './categories';
import PolpularInstructors from './PopularInstructors'
import PopularTopics from './PopularTopics';

const Home = () => {
    return (
        <div>
            <div className="col-md-3">
       <PopularTopics authorTopics={categories} />
            </div>
       <PolpularInstructors authorDetails={authors} />
        </div>
    )
}

export default Home;