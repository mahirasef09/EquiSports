import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const DashboardCard = ({ product }) => {
    const { selectedProducts, setSelectedProducts } = useContext(AuthContext);
    const { _id, photoUrl, category, itemName, description, rating, price } = product;

    const handleDeleteBtn = () => {
        const remaining = selectedProducts.filter(p => p._id !== _id);
        setSelectedProducts(remaining);
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
                            <button onClick={()=>handleDeleteBtn(_id)} className="btn btn-primary">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;