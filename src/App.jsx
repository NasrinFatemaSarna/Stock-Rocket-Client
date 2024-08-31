
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./pages/LoginPage";
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OtpPage from './pages/OtpPage';
import NewPasswordPage from './pages/NewPasswordPage';
import { getAuthToken } from "./helper/SessionHelper";
import MasterLayout from "./components/layout/MasterLayout";
import CustomerCreateUpdatePage from "./pages/CustomerCreateUpdatePage";
import ProfilePage from "./pages/ProfilePage";
import CustomerListPage from "./pages/CustomerListPage";

function App() {
  const isAuthenticated = getAuthToken();

  const authenticRoutes = [
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { path: "/", element: <h1>Dashboard</h1> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/customer-create-update", element: <CustomerCreateUpdatePage /> },
        { path: "/customer-create-update/:id", element: <CustomerCreateUpdatePage /> },
        { path: "/customer-list", element: <CustomerListPage /> },
        { path: "/supplier-create-update", element: <h1>Supplier Create Update</h1> },
        { path: "/supplier-create-update/:id", element: <h1>Supplier</h1> },
        { path: "/supplier-list", element: <h1>Supplier List</h1> },
        { path: "/expense-type-create-update", element: <h1>Expense Create Update</h1> },
        { path: "/expense-type-create-update/:id", element: <h1>Expense</h1> },
        { path: "/expense-type-list", element: <h1>Expense List</h1> },
        { path: "/expense-create-update", element: <h1>Expense Create Update</h1> },
        { path: "/expense-create-update/:id", element: <h1>Expense</h1> },
        { path: "/expense-list", element: <h1>Expense List</h1> },
        { path: "/brand-create-update", element: <h1>Brand Create Update</h1> },
        { path: "/brand-create-update/:id", element: <h1>Brand</h1> },
        { path: "/brand-list", element: <h1>Brand List</h1> },
        { path: "/category-create-update", element: <h1>Category Create Update</h1> },
        { path: "/category-create-update/:id", element: <h1>Category</h1> },
        { path: "/category-list", element: <h1>Category List</h1> },
        { path: "/product-create-update", element: <h1>Product Create Update</h1> },
        { path: "/product-create-update/:id", element: <h1>Product</h1> },
        { path: "/product-list", element: <h1>Product List</h1> },
        { path: "/purchase-create-update", element: <h1>Purchase Create Update</h1> },
        { path: "/purchase-create-update/:id", element: <h1>Purchase</h1> },
        { path: "/purchase-list", element: <h1>Purchase List</h1> },
        { path: "/sale-create-update", element: <h1>Sale Create Update</h1> },
        { path: "/sale-list", element: <h1>Sale List</h1> },
        { path: "/return-create-update", element: <h1>Return Create Update</h1> },
        { path: "/return-list", element: <h1>Return List</h1> },
        { path: "/sale-report", element: <h1>Sale Report</h1> },
        { path: "/purchase-report", element: <h1>Purchase Report</h1> },
        { path: "/return-report", element: <h1>Return Report</h1> },
        { path: "/expense-report", element: <h1>Expense Report</h1> },
        { path: "*", element: <h1>Not found</h1> },
      ],
    },
  ];

  const unauthenticRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <RegistrationPage /> },
    { path: "/forgot-password", element: <ForgotPasswordPage /> },
    { path: "/otp-verify", element: <OtpPage /> },
    { path: "/create-new-password", element: <NewPasswordPage /> },
    { path: "/reset-password", element: <NewPasswordPage /> },
    { path: "*", element: <h1>Page Not Found</h1> },
  ];

  const routes = isAuthenticated ? authenticRoutes : unauthenticRoutes;

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;















// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import './App.css';
// import Login from "./pages/LoginPage";
// import RegistrationPage from './pages/RegistrationPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import OtpPage from './pages/OtpPage';
// import NewPasswordPage from './pages/NewPasswordPage';
// import { getAuthToken } from "./helper/SessionHelper";
// import MasterLayout from "./components/layout/MasterLayout";
// import CustomerCreateUpdatePage from "./pages/CustomerCreateUpdatePage";
// import ProfilePage from "./pages/ProfilePage";
// import CustomerListPage from "./pages/CustomerListPage";
// import CustomerCreateUpdatePage from "./pages/CustomerCreateUpdatePage";

// function App() {
//   const isAuthenticated = getAuthToken();

