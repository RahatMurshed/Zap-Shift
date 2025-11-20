import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, setUser, googleLogin, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();



    const handleRegistration = (data) => {
        console.log(data.photo[0].name)
        const profileImg = data.photo[0];


        console.log('after register ', data)
        createUser(data.email, data.pass)
            .then(res => {
                console.log(res.user);
                // Store the image and get the image url
                const fromData = new FormData();
                fromData.append('image', profileImg);

                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`, fromData)
                .then(data=>{
                    console.log('after post',data.data.data.url);

                      // update user profile
                    const userProfile = {
                        displayName:data.name,
                        photoURL: data.data.data.url,
                    
                    };


                    updateUserProfile(userProfile)
                    .then(()=>{
                        console.log('updatedProfile')
                    })
                    .catch(err=>{
                        console.log(err.message)
                    })



                })

              
                




                setUser(res.user);
                navigate(location?.state || '/');
            })
            .catch(err => {
                console.log(err.message);
            })

    };


    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                navigate(location?.state || '/');
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
                <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-md p-8">
                    {/* Title */}
                    <h1 className="text-4xl font-bold">Create an Account</h1>
                    <p className="mt-1 text-sm text-gray-500">Register with ZapShift</p>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(handleRegistration)}
                        className="mt-6 space-y-4">
                        {/* Photo */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Profile Image</label>
                            
                            <input
                                type="file"
                                
                                placeholder="Name"
                                {...register('photo', { required: true })}
                                className=" input-bordered w-full file-input"
                            />
                            {errors.name?.type === 'required' && <p className='text-sm text-red-500 mt-1 font-semibold'>Name is required</p>}
                        </div>
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            
                            <input
                                type="text"
                                name='name'
                                placeholder="Name"
                                {...register('name', { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.name?.type === 'required' && <p className='text-sm text-red-500 mt-1 font-semibold'>Name is required</p>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email', { required: true })}
                                className="input input-bordered w-full"
                            />
                            {errors.email?.type === 'required' && <p className='text-sm text-red-500 mt-1 font-semibold'>Email is required</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('pass', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]|:;"'<>,.?]).+$/


                                }

                                )}
                                className="input input-bordered w-full"
                            />
                            {errors.pass?.type === 'required' && <p className='text-sm text-red-500 mt-1 font-semibold'>Password is required</p>}
                            {errors.pass?.type === 'minLength' && <p className='text-sm text-red-500 mt-1 font-semibold'>Password must be 6 charachter or longer.</p>}
                            {errors.pass?.type === 'pattern' && <p className='text-sm text-red-500 mt-1 font-semibold'>Password must include uppercase, lowercase, number, and special character.</p>}
                        </div>



                        {/* Login Button */}
                        <button className="btn w-full bg-lime-300 hover:bg-lime-400 border-none">Register</button>
                    </form>

                    {/* Register */}
                    <p className="mt-4 text-sm text-gray-500 text-center">
                        Don’t have any account?
                        <Link state={location.state} to='/login' className="text-[#93c402] ml-1 cursor-pointer font-semibold text-lg hover:underline">Login</Link>
                    </p>

                    {/* OR Divider */}
                    <div className="flex items-center gap-2 my-4">
                        <div className="flex-1 border-t"></div>
                        <span className="text-sm text-gray-500">Or</span>
                        <div className="flex-1 border-t"></div>
                    </div>

                    {/* Google Button */}
                    <button onClick={handleGoogleLogin} className="btn w-full btn-ghost border bg-gray-100 flex items-center gap-2">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;