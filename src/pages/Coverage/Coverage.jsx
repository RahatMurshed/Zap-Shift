import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const warehouses = useLoaderData();
    const mapRef = useRef(null);
    // console.log(warehouses);




    const handleSearch = (e)=>{
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);

        const district = warehouses.find(w => w.district.toLowerCase().includes(search.toLowerCase()));

        if(district){
           const coOrdinate =  [district.latitude, district.longitude];
           console.log(district,coOrdinate)
           mapRef.current.flyTo(coOrdinate, 11);
        }

    }


  

    return (
        <div className='px-10 '>
           
            <h2 className="text-5xl font-bold mb-5">We are available in 64 districts</h2>
            <div className='mb-15 '>
                {/* Search */}
               <form onSubmit={handleSearch}>
                 <input name='search' className='join bg-white p-2 w-90' type="text" placeholder='Search Here' />
                <button type='submit' className='btn btn-primary text-black '>Search</button>
               </form>
            </div>
            <h3 className="text-3xl font-bold mb-5">We deliver almost all over Bangladesh</h3>


            <div className=" h-260 mb-15">
                <MapContainer 
                center={position}
                 zoom={8} 
                 scrollWheelZoom={false}
                 className='h-260'
                 ref={mapRef}
                 >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        warehouses.map((warehouse,index)=><Marker 
                        key={index} 
                        position={[warehouse.latitude, warehouse.longitude]}>

                        <Popup>
                            <strong>{warehouse.district}</strong> <br /> Service Area - {warehouse.covered_area.join(', ')}

                        </Popup>
                    </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;