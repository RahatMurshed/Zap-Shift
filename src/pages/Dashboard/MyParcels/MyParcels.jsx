import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdEditSquare } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";

import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';




const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });

                        }
                    })




            }
        });
    }

    const handlePayment = async (parcel)=>{
        const paymentInfo = {

            price:parcel.price,
            id: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,

        }

        const res = await axiosSecure.post('/checkout', paymentInfo);
        console.log(res.data.url);
        window.location.assign(res.data.url);


    }


    return (
        <div>
            <h2>My parcels {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment </th>
                            <th>Delivery Status </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.price}</td>
                 <td>
                     {
                        parcel.paymentStatus === 'paid'?
                        <span className=' text-green-500'>Paid</span>  :    
                           
                            <button 
                            onClick={()=>{handlePayment(parcel)}}
                            className="btn btn-sm btn-primary text-black">
                                Pay
                            </button>
                               
                    }
                 </td>
                                <td>{parcel.deliveryStatus}</td>
                                <td>
                                    <div className="space-x-3">
                                        <button className='btn btn-square hover:bg-primary'><FaEye />
                                        </button>
                                        <button className='btn btn-square hover:bg-primary'><MdEditSquare />
                                        </button>
                                        <button onClick={() => { handleDelete(parcel._id) }} className='btn btn-square hover:bg-primary'><FaTrashCan />
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;