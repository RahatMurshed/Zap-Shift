import React from 'react';
import Banner from '../HomeComponents/Banner/Banner';
import How_it_works from '../HomeComponents/How-it-works/How_it_works';
import OurService from '../HomeComponents/OurService/OurService';
import Brands from '../HomeComponents/Brands/Brands';
import Marchant from '../HomeComponents/Marchant/Marchant';
import Review from '../HomeComponents/Review/Review';
import FAQ from '../HomeComponents/FAQ/FAQ';



const reviewPromise = fetch('/reviews.json')
.then(res=>res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <How_it_works></How_it_works>
            <OurService></OurService>
            <Brands></Brands>
            <Marchant></Marchant>
            <Review reviewPromise={reviewPromise}></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;