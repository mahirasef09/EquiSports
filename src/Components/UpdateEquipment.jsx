import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const UpdateEquipment = () => {
    const {state, setState} = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, photoUrl, category, itemName, description, customization, rating, price, processingTime, stockStatus, userName, userEmail } = product;

    const handleUpdateEquipment = (e) => {
        e.preventDefault();
        const form = e.target;

        const itemName = form.itemName.value;
        const category = form.category.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const photoUrl = form.photoUrl.value;

        const newEquipment = { itemName, category, description, customization, rating, price, processingTime, stockStatus, userEmail, userName, photoUrl }

        // console.log(newEquipment);

        // sending data to the server
        fetch(`http://localhost:5000/equipment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {

                // console.log("Equipment Updated Successfully in DB", data);

                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment Updated Successfully in DB',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    setState(!state);
                }
            })
    }

    return (
        <div className='lg:w-3/4 mx-auto bg-base-100'>
            <div className="text-center pt-5">
                <h1 className="text-5xl font-extrabold">Update Equipment!</h1>
            </div>
            <div className="card w-full shrink-0">
                <form onSubmit={handleUpdateEquipment} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Item Name</span>
                            </label>
                            <input type="text" name='itemName' defaultValue={itemName} placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Cutomization</span>
                            </label>
                            <input type="text" name='customization' defaultValue={customization} placeholder="Customization" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form fourth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Processing Time</span>
                            </label>
                            <input type="text" name='processingTime' defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Stock Status</span>
                            </label>
                            <input type="text" name='stockStatus' defaultValue={stockStatus} placeholder="Stock Status" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form fifth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">User Email</span>
                            </label>
                            <input type="email" name='userEmail' defaultValue={userEmail} disabled placeholder="User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">User Name</span>
                            </label>
                            <input type="text" name='userName' defaultValue={userName} disabled placeholder="User Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' defaultValue={photoUrl} placeholder="Photo URL" className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;