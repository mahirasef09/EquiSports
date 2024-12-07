import { Link } from "react-router-dom";

const SelectedCard = ({product}) => {
    const {photoUrl, category, itemName, description, rating, price} = product;
    return (
        <div>
            <div className="card bg-gray-100 w-80 h-[500px] shadow-xl p-3">
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
                            <Link to={`/updateEquipment`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
                            <button className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;