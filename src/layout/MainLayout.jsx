import { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink ,Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";


const MainLayout = (props) => {

    let [show,setShow] = useState (false)





    return (
        <div>
            {/* menu start */}
            <div className='flex justify-between bg-quaternary py-3 items-center px-5'>
                <div>

                  <a to='/'> <h1 className='text-3xl text-white font-roboto font-bold uppercase'>To Do Planner</h1></a>
                </div>
                <div className='relative'>
                <div onClick={()=>setShow(!show)} className='h-20 w-20 bg-secondary rounded-full cursor-pointer overflow-hidden'>
                <img className='h-20 w-20 object-cover' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />

                </div>


            {
                show&&
                <div className='absolute w-[350px] rounded-lg top-24 right-0 bg-senary  p-6 Text-white text-center '>
                <div onClick={()=>setShow(!show)} className='absolute top-1 left-1 cursor-pointer z-50'><IoIosCloseCircleOutline className='text-2xl text-white ' /></div>
                <div className='flex gap-5 '>
                    <div className='h-[60px] w-[60px] bg-secondary rounded-full cursor-pointer overflow-hidden'>
                    <img className='h-[60px] w-[60px] object-cover' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    </div>
                    <div className='text-left'>
                        <h1 className=' text-white font-roboto font-bold uppercase'>Sarna</h1>
                        <p className='text-white'>Email@gmail.com</p>
                    </div>
                     </div>
                     <Link to='/profile' className='flex items-center cursor-pointer  gap-2 text-lg text-white mt-4'> <FaUser></FaUser> <span>Profile</span>  </Link>
                     <div className='flex items-center cursor-pointer  gap-2 text-lg text-white mt-4'> <RiLogoutBoxRLine ></RiLogoutBoxRLine> <span>Logout</span>  </div>

             </div>

            }

                </div>
                

            </div>
            {/* menu end */}
            {/* side bar and content start */}
            <div style={{height:'calc(100vh - 120px)'}} className='flex justify-between'>
                <div  className='bg-primary w-[25%]  pt-[20px] '>
                <NavLink to='/' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>All</NavLink>
              <NavLink to='/new-plan' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>New Plan</NavLink>
              <NavLink to='/todo-plan' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>Todo Plan</NavLink>
             <NavLink to='/canceled-plan' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>Canceled</NavLink>
              <NavLink to='/completed-plan' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>Completed</NavLink>
             <NavLink to='/progress-plan' className={({isActive})=>isActive ? 'text-black text-bold font-roboto  cursor-pointer block bg-yellow-500  pl-10 my-1' : 'text-white pl-10 text-bold font-roboto  cursor-pointer block my-1'}>Progress</NavLink>
                </div>
                <div className='bg-secondary w-[70%]  py-[210px] '>
                    {props.children}
                </div>
            </div>
            {/* sidebar and content end */}
        </div>

    );
};

export default MainLayout;