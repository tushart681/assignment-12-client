import React from 'react';
import AddSection from '../AddSection';
import Banner from './Banner';
import Items from './items/Items';

const Home = () => {
    return (
        <div className='mx-6 mt-4 gap-2'>
            <Banner />
            <AddSection />
            <Items />
        </div>
    );
};

export default Home;