//   const authenticRoutes = [
//     {
//       path: "/",
//       element: <MasterLayout />,
//       children: [
//         { path: "/", element: <h1>Dashboard</h1> },
//         { path: "/profile", element: ProfilePage },
//         { path: "/customer-create-update", element: <CustomerCreateUpdatePage /> },
//         { path: "/customer-create-update/:id", element: <CustomerCreateUpdatePage/> },
//         { path: "/customer-list", element: <CustomerListPage/> },
//         { path: "/supplier-create-update", element: <h1>Supplier Create Update</h1> },
//         { path: "/supplier-create-update/:id", element: <h1>Supplier</h1> },
//         { path: "/supplier-list", element: <h1>Supplier List</h1> },
//         { path: "/expense-type-create-update", element: <h1>Expense Create Update</h1> },
//         { path: "/expense-type-create-update/:id", element: <h1>Expense</h1> },
//         { path: "/expense-type-list", element: <h1>Expense List</h1> },
//         { path: "/expense-create-update", element: <h1>Expense Create Update</h1> },
//         { path: "/expense-create-update/:id", element: <h1>Expense</h1> },
//         { path: "/expense-list", element: <h1>Expense List</h1> },
//         { path: "/brand-create-update", element: <h1>Brand Create Update</h1> },
//         { path: "/brand-create-update/:id", element: <h1>Brand</h1> },
//         { path: "/brand-list", element: <h1>Brand List</h1> },
//         { path: "/category-create-update", element: <h1>Category Create Update</h1> },
//         { path: "/category-create-update/:id", element: <h1>Category</h1> },
//         { path: "/category-list", element: <h1>Category List</h1> },
//         { path: "/product-create-update", element: <h1>Product Create Update</h1> },
//         { path: "/product-create-update/:id", element: <h1>Product</h1> },
//         { path: "/product-list", element: <h1>Product List</h1> },
//         { path: "/purchase-create-update", element: <h1>Purchase Create Update</h1> },
//         { path: "/purchase-create-update/:id", element: <h1>Purchase</h1> },
//         { path: "/purchase-list", element: <h1>Purchase List</h1> },
//         { path: "/sale-create-update", element: <h1>Sale Create Update</h1> },
//         { path: "/sale-list", element: <h1>Sale List</h1> },
//         { path: "/return-create-update", element: <h1>Return Create Update</h1> },
//         { path: "/return-list", element: <h1>Return List</h1> },
//         { path: "/sale-report", element: <h1>Sale Report</h1> },
//         { path: "/purchase-report", element: <h1>Purchase Report</h1> },
//         { path: "/return-report", element: <h1>Return Report</h1> },
//         { path: "/expense-report", element: <h1>Expense Report</h1> },
//         { path: "*", element: <h1>Not found</h1> },
//       ],
//     },
//   ];

//   const unauthenticRoutes = [
//     { path: "/login", element: <Login /> },
//     { path: "/registration", element: <RegistrationPage /> },
//     { path: "/forgot-password", element: <ForgotPasswordPage /> },
//     { path: "/otp-verify", element: <OtpPage /> },
//     { path: "/create-new-password", element: <NewPasswordPage /> },
//     { path: "/reset-password", element: <NewPasswordPage /> },
//     { path: "*", element: <h1>Page Not Found</h1> },
//   ];

//   const routes = isAuthenticated ? authenticRoutes : unauthenticRoutes;

//   const router = createBrowserRouter(routes);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
















// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import './App.css';
// import Login from "./pages/LoginPage"
// import RegistrationPage from './pages/RegistrationPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';
// import OtpPage from './pages/OtpPage';
// import NewPasswordPage from './pages/NewPasswordPage';
// import { getAuthToken } from "./helper/SessionHelper";
// import MasterLayout from "./components/layout/MasterLayout";


// function App() {
//   const authenticRoutes = getAuthToken() ? 
//   [
//     {
//       path: "/",
//       element: <MasterLayout/>,
//       children: [
//         {
//           path: "/",
//           element: <h1>Dashbord</h1>,
//         },
//     {
//       path: "/profile",
//       element: <h1>Profile</h1>,
//     },
//     {
//       path: "/customer-create-update",
//       element: <h1>Customer Create Update</h1>,
//     },
//     {
//       path: "/customer-create-update/:id",
//       element: <h1>Customer </h1>,
//     },
//     {
//       path: "/customer-list",
//       element: <h1>Customer List</h1>,
//     },
   
