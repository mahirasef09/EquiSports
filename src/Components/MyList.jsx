import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import SelectedCard from "./SelectedCard";
import PageTitle from "./PageTitle";

const MyList = () => {
    const { selectedProducts } = useContext(AuthContext);

    return (
        <div>
            <PageTitle title="EquiSports | My List"></PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
                {
                    selectedProducts.length == 0 ?
                        <div className="md:ml-96 w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Selected Items</h2>
                        </div> :
                        selectedProducts.map(product => <SelectedCard
                            key={product._id}
                            product={product}
                        ></SelectedCard>)
                }
            </div>
        </div>
    );
};

export default MyList;