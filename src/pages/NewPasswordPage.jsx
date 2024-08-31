

import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const ResetPassword = lazy(() => import('../components/NewPassword'));

const NewPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <ResetPassword/>
            </Suspense>
        </div>
    );
};

export default NewPasswordPage;
