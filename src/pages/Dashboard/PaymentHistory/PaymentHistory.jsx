import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl font-semibold m-5'>Payment History </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transection Id</th>
                            <th>Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index)=> <tr key={payment._id}>
                            <th>{index+1}</th>
                            <td>{payment.parcelName}</td>
                            <td>${payment.amount}</td>
                            <td>{payment.transectionId}</td>
                            <td>{payment.paidAt}</td>
                            <td className='text-green-400 font-semibold'>{payment.paymentStatus}</td>
                        </tr>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;