import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, setUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (data) => {

    console.log(data);

    login(data.email, data.pass)
      .then(res => {
        console.log(res.user);
        setUser(res.user);
        navigate(location.state || '/')
      })
      .catch(error => {
        console.log(error.message);
      })


  };


  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(res=>{
      console.log(res.user)
      setUser(res.user)
      navigate(location.state || '/')
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-md p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="mt-1 text-sm text-gray-500">Login with ZapShift</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: true, })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {
              errors.email?.type === 'required' && <p className='text-sm text-red-500 font-semibold mt-2'>Email is required</p>
            }
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register('pass', { required: true, minLength: 6 })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {
              errors.pass?.type === 'required' && <p className='text-sm text-red-500 font-semibold mt-2'>Password is required</p>
            }
            {
              errors.pass?.type === 'minLength' && <p className='text-sm text-red-500 font-semibold mt-2'>Password must contain atleast 6 charachter or longer.</p>
            }
          </div>

          {/* Forget */}
          <div className="">
            <a className="text-sm text-gray-500 hover:underline cursor-pointer">Forget Password?</a>
          </div>

          {/* Login Button */}
          <button className="btn w-full bg-lime-300 hover:bg-lime-400 border-none">Login</button>
        </form>

        {/* Register */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          Don’t have any account?
          <Link state={location?.state} to='/register' className="text-[#93c402] ml-1 cursor-pointer font-semibold text-lg hover:underline">Register</Link>
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
  );
};

export default Login;