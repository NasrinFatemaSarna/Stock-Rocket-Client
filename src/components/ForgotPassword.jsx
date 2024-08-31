
import { useState } from "react";
import { RecoverVerifyEmailRequest } from "../Api/Api";
import { useNavigate, Link } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';
import { toast } from "react-toastify";
import { setOTP } from '../helper/SessionHelper';  // Ensure correct import

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validEmail = (email) => {
        // Simple email regex for validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        if (!validEmail(inputEmail)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const handleSendEmailAndOTP = async () => {
        if (!email) {
            setEmailError("Please enter your email address");
        }
        else if (!validEmail(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setLoading(true);
            const result = await RecoverVerifyEmailRequest(email);
            setLoading(false);
            if (result === true) {
                setOTP(email);  // Save OTP or any other data as required
                toast.success("OTP sent successfully");
                navigate("/otp-verify");
            } else {
                setEmailError(result.message);
                toast.error("Something went wrong");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className="bg-white rounded-lg p-5 w-[500px]">
                <h1 className="text-center mb-7 text-quaternary font-bold text-2xl">Forgot Password</h1>
                <p className="text-secondary font-bold font-roboto">Enter your email address and we will send you a link to reset your password</p>
                <input
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    className="w-full p-2 my-2 outline-none font-roboto font-bold border-primary border rounded-lg"
                    placeholder="Enter your Email"
                />
                <p className="text-red-500 font-roboto font-bold bg-slate-400">{emailError}</p>

                {loading ? (
                    <div className="flex justify-center mt-2">
                        <ColorRing />
                    </div>
                ) : (
                    <button onClick={handleSendEmailAndOTP} className="w-full p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Send</button>
                )}

                <p className="text-blue font-bold text-base font-roboto mt-2">
                    Back to Login <Link to="/login" className="text-red-600 font-bold font-roboto font-lg">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;


























// import { useState } from "react";
// import { RecoverVerifyEmailRequest } from "../Api/Api";
// import { useNavigate, Link } from "react-router-dom";
// import { ColorRing } from 'react-loader-spinner';
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//     const [email, setEmail] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const validEmail = (email) => {
//         // Simple email regex for validation
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };

//     const handleEmailChange = (e) => {
//         const inputEmail = e.target.value;
//         setEmail(inputEmail);
//         if (!validEmail(inputEmail)) {
//             setEmailError("Please enter a valid email address");
//         } else {
//             setEmailError("");
//         }
//     };

//     const handleSendEmailAndOTP = async () => {
//         if (!email) {
//             setEmailError("Please enter your email address");
//         }
//         else if (!validEmail(email)) {
//             setEmailError("Please enter a valid email address");
//         } else {
//             setLoading(true);
//             const result = await RecoverVerifyEmailRequest(email);
//             setLoading(false);
//             if (result === true) {
//                 toast.success("OTP sent successfully");
//                 navigate("/otp-verify");
//             } else {
//                 setEmailError(result.message);
//                 toast.error("Something went wrong");
//             }
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-slate-500">
//             <div className="bg-white rounded-lg p-5 w-[500px]">
//                 <h1 className="text-center mb-7 text-quaternary font-bold text-2xl">Forgot Password</h1>
//                 <p className="text-secondary font-bold font-roboto">Enter your email address and we will send you a link to reset your password</p>
//                 <input
//                     onChange={handleEmailChange}
//                     value={email}
//                     type="email"
//                     className="w-full p-2 my-2 outline-none font-roboto font-bold border-primary border rounded-lg"
//                     placeholder="Enter your Email"
//                 />
//                 <p className="text-red-500 font-roboto font-bold bg-slate-400">{emailError}</p>

//                 {loading ? (
//                     <div className="flex justify-center mt-2">
//                         <ColorRing />
//                     </div>
//                 ) : (
//                     <button onClick={handleSendEmailAndOTP} className="w-full p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Send</button>
//                 )}

//                 <p className="text-blue font-bold text-base font-roboto mt-2">
//                     Back to Login <Link to="/login" className="text-red-600 font-bold font-roboto font-lg">Login</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;










// import { useState } from "react"
// import { RecoverVerifyEmailRequest } from "../Api/Api"
// import { useNavigate, Link } from "react-router-dom"
// import { ColorRing } from 'react-loader-spinner'





// const ForgotPassword = () => {

//     const [email, setEmail] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate=useNavigate()

//     const handleSendEmail = () => {
//         if (email.length===0) {
//             setEmailError("Please Enter your Email")
//         }
//         else{
//             setLoading(true);
//             RecoverVerifyEmailRequest(email)
//             .then((response) => {
//                 if(response== true){
//                     setLoading(false);
//                     navigate("/verify-otp")

//                 }
//                 else{
//                     setEmailError("User not found")
//                     setLoading(false);

//                 }
//             })
//         }
//     }

//     const handleSendEmailAndOtp = async () => {
//        if(!email){
//         setError("Please enter your email")
//        }
//        else if (!validEmail(email)) {
//         setError("Please enter a valid email")
//     }
//        else{
//         setLoading(true);
//         const response = await RecoverVerifyEmailRequest(email);
//         if(response === true){
//             setLoading(false);
//             navigate("/verify-otp")
//         }
//         else{
//             setError("User not found")
//             setLoading(false);
//         }
//        }

//     }



//     return (
//         <div className="flex justify-center items-center h-screen bg-slate-500">
//             <div className=" bg-white rounded-lg p-5 w-[500px]">
//             <h1 className="text-center mb-7 text-quaternary font-bold text-2xl ">Forgot Password</h1>
//             <p className="text-secondary font-bold font-roboto">Enter your email address and we will send you a link to reset your password</p>
//             <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-2 my-2 outline-none font-roboto font-bold border-primary border rounded-lg" placeholder="Enter your Email" />
//             <p className="text-red-500 font-roboto font-bold bg-slate-400">{emailError}</p>

            
//             {
                            
//                             loading?
//                             <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
//                             :
//                             <button onClick={handleSendEmail} className="w-full p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Send</button>

//             }

// <p className=' text-blue font-bold text-base font-roboto mt-2'> Back to Login <Link to="/login" className='text-red-600 font-bold font-roboto font-lg'>Login</Link></p>


//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;