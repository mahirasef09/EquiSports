import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import PageTitle from './PageTitle';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    const { selectedProducts } = useContext(AuthContext);

    return (
        <div>
            <PageTitle title="EquiSports | Dashboard"></PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
                {
                    selectedProducts.length == 0 ?
                        <div className="md:ml-96 w-full">
                            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">There is No Selected Items</h2>
                        </div> :
                        selectedProducts.map(product => <DashboardCard
                            key={product._id}
                            product={product}
                        ></DashboardCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;