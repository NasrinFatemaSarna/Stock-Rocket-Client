


import { lazy, Suspense } from 'react'
import LoaderUser from '../components/users/LoaderUser';


const CustomerListPage = () => {
    const CustomerList = lazy(() => import('../components/CustomerList'));

    return (
        <div>
             <Suspense fallback={<LoaderUser />}>
            <CustomerList/>
        </Suspense>
           
        </div>
    );
};

export default CustomerListPage;




 

