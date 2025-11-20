import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

export default function SendParcelPage() {
  const { register, handleSubmit, control } = useForm();
  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();

  const warehouseData = useLoaderData();

  const regionsDuplicate = warehouseData.map(warehouse => warehouse.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' })

  const districtsByRegion = region => {
    const regionDistricts = warehouseData.filter(warehouse => warehouse.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }



  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.type === 'document';
    const isSamedistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSamedistrict ? 60 : 80;
    }
    else {
      if (parcelWeight <= 3) {
        cost = isSamedistrict ? 110 : 150;

      }
      else {
        const minCharge = isSamedistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSamedistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;

      }

    }

    console.log('cost', cost)
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka` ,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree!"
    }).then((result) => {
      if (result.isConfirmed) {


        axiosSecure.post('/parcels', data)
        .then(res =>{
          console.log('after saving to db',res.data);
        })


        
        // Swal.fire({
        //   title: "Order Placed",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });

  };

  return (
    <div className="min-h-screen w-full bg-[#f9fafb] flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="w-full max-w-5xl bg-white rounded-xl shadow-sm p-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Send A Parcel</h1>

        <p className="font-medium text-gray-700 mb-3">Enter your parcel details</p>

        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" value="document" {...register("type")} className="radio text-lime-500 border-3" />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" value="non-document" {...register("type")} className="radio text-lime-500 border-3" />
            <span>Not-Document</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block text-sm mb-1">Parcel Name</label>
            <input {...register("parcelName")} className="input input-bordered w-full" placeholder="Parcel Name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Parcel Weight (KG)</label>
            <input {...register("parcelWeight")} className="input input-bordered w-full" placeholder="Parcel Weight (KG)" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-4">Sender Details</h2>

            <label className="block text-sm mb-1">Sender Name</label>
            <input {...register("senderName")} className="input input-bordered w-full mb-4" defaultValue={user?.displayName} placeholder="Sender Name" />
            <label className="block text-sm mb-1">Sender Email</label>
            <input {...register("senderEmail")} defaultValue={user?.email} className="input input-bordered w-full mb-4" placeholder="Sender Email" />

            <label className="block text-sm mb-1">Address</label>
            <input {...register("senderAddress")} className="input input-bordered w-full mb-4" placeholder="Address" />

            <label className="block text-sm mb-1">Sender Phone No</label>
            <input {...register("senderPhone")} className="input input-bordered w-full mb-4" placeholder="Sender Phone No" />

            <label className="block text-sm mb-1">Your Region</label>
            <select {...register("senderRegion")} className="select select-bordered w-full mb-4">
              <option>Select your Region</option>
              {
                regions.map((region, index) => <option key={index} value={region}>{region}</option>)
              }


            </select>
            {/* sender District */}
            <label className="block text-sm mb-1">Your District</label>
            <select {...register("senderDistrict")} className="select select-bordered w-full mb-4">
              <option disabled={true}>Select your Region first</option>
              {
                districtsByRegion(senderRegion).map((region, index) => <option key={index} value={region}>{region}</option>)
              }


            </select>

            <label className="block text-sm mb-1">Pickup Instruction</label>
            <textarea {...register("pickupInstruction")} className="textarea textarea-bordered w-full" placeholder="Pickup Instruction"></textarea>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-4">Receiver Details</h2>

            <label className="block text-sm mb-1">Receiver Name</label>
            <input {...register("receiverName")} className="input input-bordered w-full mb-4" placeholder="Receiver Name" />

            <label className="block text-sm mb-1">Receiver Address</label>
            <input {...register("receiverAddress")} className="input input-bordered w-full mb-4" placeholder="Address" />

            <label className="block text-sm mb-1">Receiver Contact No</label>
            <input {...register("receiverPhone")} className="input input-bordered w-full mb-4" placeholder="Sender Contact No" />

            <label className="block text-sm mb-1">Receiver Region</label>
            <select {...register("receiverRegion")} className="select select-bordered w-full mb-4">
              <option>Select your Region</option>
              {
                regions.map((region, index) => <option key={index} value={region}>{region}</option>)
              }
            </select>
            {/* Receiver District */}
            <label className="block text-sm mb-1">Receiver District</label>
            <select {...register("receiverDistrict")} className="select select-bordered w-full mb-4">
              <option>Select Receiver District</option>
              {
                districtsByRegion(receiverRegion).map((region, index) => <option key={index} value={region}>{region}</option>)
              }
            </select>


            <label className="block text-sm mb-1">Delivery Instruction</label>
            <textarea {...register("deliveryInstruction")} className="textarea textarea-bordered w-full" placeholder="Delivery Instruction"></textarea>
          </div>
        </div>

        <p className="text-sm mt-6 mb-6 text-gray-500">* PickUp Time 4pm-7pm Approx.</p>

        <button type="submit" className="btn bg-primary border-none text-gray-800 mt-4 px-6">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
}
