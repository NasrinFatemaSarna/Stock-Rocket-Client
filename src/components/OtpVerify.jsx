

// import VerificationInput from "react-verification-input";
// import { useState } from "react";
// import { VerifyOTPRequest } from "../Api/Api";
// import { getEmail } from "../helper/SessionHelper";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';

// const OtpVerify = () => {
//     const [otp, setOtp] = useState("");
//     const [otpError, setOtpError] = useState("");

//     const navigate = useNavigate();

//     const handleVerifyOtp = async () => {
//         if (otp.length === 6) {
//             const result = await VerifyOTPRequest(getEmail(), otp);
//             if (result === true) {
//                 toast.success("OTP verified successfully");
//                 navigate("/create-new-password");
//                 setOtp("");
//                 setOtpError(""); // Clear the error message if OTP is verified successfully
//             } else {
//                 setOtpError("Invalid OTP. Please try again.");
//                 toast.error("Invalid OTP. Please try again.");
//             }
//         } else {
//             setOtpError("Please enter a valid 6-digit OTP.");
//             toast.error("Please enter a valid 6-digit OTP.");
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-slate-500">
//             <div className="bg-orange-300 rounded-lg p-5 w-[500px] flex flex-col items-center gap-3">
//                 <h1 className="text-center mb-7 text-black font-bold text-2xl">OTP</h1>
//                 <VerificationInput
//                     validChars="0123456789"
//                     length={6}
//                     onChange={setOtp} // Correctly set the OTP value
//                 />
//                 <p className="text-red-500 font-roboto font-bold">{otpError}</p>
//                 <button onClick={handleVerifyOtp} className="p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Submit</button>
//             </div>
//         </div>
//     );
// };

// export default OtpVerify;





import VerificationInput from "react-verification-input";
import { useState } from "react";
import { VerifyOTPRequest } from "../Api/Api";
import { getEmail, setOTP } from "../helper/SessionHelper";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const OtpVerify = () => {
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const navigate = useNavigate();

    const handleVerifyOtp = async () => {
        if (otp.length === 6) {
            try {
                const result = await VerifyOTPRequest(getEmail(), otp);
                if (result===true) {
                    toast.success("OTP verified successfully");
                    setOTP(""); // Save OTP in localStorage if needed
                    navigate("/create-new-password");
                } else {
                    setOtpError("Invalid OTP. Please try again.");
                    toast.error("Invalid OTP. Please try again.");
                }
            } catch (error) {
                console.error("Error verifying OTP:", error);
                toast.error("Failed to verify OTP. Please try again later.");
            }
        } else {
            setOtpError("Please enter a valid 6-digit OTP.");
            toast.error("Please enter a valid 6-digit OTP.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className="bg-orange-300 rounded-lg p-5 w-[500px] flex flex-col items-center gap-3">
                <h1 className="text-center mb-7 text-black font-bold text-2xl">OTP Verification</h1>
                <VerificationInput
                    validChars="0123456789"
                    length={6}
                    onChange={setOtp}
                />
                <p className="text-red-500 font-roboto font-bold">{otpError}</p>
                <button onClick={handleVerifyOtp} className="p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Verify OTP</button>
            </div>
        </div>
    );
};

export default OtpVerify;












// import VerificationInput from "react-verification-input";
// import { useState } from "react";
// import { OtpVerifyRequest } from "../Api/Api"
// import { getEmail } from "../helper/SessionHelper";
// import { useNavigate } from "react-router-dom";



// const Otp = () => {

//     const [otp,setOtp] = useState("0")
//     const [otpError,setOtpError] = useState("")
//     const navigate = useNavigate("")



//     const handleVerifyOtp = () => {
//         if(otp.length===6){
//            OtpVerifyRequest(getEmail(),otp)
//            .then((response) => {
//             if(response===true){
//                 navigate("/reset-password")
//             }
//             else{
//                 setOtpError("invalid Otp")
//             }
               
//            })
        

//         }
//         else{
//             setOtpError("valid Otp")
//         }
//     }



//     return (
       
//             <div className="flex justify-center items-center h-screen bg-slate-500">
//             <div className=" bg-orange-300 rounded-lg p-5 w-[500px] flex flex-col items-center gap-3">
//             <h1 className="text-center mb-7 text-black font-bold text-2xl ">OTP</h1>
//             <VerificationInput validChars="0123456789" onChange={ (e) => setOtp(e)} />
//             <p className="text-red-500 font-roboto font-bold bg-slate-400">{otpError}</p>
//             <button onClick={handleVerifyOtp} className=" p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Submit</button>
            

//             </div>
//         </div>
//     );
// };

// export default Otp;