// customer create and update

import { toast } from "react-toastify";

import axios from 'axios';
import { baseUrl } from "../helper/config";
import { store } from "../store/store";
import { resetFormValues, setCustomer, setFormValues, setList } from "../slices/customerSlice";
import { clearAllSessions } from "../helper/SessionHelper";
import { BiObjectsHorizontalCenter } from "react-icons/bi";




const AxiosHeader = {headers:{"token":getAuthToken()}}


// CreateAndUpdateCustomerApi
export async function CreateAndUpdateCustomerApi (postBody,id) {
    try{
        let url = `${baseUrl}/create-customer`;
        if(id){
            url = `${baseUrl}/customer-update/${id}`;
        }
        let result = await axios.post(url,postBody,AxiosHeader);
        if(result.status===200 && result.data.status==="success"){
          toast.success(`Customer  ${id? "Update" : "Create"} Successfully`)
          store.dispatch(resetFormValues())
          return true
        }
        else if(result.status===200 && result.data.status==="fail"){
            if(result.data.data.keyPattern.phone===1){
                toast.error("Phone number is already exists")
            }
        }else{
            toast.error("something went wrong")
            return false;
        }
    }
    catch(error){
        toast.error("Something went wrong")
        clearAllSessions()
        return false;
    }
}
// CustomerListApi
export async function CustomerListApi(pageNumber,perPage,searchKeyword) {
    try{
        let url = `${baseUrl}/customer-list/${pageNumber}/${perPage}/${searchKeyword}`;
        let result = await axios.get(url,AxiosHeader);
        if(result.status===200 && result.data.status==="success"){
          store.dispatch(setCustomer(result.data.data[0].data))
          store.dispatch(setList(result.data.data[0].total))
        }
        else{
            store.dispatch(setCustomer([]))
            store.dispatch(setList([0]))
            toast.error("No data found")
        }
       }
    catch(error){
        toast.error("Something went wrong")
        clearAllSessions()
        return false
    }
}
//  CustomerDetailsApi
export async function CustomerDetailsApi(id) {
    try {
        const url = `${baseUrl}/customer-details/${id}`;
        const result = await axios.get(url, AxiosHeader);

        if (result.status === 200 && result.data.status === "success") {
            const value = result.data.data[0]
            // store.dispatch(setFormValues({ name: "customerName", value: value.customer_name }));
            // store.dispatch(setFormValues({ name: "phone", value: value.phone }));
            // store.dispatch(setFormValues({ name: "email", value: value.email }));
            // store.dispatch(setFormValues({ name: "address", value: value.address }));
            Object.entries(value).forEach(([key,value]) =>{
                store.dispatch(setFormValues({name: key, value: value}))
            })
            return true
        } else {
            toast.error("Something went wrong")
            return false
        }
    } catch (error) {
        toast.error("Something went wrong")
        clearAllSessions()
        return false;
    }
}