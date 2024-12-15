import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SelectedCard from "./SelectedCard";
import PageTitle from "./PageTitle";

const MyList = () => {
    const { user, state } = useContext(AuthContext);
        const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch(`http://localhost:5000/myList/${user?.email}`)
                .then(res => res.json())
                .then(data => setData(data))
        }, [state]);

    return (
        <div>
            <PageTitle title="EquiSports | My List"></PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
                {
                    data.length == 0 ?
                        <div className="md:ml-96 w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Added Items</h2>
                        </div> :
                        data.map(product => <SelectedCard
                            key={product._id}
                            product={product}
                        ></SelectedCard>)
                }
            </div>
        </div>
    );
};

export default MyList;