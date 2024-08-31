
import { lazy, Suspense } from 'react'
import LoaderUser from '../components/users/LoaderUser';


const CustomerCreateUpdatePage = () => {
    const CustomerCreateUpdate = lazy(() => import('../components/CustomerCreateUpdate'));

    return (
        <div>
             <Suspense fallback={<LoaderUser />}>
            <CustomerCreateUpdate/>
        </Suspense>
           
        </div>
    );
};

export default CustomerCreateUpdatePage;