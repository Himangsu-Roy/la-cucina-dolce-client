import React from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Header />
            <Banner/>
        </div>
    );
}

export default Main;
