
const AddEquipment = () => {
    return (
        <div className='lg:w-3/4 mx-auto bg-base-100'>
            <div className="text-center pt-5">
                <h1 className="text-5xl font-extrabold">Add Equipment!</h1>
            </div>
            <div className="card w-full shrink-0">
                <form className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Item Name</span>
                            </label>
                            <input type="text" name='itemName' placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Cutomization</span>
                            </label>
                            <input type="text" name='customization' placeholder="Customization" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form fourth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Processing Time</span>
                            </label>
                            <input type="text" name='processingTime' placeholder="Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">Stock Status</span>
                            </label>
                            <input type="text" name='stockStatus' placeholder="Stock Status" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form fifth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">User Email</span>
                            </label>
                            <input type="email" name='userEmail' placeholder="User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-bold">User Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="User Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;