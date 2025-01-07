import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyList = () => {
    const { user, state, setState } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://server-of-equisports.vercel.app/myList/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user?.email, state]);

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
            <PageTitle title="EquiSports | My List"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">My Added Items</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    {/* head */}
                    <thead className="text-black dark:text-white">
                        <tr>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-black dark:text-white">
                        {/* row 1 */}
                        {
                            data.map((product, index) => <tr
                                key={product._id}
                                className="hover"
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={product.photoUrl}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.itemName}</td>
                                <td>{product.category}</td>
                                <td>{product.rating}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/updateEquipment/${product._id}`}>
                                        <button className="btn btn-sm btn-neutral mr-5"><FaEdit></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product._id)}  className="btn btn-sm btn-neutral"><MdOutlineDeleteOutline /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;