import { Link } from "react-router-dom";

const ProductCard = ({ equipment }) => {
    const { _id, photoUrl, category, itemName, description, rating, price } = equipment;
    return (
        <div>
            <div className="card bg-gray-100 w-96 h-[500px] shadow-xl p-3">
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
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;