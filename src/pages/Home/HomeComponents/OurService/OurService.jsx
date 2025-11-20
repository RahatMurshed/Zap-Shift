import React from 'react';
import serviceLogo from '../../../../assets/service.png'

const OurService = () => {
    return (
        <div className='py-15  bg-secondary text-center rounded-xl mx-10' >
            <div className='text-white'>
                <h1 className='text-3xl font-bold mb-1'>Our Services</h1>
                <p className='text-md w-170 mx-auto text-[#DADADA] mb-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto '>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express  & Standard Delivery</h2>
                        <p className='text-sm text-[#606060] '>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nationwide Delivery</h2>
                        <p className='text-sm text-[#606060] '>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-75 shadow-sm hover:bg-primary">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">Fulfillment Solution</h2>
                        <p className='text-sm text-[#606060] '>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cash on Home Delivery</h2>
                        <p className='text-sm text-[#606060] '>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Corporate Service / Contract                         In Logistics</h2>
                        <p className='text-sm text-[#606060] '>Customized corporate services which includes warehouse and inventory management support.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-75 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={serviceLogo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parcel Return</h2>
                        <p className='text-sm text-[#606060] '>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurService;