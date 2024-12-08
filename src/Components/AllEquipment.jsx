import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "./PageTitle";

const AllEquipment = () => {
    const { state } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://server-of-equisports.vercel.app/allEquipment')
            .then(res => res.json())
            .then(data => setData(data))
    }, [state]);

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        setData(sortedData);
    }

    return (
        <div>
            <PageTitle title="EquiSports | All Equipment"></PageTitle>
            <div className="flex justify-center items-center my-5">
                <button onClick={handleSort} className="btn btn-sm btn-success">Sort by Price</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    {/* head */}
                    <thead className="text-black dark:text-white">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-black dark:text-white">
                        {/* row 1 */}
                        {
                            data.map(product => <tr 
                                key={product._id}
                                className="hover"
                            >
                                <td>{product.itemName}</td>
                                <td>{product.category}</td>
                                <td>{product.rating}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/viewDetails/${product._id}`}>
                                        <button className="btn btn-sm btn-neutral">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;