import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SelectedCard = ({product}) => {
    const { state, setState} = useContext(AuthContext);

    const {_id, photoUrl, category, itemName, description, rating, price} = product;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-of-equisports.vercel.app/equipment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        // console.log(data);

                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });

                            setState(!state);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card bg-gray-100 h-[500px] shadow-xl p-3">
                <figure className="px-10 pt-10">
                    <img
                        src={photoUrl}
                        alt="Shoes"
                        className="rounded-none" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-extrabold">{category}!</h2>
                    <p><span className="font-bold">Name:</span> {itemName}</p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                    <p><span className="font-bold">Price:</span> ${price}</p>
                    <div className="card-actions">
                        <div className="space-x-3">
                            <Link to={`/updateEquipment/${_id}`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
                            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;