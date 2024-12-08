import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import SelectedCard from "./SelectedCard";

const MyList = () => {
    const {selectedProducts} = useContext(AuthContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
            {
                selectedProducts.map(product => <SelectedCard
                key={product._id}
                product={product}
                ></SelectedCard>)
            }
        </div>
    );
};

export default MyList;