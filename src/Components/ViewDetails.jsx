
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import PageTitle from './PageTitle';

const ViewDetails = () => {
    const { handleSelectedProduct } = useContext(AuthContext);

    const product = useLoaderData();
    const { _id, photoUrl, category, itemName, description, customization, rating, price, processingTime, stockStatus, userName, userEmail } = product;

    return (
        <div>
            <PageTitle title="EquiSports | Product Details"></PageTitle>
            <div className="w-11/12 mx-auto my-5">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={photoUrl}
                            alt="Movie"
                            className='md:w-96 h-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">{category}!</h2>
                        <p><span className="font-bold">Name:</span> {itemName}</p>
                        <p><span className="font-bold">Description:</span> {description}</p>
                        <p><span className="font-bold">Customization:</span> {customization}</p>
                        <p><span className="font-bold">Rating:</span> {rating}</p>
                        <p><span className="font-bold">Price:</span> ${price}</p>
                        <p><span className="font-bold">Processing Time:</span> {processingTime}</p>
                        <p><span className="font-bold">Stock Status:</span> {stockStatus}</p>
                        <p><span className="font-bold">Added by:</span> {userName}</p>
                        <p><span className="font-bold">Email of the person who added:</span> {userEmail}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/dashboard`}>
                                <button onClick={() => handleSelectedProduct(product)} className="btn btn-primary">Select</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;