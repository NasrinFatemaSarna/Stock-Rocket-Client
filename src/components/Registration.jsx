

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { ColorRing } from 'react-loader-spinner';
import { RegistrationRequest } from '../Api/Api';
import { toast } from "react-toastify";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (firstName === "") {
      setFirstNameError("Please Enter your First Name");
      isValid = false;
    }
    if (lastName === "") {
      setLastNameError("Please Enter your Last Name");
      isValid = false;
    }
    if (email === "") {
      setEmailError("Please Enter your Email");
      isValid = false;
    } else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("Invalid Email");
      isValid = false;
    }
    if (password === "") {
      setPasswordError("Please Enter your Password");
      isValid = false;
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("Please Enter your Confirm Password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const profilePic = "https://i.ibb.co/9hBCKDj/66250e5096b2e756b1c8184676ab46e9.jpg";
      const result = await RegistrationRequest(firstName, lastName, email, password, profilePic);

      setLoading(false);

      if (result) {
        toast.success("Registration Successful");
        navigate("/login");
      } else {
        toast.error("Registration Failed");
      }
    }
  };

  return (
    <div className='bg-senary flex justify-center items-center min-h-screen'>
      <div className='w-[30%] bg-blue-500 rounded-lg px-8'>
        <form className='bg-ternary items-center border-lime-black rounded-3xl border-lg p-10 px-4' onSubmit={handleSubmit}>
          <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Registration</h1>
          <input
            onChange={handleFirstName}
            value={firstName}
            className='w-full p-2 text-black font-bold font-roboto my-2 outline-none border-primary border rounded-lg'
            type="text"
            placeholder='Enter your First Name'
          />
          <p className='text-black my-1 '>{firstNameError}</p>
          <input
            onChange={handleLastName}
            value={lastName}
            className='w-full p-2 my-2 text-black font-bold font-roboto outline-none border-primary border rounded-lg'
            type="text"
            placeholder='Enter your Last Name'
          />
          <p className='text-black my-1 '>{lastNameError}</p>
          <input
            onChange={handleEmail}
            value={email}
            className='w-full p-2 text-black font-bold font-roboto my-2 outline-none border-primary border rounded-lg'
            type="email"
            placeholder='Enter your Email'
          />
          <p className='text-black my-1 '>{emailError}</p>
          <div className='relative'>
            {
              showPassword ? 
                <IoEye onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' /> :
                <IoEyeOff onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
            }
            <input
              onChange={handlePassword}
              value={password}
              className='w-full border text-black capitalize font-bold font-roboto px-2 border-secondary rounded-lg py-2 my-2'
              type={showPassword ? "text" : "password"}
              placeholder='Enter your Password'
            />
          </div>
          <p className='text-black my-1 '>{passwordError}</p>
          <input
            onChange={handleConfirmPassword}
            value={confirmPassword}
            className='w-full p-2 my-2 text-black capitalize font-bold font-roboto outline-none border-primary border rounded-lg'
            type="password"
            placeholder='Enter your Confirm Password'
          />
          <p className='text-black my-1 '>{confirmPasswordError}</p>
          
          {loading ? (
            <div className='flex justify-center mt-2 '><ColorRing /></div>
          ) : (
            <button
              type='submit'
              className='bg-quaternary text-blue py-2 mt-2 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'
            >
              Register
            </button>
          )}
          <p className='text-blue font-bold text-base font-roboto mt-2'>Already have an account? <Link to="/login" className='text-red-600 font-bold font-roboto'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Registration;








// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { ColorRing } from 'react-loader-spinner';
// import { RegistrationRequest } from '../Api/Api';
// import { toast } from "react-toastify";

// const Registration = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

 
//   const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//     setFirstNameError("");
//   };

//   const handleLastName = (e) => {
//     setLastName(e.target.value);
//     setLastNameError("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError("");
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (firstName === "") {
//       setFirstNameError("Please Enter your First Name");
//     }
//     if (lastName === "") {
//       setLastNameError("Please Enter your Last Name");
//     }
//     if (email === "") {
//       setEmailError("Please Enter your Email");
//     }
//     if (password === "") {
//       setPasswordError("Please Enter your Password");
//     }
//     if (confirmPassword === "") {
//       setConfirmPasswordError("Please Enter your Confirm Password");
//     }
//     if (firstName && lastName && email && password && confirmPassword) {

//                setLoading(true);
//                 let profilePic= "https://i.ibb.co/9hBCKDj/66250e5096b2e756b1c8184676ab46e9.jpg" 
//                let result = await RegistrationRequest(firstName, lastName, email, password, profilePic);
//                if(result === true){
//                 setLoading(false);
//                 toast.success("Registration Successful");
//                 navigate("/login");
//                }
//                else{
//                 setLoading(false);
//                 toast.error("Registration Failed");
//                }
//             }
        
//          }

//   return (
//     <div className='bg-senary flex justify-center items-center min-h-screen'>
//       <div className='w-[30%] bg-blue-500 rounded-lg px-8'>
//         <form className='bg-ternary items-center border-lime-black rounded-3xl border-lg p-10 px-4' onSubmit={handleSubmit}>
//           <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Registration</h1>
//           <input
//             onChange={handleFirstName(setFirstName, setFirstNameError)}
//             value={firstName}
//             className='w-full p-2 text-black font-bold font-roboto my-2 outline-none border-primary border rounded-lg'
//             type="text"
//             placeholder='Enter your First Name'
//           />
//           <p className='text-black my-1 '>{firstNameError}</p>
//           <input
//             onChange={handleLastName(setLastName, setLastNameError)}
//             value={lastName}
//             className='w-full p-2 my-2 text-black font-bold font-roboto outline-none border-primary border rounded-lg'
//             type="text"
//             placeholder='Enter your Last Name'
//           />
//           <p className='text-black my-1 '>{lastNameError}</p>
//           <input
//             onChange={handleEmail(setEmail, setEmailError)}
//             value={email}
//             className='w-full p-2 text-black font-bold font-roboto my-2 outline-none border-primary border rounded-lg'
//             type="email"
//             placeholder='Enter your Email'
//           />
//           <p className='text-black my-1 '>{emailError}</p>
//           <div className='relative'>
//             {
//               showPassword ? 
//                 <IoEye onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' /> :
//                 <IoEyeOff onClick={togglePassword} className='absolute top-1/2 right-5 text-2xl transform -translate-y-1/2 cursor-pointer text-primary' />
//             }
//             <input
//               onChange={handlePassword(setPassword, setPasswordError)}
//               value={password}
//               className='w-full border text-black capitalize font-bold font-roboto px-2 border-secondary rounded-lg py-2 my-2'
//               type={showPassword ? "text" : "password"}
//               placeholder='Enter your Password'
//             />
//           </div>
//           <p className='text-black my-1 '>{passwordError}</p>
//           <input
//             onChange={handleConfirmPassword(setConfirmPassword, setConfirmPasswordError)}
//             value={confirmPassword}
//             className='w-full p-2 my-2 text-black capitalize font-bold font-roboto outline-none border-primary border rounded-lg'
//             type="password"
//             placeholder='Enter your Confirm Password'
//           />
//           <p className='text-black my-1 '>{confirmPasswordError}</p>
          
//           {loading ? (
//             <div className='flex justify-center mt-2 '><ColorRing /></div>
//           ) : (
//             <button
//               type='submit'
//               className='bg-quaternary text-blue py-2 mt-2 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'
//             >
//               Register
//             </button>
//           )}
//           <p className='text-blue font-bold text-base font-roboto mt-2'>Already have an account? <Link to="/login" className='text-red-600 font-bold font-roboto'>Login</Link></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;






// import  { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { ColorRing } from 'react-loader-spinner'
// import { RegistrationRequest } from '../Api/Api';
// import { toast } from "react-toastify";

// const Registration = () => {

//     const  [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//      const [email, setEmail] = useState("");
//      const [password, setPassword] = useState("");
//      const[confirmPassword, setConfirmPassword] = useState("");
    
 
//      const [firstNameError, setFirstNameError] = useState("");
//      const [lastNameError, setLastNameError] = useState("");
//      const[emailError, setEmailError] = useState("");
//      const[passwordError, setPasswordError] = useState("");
//      const[confirmPasswordError, setConfirmPasswordError] = useState("");
 
//      const [showPassword, setShowPassword] = useState(false);
//      const [loading, setLoading] = useState(false);
//      const navigate=useNavigate()
    
//      const togglePassword = () => {
//          setShowPassword(!showPassword);
//      }
 
//        // email regex
//      //   var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
 
 
 
//  const handleFirstName = (e) => {
//      setFirstName(e.target.value);
//      setFirstNameError("");
//  }
//  const handleLastName = (e) => {
//      setLastName(e.target.value);
//      setLastNameError("");
//  }
 
//  const handleEmail = (e) => {
//      setEmail(e.target.value);
//      setEmailError("");
//  }
//  const handlePassword = (e) => {
//      setPassword(e.target.value);
//      setPasswordError("");
//  }
//  const handleConfirmPassword = (e) => {
//      setConfirmPassword(e.target.value);
//      setConfirmPasswordError("");
//  }
 
//  const handleSubmit = async (e) => {
//      e.preventDefault();
//     if(firstName === ""){
//         setFirstNameError("Please Enter your First Name");
//     }
//     if(lastName === ""){
//         setLastNameError("Please Enter your Last Name");
//     }
//     if(email === ""){
//         setEmailError("Please Enter your Email");
//     }
//     if(password === ""){
//         setPasswordError("Please Enter your Password");
//     }
//     if(confirmPassword === ""){
//         setConfirmPasswordError("Please Enter your Confirm Password");
//     }
//     if(password !== confirmPassword){
//         setConfirmPasswordError("Password does not match");
//     }
//     if(firstName  && lastName && email && password && confirmPassword){
        
//      { 
//         setLoading(true);
//         let profilePic= "https://i.ibb.co/9hBCKDj/66250e5096b2e756b1c8184676ab46e9.jpg" 
//        let result = await RegistrationRequest(firstName, lastName, email, password, profilePic);
//        if(result === true){
//         setLoading(false);
//         toast.success("Registration Successful");
//         navigate("/login");
//        }
//        else{
//         setLoading(false);
//         toast.error("Registration Failed");
//        }
//     }

//  }




//     return (
//         <div className='bg-senary flex  justify-center items-center min-h-screen '>
//             <div className=' w-[30%] bg-blue-500 rounded-lg px-8'>
//             <form className=' bg-ternary items-center border-lime-black rounded-3xl border-lg p-10 px-4' onSubmit={handleSubmit}>
//                     <h1 className='text-4xl text-septenary font-roboto  font-bold text-center mb-4'>Registration</h1>
//                        <input onChange={handleFirstName} className='w-full p-2 text-black  font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Name' />
//                        <p className='text-black my-1 '>{firstNameError}</p>
//                        <input onChange={handleLastName} className='w-full p-2 my-2 text-black  font-bold font-roboto outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Last Name' />
//                        <p className='text-black my-1 '>{lastNameError}</p>
//                         <input onChange={handleEmail} className='w-full p-2 text-black e font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
//                         <p className='text-black my-1 '>{emailError}</p>

//                         <div className='relative'>
//                         {
//                             showPassword ? 
//                             <IoEye onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoEye>
//                             :
//                             <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoMdEyeOff>
//                             }

//                         <input onChange={handlePassword} className='w-full border text-black capitalize font-bold font-roboto px-2 border-secondary rounded-lg py-2 my-2 ' type={showPassword ? "text" : "password"} placeholder='Enter your Password' />
//                         </div>
//                         <p className='text-black my-1 '>{passwordError}</p>
//                         <input onChange={handleConfirmPassword} className='w-full p-2 my-2 text-black capitalize font-bold font-roboto outline-none border-primary border rounded-lg' type="password" placeholder='Enter your Confirm Password' />
//                         <p className='text-black my-1 '>{confirmPasswordError}</p>

//                      {
//                             loading?
//                             <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
//                             :
//                             <button type='submit' className='bg-quaternary text-blue py-2 mt-2 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'>Register</button>
//                             }
//                       <p className=' text-blue font-bold text-base font-roboto mt-2'> Created account? <Link to="/login" className='text-red-600 font-bold font-roboto font-lg'>Login</Link></p>

//                     </form>
//                 </div>
//                 </div>
         

       
        
//     );
// };

// export default Registration; 

































// import  { useState } from 'react'
// import Lottie from "lottie-react";
// import regAni from "../../public/animation/registration.json";
// import { Link, useNavigate } from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { ColorRing } from 'react-loader-spinner'
// import { RegistrationRequest } from '../Api/Api';

// const Registration = () => {

//    const  [firstName, setFirstName] = useState("");
//    const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const[confirmPassword, setConfirmPassword] = useState("");
   

//     const [firstNameError, setFirstNameError] = useState(false);
//     const [lastNameError, setLastNameError] = useState(false);
//     const[emailError, setEmailError] = useState(false);
//     const[passwordError, setPasswordError] = useState(false);
//     const[confirmPasswordError, setConfirmPasswordError] = useState(false);

//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate=useNavigate()
   
//     const togglePassword = () => {
//         setShowPassword(!showPassword);
//     }

//       // email regex
//       var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;



// const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//     setFirstNameError("");
// }
// const handleLastName = (e) => {
//     setLastName(e.target.value);
//     setLastNameError("");
// }

// const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
// }
// const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
// }
// const handleConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError("");
// }

// const handleRegistration = (e) => {
//     e.preventDefault();

//     if(firstName === ""){
//         setFirstNameError("Please Enter your First Name");
//     }
//     if(lastName === ""){
//         setLastNameError("Please Enter your Last Name");
//     }

//     if(!email.match(regex)){
//         setEmailError("Invalid Email");
//     }


//     if(email === ""){
//         setEmailError("Please Enter your Email");
//     }
//     if(password === ""){
//         setPasswordError("Please Enter your Password");
//     }
//     if(confirmPassword === ""){
//         setConfirmPasswordError("Please Enter your Confirm Password");
//     }
//     if(password !== confirmPassword){
//         setConfirmPasswordError("Password does not match");
//     }
  
   
//     if (
//          firstName !== "" && lastName !==  "" && email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword)  { 
//             setLoading(true);
//             let profilePic= "https://i.ibb.co/9hBCKDj/66250e5096b2e756b1c8184676ab46e9.jpg" 
//             RegistrationRequest(firstName, lastName, email, password, profilePic)
//             .then((result) => {
//                 if(result == true){
//                     setLoading(false);
//                     navigate("/login")
//                 }
//                 else{
//                     setEmailError("Email Already Exists");
//                     setLoading(false);
                    
//                 }
                
//             })
//             console.log(firstName, lastName, email, password, confirmPassword);
       
//     }
// }





//     return (
//         <div className='bg-senary flex items-center h-screen'>
//             <div className=' container px-2 flex justify-between items-center mx-auto '>
//                 <div className=' hidden md:block  w-[60%]' >
//                     <h1 className='text-3xl text-septenary font-roboto font-bold'>Welcome to Todo Planner Platform</h1>
//                     <Lottie animationData={regAni} loop={true} className='w-[60%]'   />
//                 </div>
//                 <div className=' md:w-[50%]'>
//                 <form className=' bg-secondary border-lg p-8 px-4' onSubmit={handleRegistration}>
//                     <h1 className='text-4xl text-septenary font-roboto  font-bold text-center mb-4'>Registration</h1>
//                        <input onChange={handleFirstName} className='w-full p-2 text-black  font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Name' />
//                        <p className='text-black my-1 '>{firstNameError}</p>
//                        <input onChange={handleLastName} className='w-full p-2 my-2 text-black  font-bold font-roboto outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Last Name' />
//                        <p className='text-black my-1 '>{lastNameError}</p>
//                         <input onChange={handleEmail} className='w-full p-2 text-black e font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
//                         <p className='text-black my-1 '>{emailError}</p>

//                         <div className='relative'>
//                         {
//                             showPassword ? 
//                             <IoEye onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoEye>
//                             :
//                             <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoMdEyeOff>
//                             }

//                         <input onChange={handlePassword} className='w-full border text-black capitalize font-bold font-roboto px-2 border-secondary rounded-lg py-2 my-2 ' type={showPassword ? "text" : "password"} placeholder='Enter your Password' />
//                         </div>
//                         <p className='text-black my-1 '>{passwordError}</p>
//                         <input onChange={handleConfirmPassword} className='w-full p-2 my-2 text-black capitalize font-bold font-roboto outline-none border-primary border rounded-lg' type="password" placeholder='Enter your Confirm Password' />
//                         <p className='text-black my-1 '>{confirmPasswordError}</p>

//                      {
//                             loading?
//                             <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
//                             :
//                             <button type='submit' className='bg-quaternary text-white py-2 mt-2 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'>Register</button>
//                             }
//                       <p className=' text-septenary font-bold text-base font-roboto mt-2'> Created account? <Link to="/login" className='text-yellow-500 font-bold font-roboto font-lg'>Login</Link></p>

//                     </form>
//                 </div>
//             </div>

//         </div>
        
//     );
// };

// export default Registration;
































// import  { useState } from 'react'
// import Lottie from "lottie-react";
// import regAni from "../../public/animation/registration.json";
// import { Link, useNavigate } from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { ColorRing } from 'react-loader-spinner'
// import { RegistrationRequest } from '../Api/Api';

// const Registration = () => {

//    const  [firstName, setFirstName] = useState("");
//    const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const[confirmPassword, setConfirmPassword] = useState("");
   

//     const [firstNameError, setFirstNameError] = useState(false);
//     const [lastNameError, setLastNameError] = useState(false);
//     const[emailError, setEmailError] = useState(false);
//     const[passwordError, setPasswordError] = useState(false);
//     const[confirmPasswordError, setConfirmPasswordError] = useState(false);

//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate=useNavigate()
   
//     const togglePassword = () => {
//         setShowPassword(!showPassword);
//     }

//       // email regex
//     //   var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;



// const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//     setFirstNameError("");
// }
// const handleLastName = (e) => {
//     setLastName(e.target.value);
//     setLastNameError("");
// }

// const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
// }
// const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
// }
// const handleConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError("");
// }

// const handleRegistration = (e) => {
//     e.preventDefault();

//     if(firstName === ""){
//         setFirstNameError("Please Enter your First Name");
//     }
//     if(lastName === ""){
//         setLastNameError("Please Enter your Last Name");
//     }

//     // if(!email.match(regex)){
//     //     setEmailError("Invalid Email");
//     // }


//     if(email === ""){
//         setEmailError("Please Enter your Email");
//     }
//     if(password === ""){
//         setPasswordError("Please Enter your Password");
//     }
//     if(confirmPassword === ""){
//         setConfirmPasswordError("Please Enter your Confirm Password");
//     }
//     if(password !== confirmPassword){
//         setConfirmPasswordError("Password does not match");
//     }
  
   
//     if (
//          firstName !== "" && lastName !==  "" && email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword)  { 
//             setLoading(true);
//             let profilePic= "https://i.ibb.co/9hBCKDj/66250e5096b2e756b1c8184676ab46e9.jpg" 
//             RegistrationRequest(firstName, lastName, email, password, profilePic)
//             .then((result) => {
//                 if(result == true){
//                     setLoading(false);
//                     navigate("/login")
//                 }
//                 else{
//                     setEmailError("Email Already Exists");
//                     setLoading(false);
                    
//                 }
//                 console.log(firstName, lastName, email, password, confirmPassword);
       
                
//             })
            
//     }
// }





//     return (
//         <div className='bg-senary flex items-center h-screen'>
//             <div className=' container px-2 flex justify-between items-center mx-auto '>
//                 <div className=' hidden md:block  w-[60%]' >
//                     <h1 className='text-3xl text-septenary font-roboto font-bold'>Welcome to Todo Planner Platform</h1>
//                     <Lottie animationData={regAni} loop={true} className='w-[60%]'   />
//                 </div>
//                 <div className=' md:w-[50%]'>
//                 <form className=' bg-secondary border-lg p-8 px-4' onSubmit={handleRegistration}>
//                     <h1 className='text-4xl text-septenary font-roboto  font-bold text-center mb-4'>Registration</h1>
//                        <input onChange={handleFirstName} className='w-full p-2 text-black  font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Name' />
//                        <p className='text-black my-1 '>{firstNameError}</p>
//                        <input onChange={handleLastName} className='w-full p-2 my-2 text-black  font-bold font-roboto outline-none border-primary border rounded-lg' type="text" placeholder='Enter your Last Name' />
//                        <p className='text-black my-1 '>{lastNameError}</p>
//                         <input onChange={handleEmail} className='w-full p-2 text-black  font-bold font-roboto my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
//                         <p className='text-black my-1 '>{emailError}</p>

//                         <div className='relative'>
//                         {
//                             showPassword ? 
//                             <IoEye onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoEye>
//                             :
//                             <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoMdEyeOff>
//                             }

//                         <input onChange={handlePassword} className='w-full border text-black  font-bold font-roboto px-2 border-secondary rounded-lg py-2 my-2 ' type={showPassword ? "text" : "password"} placeholder='Enter your Password' />
//                         </div>
//                         <p className='text-black my-1 '>{passwordError}</p>
//                         <input onChange={handleConfirmPassword} className='w-full p-2 my-2 text-black font-bold font-roboto outline-none border-primary border rounded-lg' type="password" placeholder='Enter your Confirm Password' />
//                         <p className='text-black my-1 '>{confirmPasswordError}</p>

//                      {
//                             loading?
//                             <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
//                             :
//                             <button type='submit' className='bg-quaternary text-white py-2 mt-2 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'>Register</button>
//                             }
//                       <p className=' text-septenary font-bold text-base font-roboto mt-2'> Created account? <Link to="/login" className='text-yellow-500 font-bold font-roboto font-lg'>Login</Link></p>
//                       <Link to="/forgot-password"><p className='text-white mt-2  font-bold inline-block font-roboto font-lg'>Forgot Password?</p></Link>

//                     </form>
//                 </div>
//             </div>

//         </div>
        
//     );
// };

// export default Registration;



























// import  { useState } from 'react'
// import { Link} from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import { LoginRequest } from '../Api/Api';
// import { useNavigate } from 'react-router-dom';
// import { ColorRing } from 'react-loader-spinner'

// const Registration = () => {

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
// return (
       
//         <div className='bg-senary flex  justify-center items-center h-screen'>
//             <div className='w-full md:w-[30%]'>
//                 <form className=' bg-quaternary border-lg p-8 px-4' onSubmit={handleLogin}>
//                     <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Registration</h1>
                       
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
//                             <button type="submit" className='w-full bg-primary text-white font-roboto font-bold p-2 my-2 rounded-lg'>Login</button>
//                             }
//                              <p className='mt-5 font-bold text-base font-roboto'> Don't have an account? <Link to="/registration" className='text-blue-600 font-bold font-roboto font-lg'>Registration</Link></p>
//                              <p className='mt-5 font-bold text-base font-roboto'> Forgot Password? <Link to="/forgot-password" className='text-blue-600 font-bold font-roboto font-lg'>Click Here</Link></p>

//                     </form>
                    

//                 </div>
//             </div>

       
//     );
// };

// export default Registration;

