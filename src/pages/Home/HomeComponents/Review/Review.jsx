import React, { use } from 'react';
import customerTop from '../../../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Review = ({ reviewPromise }) => {

    const reviews = use(reviewPromise);
    console.log(reviews)


    return (
        <div className='mb-20'>
            <div className=''>
                <img className='w-55 mx-auto mb-5' src={customerTop} alt="" />
                <h1 className='w-110 font-bold text-3xl mx-auto mb-3'>What our customers are sayings</h1>
                <p className='w-150 mx-auto text-center text-sm mb-10'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

            </div>


            <div className='w-250 mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review) => <SwiperSlide key={review.id}>
                            <div className="card bg-base-100 shadow-lg rounded-2xl max-w-md p-6 py-10">
                                
<blockquote className="text-gray-600 text-sm leading-relaxed">
{review.review}
</blockquote>


<div className="divider my-4" />


<div className="flex items-center gap-4">
<div className="avatar">
<img className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-white text-sm font-medium" src={review.user_photoURL} alt="" />
</div>


<div>
<div className="text-teal-800 font-semibold">{review.userName}</div>
<div className="text-xs text-gray-500">{review.user_email}</div>
</div>
</div>
</div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Review;