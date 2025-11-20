import React from 'react';
import truckIcon from '../../../../assets/bookingIcon.png'

const How_it_works = () => {
    return (
        <div className='mb-10 bg-[#edeeea] ml-10'>
            <h3 className='text-3xl font-semibold p-2'>How it Works</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3'> 
               <div className="card w-60 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <img className='w-10' src={truckIcon} alt="" />
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
   
  </div>
</div>
               <div className="card w-60 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <img className='w-10' src={truckIcon} alt="" />
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
   
  </div>
</div>
               <div className="card w-60 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <img className='w-10' src={truckIcon} alt="" />
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
   
  </div>
</div>
               <div className="card w-60 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <img className='w-10' src={truckIcon} alt="" />
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
   
  </div>
</div>

            </div>
        </div>
    );
};

export default How_it_works;