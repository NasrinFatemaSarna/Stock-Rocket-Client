
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const OtpVerify = lazy(() => import('../components/OtpVerify'));

const OtpPage = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <OtpVerify />
            </Suspense>
        </div>
    );
};

export default OtpPage;

