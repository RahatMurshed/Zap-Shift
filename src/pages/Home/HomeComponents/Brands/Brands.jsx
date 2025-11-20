import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import amazon from '../../../../assets/brands/amazon.png'
import amazon_vector from '../../../../assets/brands/amazon_vector.png'
import casio from '../../../../assets/brands/casio.png'
import moonstar from '../../../../assets/brands/moonstar.png'
import randstad from '../../../../assets/brands/randstad.png'
import star from '../../../../assets/brands/star.png'
import start_people from '../../../../assets/brands/start_people.png'
import livetracking from '../../../../assets/live-tracking.png'
import safeDelivery from '../../../../assets/safe-delivery.png'

const Brands = () => {
    return (
        <div className='p-5 bg-[#edeeea]'>
            <h1 className='text-2xl font-bold mb-10 text-center'>We've helped thousands of sales teams</h1>
            <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay:1000,
                disableOnInteraction: false,

            }}
            loop={true}
            modules={[Autoplay]}
            

            className="mySwiper flex justify-center items-center"
        >
            <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
            <SwiperSlide><img src={amazon_vector} alt="" /></SwiperSlide>
            <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
            <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
            <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
            <SwiperSlide><img src={star} alt="" /></SwiperSlide>
            <SwiperSlide><img src={start_people} alt="" /></SwiperSlide>
            

        </Swiper>

        <div className='mb-50 mx-5'>
            <div className='bg-white p-5 mt-15'>
            <div className='flex justify-between items-center gap-10'>
                <img src={livetracking} alt="" />
                <div className='h-35 border'></div>
                <div className='w-70%'> 
                    <h3 className='text-2xl font-semibold'>Live Parcel Tracking</h3>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
        <div className='bg-white p-5 mt-5'>
            <div className='flex justify-between items-center gap-10'>
                <img src={safeDelivery} alt="" />
                <div className='h-35 border'></div>
                <div className='w-70%'> 
                    <h3 className='text-2xl font-semibold'>Live Parcel Tracking</h3>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
        <div className='bg-white p-5 mt-5'>
            <div className='flex justify-between items-center gap-10'>
                <img src={safeDelivery} alt="" />
                <div className='h-35 border'></div>
                <div className='w-70%'> 
                    <h3 className='text-2xl font-semibold'>Live Parcel Tracking</h3>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Brands;