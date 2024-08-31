
import { useState } from "react";
import { ResetPasswordRequest } from "../Api/Api";
import { getEmail, getOTP } from "../helper/SessionHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSetNewPassword = async () => {
        let valid = true;

        // Password validation
        if (password.trim() === "") {
            setPasswordError("Please enter your password");
            valid = false;
        } else {
            setPasswordError("");
        }

        // Confirm password validation
        if (confirmPassword.trim() === "") {
            setConfirmPasswordError("Please confirm your password");
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            valid = false;
        } else {
            setConfirmPasswordError("");
        }

        if (valid) {
            const result = await ResetPasswordRequest(getEmail(), getOTP(), password);
            if (result === true) {
                toast.success("Password changed successfully");
                navigate("/login");
                localStorage.removeItem("otp");
                localStorage.removeItem("email");
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[400px] p-10 bg-blue-600 rounded-lg mx-auto shadow-lg">
                <h1 className="text-2xl font-bold text-white mb-2">New Password</h1>

                {/* Display email (optional) */}
                <input
                    className="w-full p-2 rounded-lg mb-3"
                    type="email"
                    placeholder="Enter your email"
                    defaultValue={getEmail()?getEmail():""}
                    readOnly
                />
                
                

                {/* Password input */}
                <input
                    className="w-full p-2 rounded-lg mb-3 mt-4"
                    type="password"
                    placeholder="Enter your new  password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-white">{passwordError}</p>}

                {/* Confirm password input */}
                <input
                    className="w-full p-2 rounded-lg mb-3 mt-4"
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && <p className="text-white">{confirmPasswordError}</p>}

                {/* Submit button */}
                <button
                    onClick={handleSetNewPassword}
                    className="w-full p-2 mt-6 bg-white text-blue-600  rounded-lg"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NewPassword;









// import { useState } from "react";
// import { ResetPasswordRequest } from "../Api/Api";
// import { getEmail, getOTP } from "../helper/SessionHelper";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const NewPassword = () => {

//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [confirmPasswordError, setConfirmPasswordError] = useState("");

//     const navigate = useNavigate();

//     const handleSetNewPassword = async () => {
//         let valid = true;

//         if (password === "") {
//             setPasswordError("Please Enter your Password");
//             valid = false;
//         } else {
//             setPasswordError("");
//         }

//         if (confirmPassword === "") {
//             setConfirmPasswordError("Please Enter your Confirm Password");
//             valid = false;
//         } else {
//             setConfirmPasswordError("");
//         }

//         if (password  && confirmPassword && password===confirmPassword) {
//             console.log("Passwords match");
//             setConfirmPasswordError("Passwords do not match");
//             valid = false;
//         } else if (password === confirmPassword) {
//             setConfirmPasswordError("");
//         }

//         if (valid) {
//             const result = await ResetPasswordRequest(getEmail(), getOTP(), password);
//             if (result === true) {
                
//                 toast.success("Password changed successfully");
//                 navigate("/login");
//                 localStorage.removeItem("otp");
//                 localStorage.removeItem("email");
//             } else {
//                 toast.error("Something went wrong");
//             }
//         }
        
//     };

//     return (
//         <div className="h-screen flex justify-center items-center">
//             <div className="w-[400px] p-10 bg-blue-600 rounded-lg mx-auto shadow-lg">
//                 <h1 className="text-2xl font-bold text-white mb-2">New Password</h1>

//                <input className="w-full p-2 rounded-lg mb-2" defaultValue={getEmail()?getEmail():""} 
//                placeholder="Enter your new password" type="email" readOnly />

//                <input className="w-full p-2 rounded-lg mb-2" 
//                placeholder="Enter your confirm password" type="password" onChange={(e) => setPassword(e.target.value)}
//                value={password}  />
//                <input type="text" className="w-full p-2 rounded-lg mb-2" placeholder="Enter your confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
//                <button onClick={handleSetNewPassword} className="w-full p-2 bg-white text-blue-600 rounded-lg" ></button>


//             </div>

//         </div>
//     );
// };

// export default NewPassword;
