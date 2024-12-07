import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const AllEquipment = () => {
    const { products } = useContext(AuthContext);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map(product => <tr key={product._id}>
                                <td>{product.itemName}</td>
                                <td>{product.category}</td>
                                <td>{product.rating}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/viewDetails/${product._id}`}>
                                        <button className="btn btn-xs btn-neutral">View Details</button>
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