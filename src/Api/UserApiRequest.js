
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../helper/config';
import { setAuthToken, setEmail, setOTP,setUserDetails } from '../helper/SessionHelper';


// registration start


    export async function RegistrationRequest(firstName, lastName, email, password, photo) {
        try {
            let url = `${baseUrl}/registration`;
            let postBody = { 
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                photo: photo
            };
            let response = await axios.post(url, postBody);
    
            if (response.status === 200) {
                if (response.data.status === "fail") {
                    if (response.data.data.keyPattern.email === 1) {
                        toast.error("Email already exists");
                        return false;
                    } else {
                   toast.error("Something went wrong");
                    return false;
                }
             } 
             else {
                toast.success("Registration Successful");
                return true;
            }
        } 
        else {
            toast.error("Something went wrong");
            return false;
        }
        }
        catch (error) {
            console.error(error);
            toast.error("Something went wrong");
            return false;
        }
    }



// // Registration request

// Login request
export async function LoginRequest(email, password) {
    try {
        const url = `${baseUrl}/login`;
        const postBody = { email, password };
        const response = await axios.post(url, postBody);
        
        if (response.status === 200) {
            if (response.data.status === "fail") {
                switch (response.data.data) {
                    case "Invalid password":
                        toast.error("Wrong password");
                        return { message: "Wrong password" };
                    case "user not found":
                        toast.error("User not found");
                        return { message: "User not found" };
                    default:
                        toast.error("Something went wrong");
                        return { message: "Something went wrong" };
                }
            } else {
                setAuthToken(response.data.token);
                setUserDetails(response.data.data);
                return true;
            }
        } else {
            toast.error("Something went wrong");
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        return { message: "Something went wrong" };
    }
}

// Send email OTP
export async function RecoverVerifyEmailRequest(email) {
    try {
        const url = `${baseUrl}/email-verify/${email}`;
        const response = await axios.get(url);
        
        if (response.status === 200) {
            if (response.data.status === "fail") {
                toast.error("Failed to send OTP");
                return false;
            } else {
                toast.success("OTP sent successfully");
                setEmail(email);
                return true;
            }
        } else {
            toast.error("Something went wrong");
            return false;
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        return false;
    }
}

// OTP verification
export async function VerifyOTPRequest(email, otp) {
    try {
        const url = `${baseUrl}/otp-verify/${email}/${otp}`;
        const response = await axios.get(url);

        if (response.status === 200) {
            if (response.data.status === "fail") {
                toast.error("Invalid OTP");
                return false;
            } else {
                toast.success("OTP verified successfully");
                setOTP(otp); // Assuming you want to save OTP
                return true;
            }
        } else {
            toast.error("Something went wrong");
            return false;
        }
    } catch (error) {
       toast.error("Something went wrong");
        return false;
    }
}

// Reset password
export async function ResetPasswordRequest(email, otp, password) {
    try {
        const url = `${baseUrl}/reset-password`;
        const postBody = {
            email: email,
            otp: otp,
            password: password
        }
         
        const response = await axios.post(url, postBody);

        if (response.status === 200) {
            if (response.data.status === "fail") {
                toast.error("Something went wrong");
                return false;
            } else {
                toast.success("Password reset successfully");
                return true;
            }
        } else {
            toast.error("Something went wrong");
            return false;
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        return false;
    }
}

