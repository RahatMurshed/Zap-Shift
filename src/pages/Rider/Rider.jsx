import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import agentPending from '../../assets/agent-pending.png'
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


export default function BeARider() {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const warehouses = useLoaderData();
  console.log(warehouses);


  const handleRiderApplication = (data) => {
    console.log(data)

    axiosSecure.post('/riders', data)
      .then(res => {
        if (res.data.insertedId) {

          Swal.fire({ title: "Submitted!", text: "Your application has been received.", icon: "success" });

          // reset();
        }
      })


  };

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white rounded-3xl shadow p-10 w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-secondary">Be a Rider</h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        </p>
        <hr className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* FORM START */}
          <form onSubmit={handleSubmit(handleRiderApplication)} className="space-y-5">
            <h2 className="text-2xl font-semibold text-secondary">Tell us about yourself</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">Your Name</span></label>
                <input {...register("name")} placeholder="Your Name" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">Your Age</span></label>
                <input {...register("age")} placeholder="Your Age" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">Your Email</span></label>
                <input {...register("email")} placeholder="Your Email" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">District</span></label>
                <select {...register("district")} className="select select-bordered w-full">
                  <option>Select your District</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Khulna</option>
                </select>
              </div>

              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">NID No</span></label>
                <input {...register("nid")} placeholder="NID" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="label"><span className="label-text text-sm text-secondary font-bold">Contact</span></label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                  <input {...register("contact")} placeholder="Contact" className="input input-bordered w-full " />
                </div>
              </div>
            </div>

            <div>
              <label className="label"><span className="label-text text-sm text-secondary font-bold">Warehouse</span></label>
              <select {...register("warehouse")} className="select select-bordered w-full">
                <option>Select warehouse</option>
                <option>Dhaka Hub</option>
                <option>Mirpur Hub</option>
                <option>Uttara Hub</option>
              </select>
            </div>

            <button className="btn bg-lime-400 text-black w-full">Submit</button>
          </form>
          {/* FORM END */}

          {/* IMAGE SECTION */}
          <div className="flex justify-center items-start">
            <img
              src={agentPending}
              alt="rider"
              className="w-80 md:w-96"
            />
          </div>

        </div>
      </div>
    </div>
  );
}