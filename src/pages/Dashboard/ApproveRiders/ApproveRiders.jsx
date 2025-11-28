import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEye, FaUserCheck } from "react-icons/fa6";
import { HiUserRemove } from "react-icons/hi";
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';



const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data;

        }
    })

    const updateRiderStatus = (rider, status) =>{
         const updateInfo = {
            status: status,
            email : rider.email

         }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo )
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({ title: "Approved!", text: `Rider has been ${status}.`, icon: "success" });
            }
        })
    }

    const handleApproval = (rider)=>{
       
        updateRiderStatus(rider, 'Approved');
    }

    const handleRejection = (rider) =>{
        updateRiderStatus(rider, 'Rejected')
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold m-3'>Riders Pending Approval : {riders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index)=> <tr key={rider._id}>
                            <th>{index+1}</th>
                            <td>{rider.name}</td>
                            <td>{rider.email}</td>
                            <td>{rider.district}</td>
                            <td className={`${rider.status === 'Pending'? "text-yellow-600" : "text-green-600"} font-bold ${rider.status === 'Rejected' && "text-red-500"}`}>{rider.status}</td>

                            <td className='space-x-3'>
                                <button
                               className='btn '>
                                    <FaEye className='text-[16px]'/>
                                </button>
                                <button
                                onClick={()=>{handleApproval(rider)}} className='btn '>
                                    <FaUserCheck className='text-[16px]'/>
                                </button>
                                <button 
                                onClick={()=>{handleRejection(rider)}} className='btn '>
                                    <HiUserRemove className='text-xl' />

                                </button>
                                <button className='btn '>
                                   <FaTrash />


                                </button>
                            </td>
                        </tr>)
                        }
                       
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;