

import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsBagPlus, BsBagX, BsCartPlus, BsGraphUp } from 'react-icons/bs';
import { FaRegCircle, FaUsersLine } from 'react-icons/fa6';
import { IoCreateOutline } from 'react-icons/io5';
import { MdOutlineDirectionsBike, MdOutlineFormatListBulleted, MdSpaceDashboard } from 'react-icons/md';
import { RiBook3Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { NavLink, Outlet } from 'react-router-dom';

const MasterLayout = () => {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard className='text-3xl' />,
      url: "/",
      subMenu: [],
    },
    {
      title: "Customer",
      icon: <FaUsersLine className='text-xl' />,
      url: "/customer",
      subMenu: [
        {
          title: "Create Customer",
          icon: <AiOutlineUserAdd className='text-lg' />,
          url: "/customer-create-update",
        },
        {
          title: "Customer List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/customer-list",
        },
      ],
    },
    {
      title: "Supplier",
      icon: <TbTruckDelivery className='text-xl' />,
      url: "/supplier",
      subMenu: [
        {
          title: "Create Supplier",
          icon: <MdOutlineDirectionsBike className='text-lg' />,
          url: "/supplier-create-update",
        },
        {
          title: "Supplier List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/supplier-list",
        },
      ],
    },
    {
      title: "Expense",
      icon: <RiMoneyDollarCircleLine className='text-xl' />,
      url: "/expense",
      subMenu: [
        {
          title: "Create Expense Type",
          icon: <FaRegCircle className='text-lg' />,
          url: "/expense-type-create-update",
        },
        {
          title: "Expense Type List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/expense-type-list",
        },
        {
          title: "Create Expense",
          icon: <IoCreateOutline className='text-lg' />,
          url: "/expense-create-update",
        },
        {
          title: "Expense List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/expense-list",
        },
      ],
    },
    {
      title: "Product",
      icon: <RiBook3Line className='text-xl' />,
      url: "/product",
      subMenu: [
        {
          title: "Create Brand",
          icon: <FaRegCircle className='text-lg' />,
          url: "/brand-create-update",
        },
        {
          title: "Brand List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/brand-list",
        },
        {
          title: "Create Category",
          icon: <FaRegCircle className='text-lg' />,
          url: "/category-create-update",
        },
        {
          title: "Category List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/category-list",
        },
        {
          title: "Create Product",
          icon: <IoCreateOutline className='text-lg' />,
          url: "/product-create-update",
        },
        {
          title: "Product List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/product-list",
        },
      ],
    },
    {
      title: "Purchase",
      icon: <BsBagPlus className='text-xl' />,
      url: "/purchase",
      subMenu: [
        {
          title: "Create Purchase",
          icon: <IoCreateOutline className='text-lg' />,
          url: "/purchase-create-update",
        },
        {
          title: "Purchase List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/purchase-list",
        },
      ],
    },
    {
      title: "Sale",
      icon: <BsCartPlus className='text-xl' />,
      url: "/sale",
      subMenu: [
        {
          title: "Create Sale",
          icon: <IoCreateOutline className='text-lg' />,
          url: "/sale-create-update",
        },
        {
          title: "Sale List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/sale-list",
        },
      ],
    },
    {
      title: "Return",
      icon: <BsBagX className='text-xl' />,
      url: "/return",
      subMenu: [
        {
          title: "Create Return",
          icon: <IoCreateOutline className='text-lg' />,
          url: "/return-create-update",
        },
        {
          title: "Return List",
          icon: <MdOutlineFormatListBulleted className='text-lg' />,
          url: "/return-list",
        },
      ],
    },
    {
      title: "Report",
      icon: <BsGraphUp className='text-xl' />,
      url: "/report",
      subMenu: [
        {
          title: "Sale Report",
          icon: <FaRegCircle className='text-lg' />,
          url: "/sale-report",
        },
        {
          title: "Purchase Report",
          icon: <FaRegCircle className='text-lg' />,
          url: "/purchase-report",
        },
        {
          title: "Expense Report",
          icon: <FaRegCircle className='text-lg' />,
          url: "/expense-report",
        },
        {
          title: "Return Report",
          icon: <FaRegCircle className='text-lg' />,
          url: "/return-report",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen flex justify-between pt-[20px] px-[20px]">
        <div className="w-[25%] pb-[20px]">
          <div className="h-full bg-blue-300 p-5 rounded-[50px]">
            <h1 className="text-4xl text-white text-center font-bold">Logo</h1>

            {/* Sidebar start */}
            {sidebarItems.map((item, i) => (
              <div key={i} className="px-1 mt-2">
                {item.subMenu.length > 0 ? (
                  <div className="collapse collapse-arrow mt-2">
                    <input type="checkbox" id={`item-${i}`} />
                    <label htmlFor={`item-${i}`} className="collapse-title text-md font-sm cursor-pointer flex items-center">
                      {item.icon} <span className="ml-2">{item.title}</span>
                    </label>
                    <div className="collapse-content pl-6 ">
                      {item.subMenu.map((subItem, j) => (
                        <NavLink key={j} to={subItem.url} className="flex items-center ">
                          {subItem.icon} <span className="ml-2">{subItem.title}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink to={item.url} className="flex items-center text-md font-sm">
                    {item.icon} <span className="ml-2">{item.title}</span>
                  </NavLink>
                )}
              </div>
            ))}
            {/* Sidebar end */}
          </div>
        </div>

        <div className="w-[74%] p-5">
          <div className="flex justify-between items-center border-b pb-5 mb-4 border-accent   ">
            <h1 className="text-4xl text-black font-bold">Stock Rocket</h1>
            <div className="h-[100px] w-[100px] bg-secondary rounded-full cursor-pointer overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User"
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;





















// // Correct the imports based on the actual available icons in the library
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { BsBagPlus, BsBagX, BsCartPlus, BsGraphUp } from 'react-icons/bs';
// import { FaRegCircle, FaUsersLine } from 'react-icons/fa6';
// import { IoCreateOutline } from 'react-icons/io5';
// import { MdOutlineDirectionsBike, MdOutlineFormatListBulleted, MdSpaceDashboard } from 'react-icons/md';
// import { RiBook3Line, RiMoneyDollarCircleLine } from 'react-icons/ri'; // Updated import
// import { TbTruckDelivery } from 'react-icons/tb';
// import { Outlet, Link } from 'react-router-dom';

// const MasterLayout = () => {
//   const sidebarItems = [
//     {
//       title: "Dashboard",
//       icon: <MdSpaceDashboard className='text-2xl' />,
//       url: "/",
//       subMenu: [],
//     },
//     {
//       title: "Customer",
//       icon: <FaUsersLine className='text-2xl' />,
//       url: "/customer",
//       subMenu: [
//         {
//           title: "Create Customer",
//           icon: <AiOutlineUserAdd className='text-2xl' />,
//           url: "/customer-create-update",
//         },
//         {
//           title: "Customer List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/customer-list",
//         },
//       ],
//     },
//     {
//       title: "Supplier",
//       icon: <TbTruckDelivery className='text-2xl' />,
//       url: "/supplier",
//       subMenu: [
//         {
//           title: "Create Supplier",
//           icon: <MdOutlineDirectionsBike className='text-2xl' />,
//           url: "/supplier-create-update",
//         },
//         {
//           title: "Supplier List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/supplier-list",
//         },
//       ],
//     },
//     {
//       title: "Expense",
//       icon: <RiMoneyDollarCircleLine className='text-2xl' />,
//       url: "/expense",
//       subMenu: [
//         {
//           title: "Create Expense Type",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/expense-type-create-update",
//         },
//         {
//           title: "Expense Type List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/expense-type-list",
//         },
//         {
//           title: "Create Expense",
//           icon: <IoCreateOutline className='text-2xl' />,
//           url: "/expense-create-update",
//         },
//         {
//           title: "Expense List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/expense-list",
//         },
//       ],
//     },
//     {
//       title: "Product",
//       icon: <RiBook3Line className='text-2xl' />,
//       url: "/product",
//       subMenu: [
//         {
//           title: "Create Brand",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/brand-create-update",
//         },
//         {
//           title: "Brand List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/brand-list",
//         },
//         {
//           title: "Create Category",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/category-create-update",
//         },
//         {
//           title: "Category List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/category-list",
//         },
//         {
//           title: "Create Product",
//           icon: <IoCreateOutline className='text-2xl' />,
//           url: "/product-create-update",
//         },
//         {
//           title: "Product List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/product-list",
//         },
//       ],
//     },
//     {
//       title: "Purchase",
//       icon: <BsBagPlus className='text-2xl' />,
//       url: "/purchase",
//       subMenu: [
//         {
//           title: "Create Purchase",
//           icon: <IoCreateOutline className='text-2xl' />,
//           url: "/purchase-create-update",
//         },
//         {
//           title: "Purchase List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/purchase-list",
//         },
//       ],
//     },
//     {
//       title: "Sale",
//       icon: <BsCartPlus className='text-2xl' />,
//       url: "/sale",
//       subMenu: [
//         {
//           title: "Create Sale",
//           icon: <IoCreateOutline className='text-2xl' />,
//           url: "/sale-create-update",
//         },
//         {
//           title: "Sale List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/sale-list",
//         },
//       ],
//     },
//     {
//       title: "Return",
//       icon: <BsBagX className='text-2xl' />,
//       url: "/return",
//       subMenu: [
//         {
//           title: "Create Return",
//           icon: <IoCreateOutline className='text-2xl' />,
//           url: "/return-create-update",
//         },
//         {
//           title: "Return List",
//           icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//           url: "/return-list",
//         },
//       ],
//     },
//     {
//       title: "Report",
//       icon: <BsGraphUp className='text-2xl' />,
//       url: "/report",
//       subMenu: [
//         {
//           title: "Sale Report",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/sale-report",
//         },
//         {
//           title: "Purchase Report",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/purchase-report",
//         },
//         {
//           title: "Expense Report",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/expense-report",
//         },
//         {
//           title: "Return Report",
//           icon: <FaRegCircle className='text-2xl' />,
//           url: "/return-report",
//         },
//       ],
//     },
//   ];

    






//    return (
//     <div className="min-h-screen flex">
//       <div className="w-1/4 bg-blue-300 p-5 rounded-lg">
//         <h1 className="text-4xl text-white text-center font-bold">Logo</h1>
//         {/* side menu bar start */}
//         <div className="mt-5">
//           {sidebarItems.map((item, index) => (
//             console.log(item),
//             <div key={index} className="mb-4">
//               <div className="flex items-center mb-2">
//                 {item.icon}
//                 <Link to={item.url} className="ml-2 text-lg text-white">
//                   {item.title}
//                 </Link>
//               </div>
//               {item.subMenu.length > 0 && (
//                 <div className="ml-6">
//                   {item.subMenu.map((subItem, subIndex) => (
//                     <div key={subIndex} className="flex items-center mb-2">
//                       {subItem.icon}
//                       <Link to={subItem.url} className="ml-2 text-md text-white">
//                         {subItem.title}
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-3/4 p-5">
//         <div className="flex justify-between items-center mb-5">
//           <h1 className="text-4xl text-black font-bold">Stock Rocket</h1>
//           <div className="h-24 w-24 bg-secondary rounded-full cursor-pointer overflow-hidden">
//             <img className="h-full w-full object-cover" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
//           </div>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default MasterLayout;












// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { BsBagPlus, BsBagX, BsCartPlus, BsGraphUp } from 'react-icons/bs';
// import { FaRegCircle, FaUsersLine } from 'react-icons/fa6';
// import { IoCreateOutline } from 'react-icons/io5';
// import { MdOutlineDirectionsBike, MdOutlineFormatListBulleted, MdSpaceDashboard,RiMonyDollarCircleLine } from 'react-icons/md';
// import { RiBook3Line } from 'react-icons/ri';
// import { TbTruckDelivery } from 'react-icons/tb';
// import { Outlet } from 'react-router-dom';

// const MasterLayout = () => {

//     const sidebarItems = [
//         {
//             title: "Dashboard",
//             icon: <MdSpaceDashboard className='text-2xl' />,
//             url:"/",
//             subMenu: [],
//         },
//        {
//         title: "Customer",
//         icon: <FaUsersLine className='text-2xl' />,
//         url:"/customer",
//         subMenu: [
//             {
//                 title: "Create Customer",
//                 icon: <AiOutlineUserAdd className='text-2xl' />,
//                 url: "/customer-create-update",
//             },
//             {
//                 title: "Customer List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/customer-list",
//             },
//         ],
//        },
//        {
//         title: "Supplier",
//         icon: <TbTruckDelivery className='text-2xl' />,
//         url:"/supplier",
//         subMenu: [
//             {
//                 title: "Create Supplier",
//                 icon: <MdOutlineDirectionsBike className='text-2xl' />,
//                 url: "/supplier-create-update",
//             },
//             {
//                 title: "Supplier List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/supplier-list",
//             },
//         ],
//        },
//        {
//         title: "Expense",
//         icon: <RiMonyDollarCircleLine className='text-2xl' />,
//         url:"/expense",
//         subMenu: [
//             {
//                 title: "Create Expense Type",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/expense-type-create-update",
//             },
//             {
//                 title: "Expense Type List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/expense-type-list",
//             },
//             {
//                 title: "Create Expense",
//                 icon: <IoCreateOutline className='text-2xl' />,
//                 url: "/expense-create-update",
//             },
//             {
//                 title: "Expense List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/expense-list",
//             },
//         ],
//        },
      
//        {
//         title: "Product",
//         icon: <RiBook3Line className='text-2xl' />,
//         url:"/product",
//         subMenu: [
//             {
//                 title: "Create Brand",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/brand-create-update",
//             },
//             {
//                 title: "Brand List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/brand-list",
//             },
//             {
//                 title: "Create Category",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/category-create-update",
//             },
//             {
//                 title: "Category List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/category-list",
//             },
//             {
//                 title: "Create Product",
//                 icon: <IoCreateOutline className='text-2xl' />,
//                 url: "/product-create-update",
//             },
//             {
//                 title: "Product List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/product-list",
//             },
//         ],
//        },
//        {
//         title: "Purchase",
//         icon: <BsBagPlus className='text-2xl' />,
//         url:"/purchase",
//         subMenu: [
//             {
//                 title: "Create Purchase",
//                 icon: <IoCreateOutline className='text-2xl' />,
//                 url: "/purchase-create-update",
//             },
//             {
//                 title: "Purchase List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/purchase-list",
//             },
//         ],
//        },
//        {
//         title: "Sale",
//         icon: <BsCartPlus className='text-2xl' />,
//         url:"/sale",
//         subMenu: [
//             {
//                 title: "Create Sale",
//                 icon: <IoCreateOutline className='text-2xl' />,
//                 url: "/sale-create-update",
//             },
//             {
//                 title: "Sale List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/sale-list",
//             },
//         ],
//        },
//        {
//         title: "Return",
//         icon: <BsBagX className='text-2xl' />,
//         url:"/Return",
//         subMenu: [
//             {
//                 title: "Create Return",
//                 icon: <IoCreateOutline className='text-2xl' />,
//                 url: "/return-create-update",
//             },
//             {
//                 title: "Return List",
//                 icon: <MdOutlineFormatListBulleted className='text-2xl' />,
//                 url: "/return-list",
//             },
//         ],
//        },
//        {
//         title: "Report",
//         icon: <BsGraphUp className='text-2xl' />,
//         url:"/Report",
//         subMenu: [
//             {
//                 title: "Sale Report",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/sale-report",
//             },
//             {
//                 title: "Purchase Report",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/purchase-report",
//             },
//             {
//                 title: "Expense Report",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/expense-report",
//             },
//             {
//                 title: "Return Report",
//                 icon: <FaRegCircle className='text-2xl' />,
//                 url: "/return-report",
//             },
//         ],
//        },


//     ]


//     return (
//        <div>
//          <div className="min-h-screen flex justify-between pt-[20px] px-[20px]">
//             <div className="w-[25%] pb-[20px]">
//                 <div className=" h-full bg-blue-300 p-5 rounded-[50px]">
//                     <h1 className="text-4xl text-white text-center text-bold">Logo</h1>

//                     {/* sidebar start */}
//                     <div className="collapse collapse-arrow mt-[-20px] ">
//                   <input type="checkbox" />
//                   <div className="collapse-title text-md font-sm">Click me to show/hide content</div>
//                   <div className="collapse-content  z-[9999] mt-[-20px] pl-[30px]">
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                     </div>
//                      </div>

//                      <div className="collapse collapse-arrow mt-[-20px] ">
//                   <input type="checkbox" />
//                   <div className="collapse-title text-md font-sm">Click me to show/hide content</div>
//                   <div className="collapse-content  z-[9999] mt-[-20px] pl-[30px]">
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                    <p>hello</p>
//                     </div>
//                      </div>

//                     {/* sidebar end */}
//                     </div>
//                     </div>
                   
//             <div className="w-[74%] p-5">
//                 <div className="flex justify-between items-center">
//                     <h1 className="text-4xl text-black font-bold">Stock Rocket</h1>
//                     <div className="h-[100px] w-[100px] bg-secondary rounded-full cursor-pointer overflow-hidden">
//                         <img className='h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />

//                     </div>
//                     </div>
//                     <Outlet></Outlet>

//                 </div>
            
//         </div>
//        </div>
//     );
// };

// export default MasterLayout;







// return (
//     <div className="min-h-screen flex">
//       <div className="w-1/4 bg-blue-300 p-5 rounded-lg">
//         <h1 className="text-4xl text-white text-center font-bold">Logo</h1>
//         <div className="mt-5">
//           {sidebarItems.map((item, index) => (
//             <div key={index} className="mb-4">
//               <div className="flex items-center mb-2">
//                 {item.icon}
//                 <Link to={item.url} className="ml-2 text-lg text-white">
//                   {item.title}
//                 </Link>
//               </div>
//               {item.subMenu.length > 0 && (
//                 <div className="ml-6">
//                   {item.subMenu.map((subItem, subIndex) => (
//                     <div key={subIndex} className="flex items-center mb-2">
//                       {subItem.icon}
//                       <Link to={subItem.url} className="ml-2 text-md text-white">
//                         {subItem.title}
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-3/4 p-5">
//         <div className="flex justify-between items-center mb-5">
//           <h1 className="text-4xl text-black font-bold">Stock Rocket</h1>
//           <div className="h-24 w-24 bg-secondary rounded-full cursor-pointer overflow-hidden">
//             <img className="h-full w-full object-cover" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
//           </div>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default MasterLayout;


