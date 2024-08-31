
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5"; // Corrected import for IoEyeOff
import { ColorRing } from 'react-loader-spinner';
import { LoginRequest } from "../Api/UserApiRequest"
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            setEmailError("Please Enter your Email");
           
        }
        if (password === "") {
            setPasswordError("Please Enter your Password");
            return;
        }

        if (email && password) {
            setLoading(true);
           let result = await LoginRequest(email, password);
           if (result === true) {
           toast.success("Login Successful");
               setLoading(false);
               window.location.href = "/";
           } else {
               setLoading(false);
               if (result.message === "Wrong password") {
                   setPasswordError(result.message);
               }
               if (result.message === "User not found") {
                   setEmailError(result.message);
               }
            }
        }
        
    };

    return (
        <div className='bg-senary flex justify-center items-center min-h-screen'>
            <div className='w-full md:w-[30%] bg-slate-500 p-8 rounded-lg'>
                <form className='bg-quaternary border-lg p-8 px-4' onSubmit={handleSubmit}>
                    <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Login</h1>
                    <input
                        onChange={handleEmailChange}
                        value={email}
                        className='w-full text-black font-roboto font-bold p-2 my-2 outline-none border-primary border rounded-lg'
                        type="email"
                        placeholder='Enter your Email'
                    />
                    <p className='text-black my-1'>{emailError}</p>
                    <div className='relative'>
                        {showPassword ? (
                            <IoEye onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
                        ) : (
                            <IoEyeOff onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
                        )}
                        <input
                            onChange={handlePasswordChange}
                            value={password}
                            className='w-full border text-black font-roboto font-bold px-2 border-secondary rounded-lg py-2 my-2'
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your Password'
                        />
                    </div>
                    <p className='text-black my-1'>{passwordError}</p>
                    {loading ? (
                        <div className='flex justify-center mt-2'><ColorRing /></div>
                    ) : (
                        <button type="submit" className='w-full bg-primary text-white font-roboto font-bold p-2 my-2 rounded-lg'>Login</button>
                    )}
                    <p className='mt-5 font-bold text-base font-roboto'>
                        Don't have an account? <Link to="/registration" className='text-white font-bold'>Registration</Link>
                    </p>
                    <p className='mt-5 font-bold text-base font-roboto'>
                        Forgot Password? <Link to="/forgot-password" className='text-white font-bold'>Click Here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;






// const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
// }
// const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
// }

// const handleLogin = (e) => {
//     e.preventDefault();

//     if(!email.match(regex)){
//         setEmailError("Invalid Email");
//     }


//     if(email === ""){
//         setEmailError("Please Enter your Email");
//     }
//     if(password === ""){
//         setPasswordError("Please Enter your Password");
//     }

  
   
//     if (
//          email !== "" && password !==  "" && password ) {
//             setLoading(true);
//             LoginRequest(email, password)
//             .then((response) => {
//                if(response === true){
//                    setLoading(false);
//                    navigate("/");
//                }
//                else {
//                 setLoading(false);
//                 if(response.massage === "User not found"){
//                     setEmailError("User not found");
//                  }
//                  if(response.massage === "Wrong password"){
//                     setPasswordError("Wrong password");
                 
//                  }
//                }
//                 })
                

//             }
    
// }









// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { LoginRequest } from '../Api/Api';
// import { ColorRing } from 'react-loader-spinner';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const togglePassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setEmailError("");
//     };

//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         setPasswordError("");
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         let valid = true;

//         if (!email.match(regex)) {
//             setEmailError("Invalid Email");
//             valid = false;
//         } else if (email === "") {
//             setEmailError("Please Enter your Email");
//             valid = false;
//         }

//         if (password === "") {
//             setPasswordError("Please Enter your Password");
//             valid = false;
//         }

//         if (valid) {
//             setLoading(true);
//             try {
//                 const response = await LoginRequest(email, password);
//                 setLoading(false);
//                 if (response === true) {
//                     // navigate("/");  // Assuming "/dashboard" is the correct path after login
//                 } else {
//                     if (response.message === "User not found") {
//                         setEmailError("User not found");
//                     } else if (response.message === "Wrong password") {
//                         setPasswordError("Wrong password");
//                     }
//                 }
//             } catch (error) {
//                 setLoading(false);
//                 setEmailError("An error occurred. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className='bg-senary flex justify-center items-center h-screen'>
//             <div className='w-full md:w-[30%] bg-slate-500 rounded-lg'>
//                 <form className='bg-quaternary border-lg p-8 px-4' onSubmit={handleLogin}>
//                     <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Login</h1>
//                     <input 
//                         onChange={handleEmail} 
//                         value={email}
//                         className='w-full text-black font-roboto font-bold p-2 my-2 outline-none border-primary border rounded-lg' 
//                         type="email" 
//                         placeholder='Enter your Email' 
//                     />
//                     <p className='text-black my-1'>{emailError}</p>
//                     <div className='relative'>
//                         {showPassword ? 
//                             <IoEye onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
//                             :
//                             <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
//                         }
//                         <input 
//                             onChange={handlePassword} 
//                             value={password}
//                             className='w-full border text-black font-roboto font-bold px-2 border-secondary rounded-lg py-2 my-2' 
//                             type={showPassword ? "text" : "password"} 
//                             placeholder='Enter your Password' 
//                         />
//                     </div>
//                     <p className='text-black my-1'>{passwordError}</p>
//                     {loading ?
//                         <div className='flex justify-center mt-2'><ColorRing /></div>
//                         :
//                         <button type="submit" className='w-full bg-primary text-white font-roboto font-bold p-2 my-2 rounded-lg'>Login</button>
//                     }
//                     <p className='mt-5 font-bold text-base font-roboto'> Don't have an account? <Link to="/registration" className='text-white font-bold'>Registration</Link></p>
//                     <p className='mt-5 font-bold text-base font-roboto'> Forgot Password? <Link to="/forgot-password" className='text-white font-bold'>Click Here</Link></p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


















// import  { useState } from 'react'
// import Lottie from "lottie-react";
// import loginAni from "../../public/animation/login2.json";
// import { Link} from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { LoginRequest } from '../Api/Api';
// import { useNavigate } from 'react-router-dom';
// import { ColorRing } from 'react-loader-spinner'

// const Login = () => {

   
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const[emailError, setEmailError] = useState(false);
//     const[passwordError, setPasswordError] = useState(false);

//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate=useNavigate()
   
//     const togglePassword = () => {
//         setShowPassword(!showPassword);
//     }

//       // email regex
//       var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;





// const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
// }
// const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
// }

// const handleLogin = (e) => {
//     e.preventDefault();

//     if(!email.match(regex)){
//         setEmailError("Invalid Email");
//     }


//     if(email === ""){
//         setEmailError("Please Enter your Email");
//     }
//     if(password === ""){
//         setPasswordError("Please Enter your Password");
//     }

  
   
//     if (
//          email !== "" && password !==  "" && password ) {
//             setLoading(true);
//             LoginRequest(email, password)
//             .then((response) => {
//                if(response === true){
//                    setLoading(false);
//                    navigate("/");
//                }
//                else {
//                 setLoading(false);
//                 if(response.massage === "User not found"){
//                     setEmailError("User not found");
//                  }
//                  if(response.massage === "Wrong password"){
//                     setPasswordError("Wrong password");
                 
//                  }
//                }
//                 })
                

//             }
    
// }







//     return (
//         <div className='bg-sky-400 flex items-center h-screen'>
//             <div className=' container px-2 flex justify-between items-center mx-auto '>
//                 <div className=' hidden md:block w-[60%]'>
//                     <h1 className='text-3xl text-quaternary font-roboto font-bold'>Welcome to StockRocket Platform</h1>
//                     <Lottie animationData={loginAni} loop={true} className='w-[60%]'   />
//                 </div>
//                 <div className='w-full md:w-[50%]'>
//                 <form className=' bg-quaternary border-lg p-8 px-4' onSubmit={handleLogin}>
//                     <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Login</h1>
                       
//                         <input onChange={handleEmail} className='w-full  text-black font-roboto font-bold p-2 my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
//                         <p className='text-black my-1 '>{emailError}</p>

//                         <div className='relative'>
//                         {
//                             showPassword ? 
//                             <IoEye onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoEye>
//                             :
//                             <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoMdEyeOff>
//                             }

//                         <input onChange={handlePassword} className='w-full border capitalize text-black font-roboto font-bold px-2 border-secondary rounded-lg py-2 my-2 ' type={showPassword ? "text" : "password"} placeholder='Enter your Password' />
//                         </div>
//                         <p className='text-black my-1 '>{passwordError}</p>

//                         {
//                             loading?
//                             <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
//                             :
//                             <button type="submit" className='w-full bg-primary text-septenary font-roboto font-bold p-2 my-2 rounded-lg'>Login</button>
//                             }
//                              <p className='mt-5 font-bold text-base font-roboto'> Don't have an account? <Link to="/registration" className='text-yellow-400 font-bold font-roboto font-lg'>Registration</Link></p>

//                     </form>
                    

//                 </div>
//             </div>

//         </div>
        
//     );
// };

// export default Login;

