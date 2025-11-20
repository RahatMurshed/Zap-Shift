import React from 'react';
import locationMerchant from '../../../../assets/location-merchant.png'
import merchantBg from '../../../../assets/be-a-merchant-bg.png'

const Marchant = () => {
    return (
        <div className='bg-secondary mx-10 rounded-2xl mb-20'>
            <img className='' src={merchantBg} alt="" />
            <div className='flex  '>
                <div className='w-3xl text-white px-10'>
                    <h1 className='text-3xl px-5'>Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className='px-5 pt-5'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='space-x-3 px-5 py-10'>
                    <button className='btn bg-primary text-secondary rounded-2xl'>Become a Merchant</button>
                <button className='btn btn-outline border-primary rounded-2xl'>Earn with ZapShift Courier</button>
                </div>
                </div>

                <div className=' '>
                    <img className='w-120 h-70 absolute top-745 left-265' src={locationMerchant} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Marchant;