import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaUserShield, FaUserSlash } from 'react-icons/fa6';
import { MdRemoveModerator } from 'react-icons/md';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeUser = (user) =>{
        const roleInfo = {role: user.role !== 'Admin' ? 'Admin' : 'User'};
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
        .then(res =>{
            if(res.data.modifiedCount){
                 refetch();

                 Swal.fire({ title: "Successful!", text: `${user.displayName} Marked as an ${user.role === 'User'? 'Admin' : 'User'}`, icon: "success" });
            }
        })
    }

    return (
        <div>
            <h2 className='text-4xl'>Manage Users: {users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>User</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Actions</th>
        <th>Others Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user._id}>
        <th>
         
           {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="User Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              
            </div>
          </div>
        </td>
        <td>
         {user.email}
        </td>
        <td>{user.role}</td>
        <td>
       { user.role === 'Admin' ? 
        <button 
        onClick={()=>{handleMakeUser(user)}} 
        className='btn'><MdRemoveModerator className='text-red-500'></MdRemoveModerator> </button> 
        :
       <button
       onClick={()=>{handleMakeUser(user)}} className='btn'><FaUserShield className='text-green-500'></FaUserShield> </button>}
        </td>


        <td>

        </td>
        
      </tr>)
      }
      

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default UsersManagement;