//     {
//       path: "/supplier-create-update",
//       element: <h1>Supplier Create Update</h1>,
//     },
//     {
//       path: "/supplier-create-update/:id",
//       element: <h1>Supplier</h1>,
//     },
//     {
//       path: "/supplier-list",
//       element: <h1>Supplier List</h1>,
//     },
//     {
//       path: "/expense-type-create-update",
//       element: <h1>Expense Create Update</h1>,
//     },
//     {
//       path: "/expense-type-create-update/:id",
//       element: <h1>Expense</h1>,
//     },
//     {
//       path: "/expense-type-list",
//       element: <h1>Expense List</h1>,
//     },
//     {
//       path: "/expense-create-update",
//       element: <h1>Expense Create Update</h1>,
//     },
//     {
//       path: "/expense-create-update/:id",
//       element: <h1>Expense</h1>,
//     },
//     {
//       path: "/expense-list",
//       element: <h1>Expense List</h1>,
//     },
//     {
//       path: "/brand-create-update",
//       element: <h1>Brand Create Update</h1>,
//     },
//     {
//       path: "/brand-create-update/:id",
//       element: <h1>Brand</h1>,
//     },
//     {
//       path: "/brand-list",
//       element: <h1>Brand List</h1>,
//     },
//     {
//       path: "/category-create-update",
//       element: <h1>Category Create Update</h1>,
//     },
//     {
//       path: "/category-create-update/:id",
//       element: <h1>Category</h1>,
//     },
//     {
//       path: "/category-list",
//       element: <h1>Category List</h1>,
//     },
//     {
//       path: "/product-create-update",
//       element: <h1>Product Create Update</h1>,
//     },
//     {
//       path: "/product-create-update/:id",
//       element: <h1>Product</h1>,
//     },
//     {
//       path: "/product-list",
//       element: <h1>Product List</h1>,
//     },
//     {
//       path: "/purchase-create-update",
//       element: <h1>Purchase Create Update</h1>,
//     },
//     {
//       path: "/purchase-create-update/:id",
//       element: <h1>Purchase</h1>,
//     },
//     {
//       path: "/purchase-list",
//       element: <h1>Purchase List</h1>,
//     },
//    {
//     path: "/sale-create-update",
//     element: <h1>Sale Create Update</h1>,
//    },
  
//    {
//     path: "/sale-list",
//     element: <h1>Sale List</h1>,
//    },
//    {
//     path: "/return-create-update",
//     element: <h1>Return Create Update</h1>,
//    },

//    {
//     path: "/return-list",
//     element: <h1>Return List</h1>,
//    },
//   {
//     path: "/sale-report",
//     element: <h1>Sale Report</h1>,
//   },
//    {
//     path: "/purchase-report",
//     element: <h1>Purchase Report</h1>,
//    },
//    {
//     path: "/return-report",
//     element: <h1>Return Report</h1>,
//    },
//    {
//     path: "/expense-report",
//     element: <h1>Expense Report</h1>,
//    },
//    {
//     path: "*",
//     element: <h1>Not found</h1>,
//    },
//   ],
// },

//   ]

//   :
  
//   [
//     {
//       path: "/login",
//       element: <Login />,
//     },
  
    
//     {
//       path: "/registration",
//       element: <RegistrationPage />,
//     },
//     {
//       path: "/forgot-password",
//       element: <ForgotPasswordPage />,
//     },
//     {
//       path: "/otp-verify",
//       element: <OtpPage />,
//     },
//     {
//       path: "/create-new-password",
//       element: <NewPasswordPage />,
//     },
//     {
//       path: "/reset-password",
//       element: <NewPasswordPage />,
//     },
//     {
//       path: "/*",
//       element: <h1>Page Not Found</h1>,
//     },
//   ]
   
  



//   const router = createBrowserRouter(authenticRoutes);
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;







// // import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import './App.css'


// // import Login from "./pages/LoginPage"
// // import RegistrationPage from "./pages/RegistrationPage"
// // import ForgotPasswordPage from "./pages/ForgotPasswordPage"
// // import NewPasswordPage from "./pages/NewPasswordPage"
// // import OtpPage from "./pages/OtpPage"



// // function App() {
 

// //   return (
// //     <>
// //     <BrowserRouter>
// //     <Routes>
       
// //         <Route path="/login" element={<Login/>}></Route>
// //         <Route path="/Registration" element={<RegistrationPage/>}></ Route>
// //         <Route path="/forgot-password" element={<ForgotPasswordPage/>}></Route>
// //         <Route path="/otp-verify" element={<OtpPage/>}></Route>
// //         <Route path="/create-new-password" element={<NewPasswordPage/>}></Route>
// //         <Route path="/reset-password" element={<NewPasswordPage/>}></Route>
// // </Routes>
// // </BrowserRouter>

// //     </>
// //   )
// // }

// // export default App


// // api link
// // https://to-d0-planner-server.onrender.com/.....
// //  
