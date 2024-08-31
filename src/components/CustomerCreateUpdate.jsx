
import { useSelector } from "react-redux";
import { setFormValues } from "../slices/customerSlice"; 
import { store } from "../store/store";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { CreateAndUpdateCustomerApi, CustomerDetailsApi } from "../Api/CustomerApi";
import { useEffect, useState } from "react";

const CustomerCreateUpdate = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            CustomerDetailsApi(id);
        }
    },[])
    const navigate = useNavigate();

    const formValue = useSelector((state) => 
        // console.log(state.customer.formValues)
        ( state.customer.formValues));

    const handleCreateUpdate = async () => {
        if (formValue.customerName && formValue.phone && formValue.email && formValue.address) {
            setLoading(true);
            try {
                const result = await CreateAndUpdateCustomerApi(formValue, id);
                if (result) {
                    toast.success(id ? "Customer updated successfully" : "Customer created successfully");
                    navigate("/customer-list");
                } else {
                    toast.error("Failed to create/update customer");
                }
            } catch (error) {
                toast.error("An error occurred");
            } finally {
                setLoading(false);
            }
        } else {
            if (!formValue.customerName) {
                toast.error("Customer name is required");
            }
            if (!formValue.phone) {
                toast.error("Customer phone is required");
            }
            if (!formValue.email) {
                toast.error("Customer email is required");
            }
            if (!formValue.address) {
                toast.error("Customer address is required");
            }
        }
    };

    return (
        <div>
            <h1 className="text-2xl text-black font-medium mb-[40px]">{id ? "Update Customer" : "Create Customer"}</h1>
            <div className="flex justify-between flex-wrap">
                <label className="form-control w-[48%] mt-[35px]">
                    <div className="label">
                        <span className="label-text text-xl font-bold text-sky-600">Customer Name</span>
                    </div>
                    <input 
                        onChange={(e) => store.dispatch(setFormValues({ name: "customerName", value: e.target.value }))}
                        value={formValue.customerName}
                        type="text" 
                        placeholder="Type here" 
                        className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
                    />
                </label>

                <label className="form-control w-[48%] mt-[35px]">
                    <div className="label">
                        <span className="label-text text-xl font-bold text-sky-600">Customer Phone</span>
                    </div>
                    <input 
                        name="phone" 
                        value={formValue.phone}
                        onChange={(e) => store.dispatch(setFormValues({ name: "phone", value: e.target.value }))}
                        type="number" 
                        placeholder="Type here" 
                        className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
                    />
                </label>

                <label className="form-control w-[48%] mt-[35px]">
                    <div className="label">
                        <span className="label-text text-xl font-bold text-sky-600">Customer Email</span>
                    </div>
                    <input 
                        name="email" 
                        value={formValue.email}
                        onChange={(e) => store.dispatch(setFormValues({ name: "email", value: e.target.value }))}
                        type="email" 
                        placeholder="Type here" 
                        className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
                    />
                </label>

                <label className="form-control w-[48%] mt-[35px]">
                    <div className="label">
                        <span className="label-text text-xl font-bold text-sky-600">Customer Address</span>
                    </div>
                    <input 
                        name="address" 
                        value={formValue.address}
                        onChange={(e) => store.dispatch(setFormValues({ name: "address", value: e.target.value }))}
                        type="text" 
                        placeholder="Type here" 
                        className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
                    />
                </label>

                <div className="form-control w-[48%] mt-[35px]">
                    <button 
                        onClick={handleCreateUpdate} 
                        className="btn btn-info w-full text-xl text-white"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : id ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCreateUpdate;

















// import { useSelector } from "react-redux";
// import { setFormValues } from "../slices/customerslice"; 
// import { store } from "../store/store";
// import { toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";
// import { CreateAndUpdateCustomerApi } from "../Api/CustomerApi";
// import { useState } from "react";
// // Adjust the import path according to your project structure

// const CustomerCreateUpdate = () => {

//     let [loading, setLoading] = useState(false);
//     const {id} = useParams();
//     // console.log(id);
//     const navigate = useNavigate()


//     const formValue = useSelector(state => state.customer.formValues);

//     const handleCreateUpdate = () => {
//         if (formValue.customerName && formValue.phone && formValue.email && formValue.address) {
//             setLoading(true);
//             let result = CreateAndUpdateCustomerApi(formValue, id);
//             if (result) {
//                 navigate("/customer-list");
//                 setLoading(false);
//             }
//             else {
//                 setLoading(false);
//             }
//             toast.success("Customer created successfully");
//         } else {
//             if (!formValue.customerName) {
//                 toast.error("Customer name is required");
//             }
//             if (!formValue.phone) {
//                 toast.error("Customer phone is required");
//             }
//             if (!formValue.email) {
//                 toast.error("Customer email is required");
//             }
//             if (!formValue.address) {
//                 toast.error("Customer address is required");
//             }
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-2xl text-black font-medium mb-[40px]">{id?"Update Customer" : "Create Customer"}</h1>
//             <div className="flex justify-between flex-wrap">
//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Name</span>
//                     </div>
//                     <input 
//                         onChange={(e) => store.dispatch(setFormValues({ name: "customerName", value: e.target.value }))}
//                         value={formValue?.customerName.customerName}
//                         type="text" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Phone</span>
//                     </div>
//                     <input 
//                         name="phone" 
//                         value={formValue?.phone}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "phone", value: e.target.value }))}
//                         type="number" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Email</span>
//                     </div>
//                     <input 
//                         name="email" 
//                         value={formValue?.email}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "email", value: e.target.value }))}
//                         type="email" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Address</span>
//                     </div>
//                     <input 
//                         name="address" 
//                         value={formValue?.address}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "address", value: e.target.value }))}
//                         type="text" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <div className="form-control w-[48%] mt-[35px]">
//                     <button onClick={handleCreateUpdate} className="btn btn-info w-full text-xl text-white">Create</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerCreateUpdate;


















// import { useSelector } from "react-redux";
// import { setFormValues } from "../slices/customerslice"; 
// import { store } from "../store/store";
// import { toast } from "react-toastify";
// // Adjust the import path according to your project structure

// const CustomerCreateUpdate = () => {
//     const formValues = useSelector(state => state.customer.formValues);

//     const handleCreateUpdate = () => {
//         if (formValues.customerName && formValues.phone && formValues.email && formValues.address) {
//             toast.success("Customer created successfully");
//         } else {
//             if (!formValues.customerName) {
//                 toast.error("Customer name is required");
//             }
//             if (!formValues.phone) {
//                 toast.error("Customer phone is required");
//             }
//             if (!formValues.email) {
//                 toast.error("Customer email is required");
//             }
//             if (!formValues.address) {
//                 toast.error("Customer address is required");
//             }
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-2xl text-black font-medium mb-[40px]">Create New Customer</h1>
//             <div className="flex justify-between flex-wrap">
//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Name</span>
//                     </div>
//                     <input 
//                         onChange={(e) => store.dispatch(setFormValues({ name: "customerName", value: e.target.value }))}
//                         value={formValues?.customerName || ""}
//                         type="text" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Phone</span>
//                     </div>
//                     <input 
//                         name="phone" 
//                         value={formValues?.phone || ""}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "phone", value: e.target.value }))}
//                         type="number" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Email</span>
//                     </div>
//                     <input 
//                         name="email" 
//                         value={formValues?.email || ""}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "email", value: e.target.value }))}
//                         type="email" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Address</span>
//                     </div>
//                     <input 
//                         name="address" 
//                         value={formValues?.address || ""}
//                         onChange={(e) => store.dispatch(setFormValues({ name: "address", value: e.target.value }))}
//                         type="text" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-200 hover:text-black" 
//                     />
//                 </label>

//                 <div className="form-control w-[48%] mt-[35px]">
//                     <button onClick={handleCreateUpdate} className="btn btn-info w-full text-xl text-white">Create</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerCreateUpdate;






















// import { useSelector } from "react-redux";
// import { setFormValues } from "../slices/customerslice"; 
// import { store } from "../store/store";
// import { toast } from "react-toastify";
// // Adjust the import path according to your project structure

// const CustomerCreateUpdate = () => {
    
//     const formValue = useSelector(state => state.customer.formValues); // Corrected state access
//     const handleCreateUpdate() =>{

  
    

//     if(formValue.customerName && formValue.phone && formValue.email && formValue.address) {
//         toast.success("customer created successfully")
//     }
//     else {
//         if(formValue.customerName ==="") {
//             toast.error("customer name is required")
//         }

//         if(formValue.phone ==="") {
//             toast.error("customer phone is required")
//         }
//         if(formValue.email ==="") {
//             toast.error("customer email is required")
//         }
//         if(formValue.address ==="") {
//             toast.error("customer address is required")
//         }
//     }
// }

    

//     return (
//         <div>
//             <h1 className="text-2xl text-black font-medium mb-[40px]">Create New Customer</h1>
//             <div className="flex justify-between flex-wrap">
//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Name</span>
//                     </div>
//                    <input onChange={(e) => {store.dispatch(setFormValues({ name: "customerName", value: e.target.value }))}} 
//                    value={formValue?.customerName}
//                     type="text" placeholder="Type here" className="input input-accent input-bordered w-full hover:bg-sky-300 hover:text-black" />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Phone</span>
//                     </div>
//                     <input 
//                         name="phone" 
//                         value={formValue?.phone}
//                         onChange={(e) => {store.dispatch(setFormValues({ name: "phone", value: e.target.value }))} }
//                         type="number" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-300 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Email</span>
//                     </div>
//                     <input 
//                         name="email" 
//                         value={formValue?.email}
//                         onChange={(e) => {store.dispatch(setFormValues({ name: "email", value: e.target.value }))} }
//                         type="email" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-300 hover:text-black" 
//                     />
//                 </label>

//                 <label className="form-control w-[48%] mt-[35px]">
//                     <div className="label">
//                         <span className="label-text text-xl font-bold text-sky-600">Customer Address</span>
//                     </div>
//                     <input 
//                         name="address" 
//                         value={formValue.address}
//                         onChange={(e) =>{ store.dispatch(setFormValues({ name: "address", value: e.target.value }))} }
//                         type="text" 
//                         placeholder="Type here" 
//                         className="input input-accent input-bordered w-full hover:bg-sky-300 hover:text-black" 
//                     />
//                 </label>

//                 <div className="form-control w-[48%] mt-[35px]">
//                     <button onClick={handleCreateUpdate} className="btn btn-info w-full text-xl text-white">Create</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerCreateUpdate;


