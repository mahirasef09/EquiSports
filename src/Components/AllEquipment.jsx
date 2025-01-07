import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "./PageTitle";
import ProductCard from "./ProductCard";

const AllEquipment = () => {
    const { user, state } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://server-of-equisports.vercel.app/allEquipment')
            .then(res => res.json())
            .then(data => setData(data))
    }, [user?.email, state]);

    const handleSortAscending = () => {
        const sortedData = [...data].sort((a, b) => a.price - b.price);
        setData(sortedData);
    }

    const handleSortDescending = () => {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        setData(sortedData);
    }

    return (
        <div>
            <PageTitle title="EquiSports | All Equipment"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">All Sport Items</h2>
            </div>
            <div className="flex justify-center items-center gap-10 my-5">
                <button onClick={handleSortAscending} className="btn btn-sm btn-success">Sort by Ascending</button>
                <button onClick={handleSortDescending} className="btn btn-sm btn-success">Sort by Descending</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    data.length == 0 ?
                        <div className="md:ml-96 w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Items</h2>
                        </div> :
                        data.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllEquipment;