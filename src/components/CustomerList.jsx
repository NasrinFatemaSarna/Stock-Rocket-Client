
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { CustomerListApi } from "../Api/CustomerApi";
import { useSelector } from "react-redux";
import moment from "moment";

const CustomerList = () => {
  const [searchKeyword, setSearchKeyword] = useState("null");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCustomers(1, perPage, searchKeyword);
  }, []);

  const fetchCustomers = (page, perPage, searchKeyword) => {
    CustomerListApi(page, perPage, searchKeyword);
  };

  const allCustomer = useSelector((state) => state.customer.customers);
  const total = useSelector((state) => state.customer.totalCount); // Use totalCount

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchCustomers(pageNumber, perPage, searchKeyword);
  };

  const handlePerPage = (e) => {
    const newPerPage = parseInt(e.target.value);
    setPerPage(newPerPage);
    fetchCustomers(1, newPerPage, searchKeyword);
  };

  const handleSearchValue = (e) => {
    const value = e.target.value;
    setSearchKeyword(value.length === 0 ? "null" : value);
  };

  const handleSearch = () => {
    fetchCustomers(1, perPage, searchKeyword);
  };

  return (
    <div>
      <div className="bg-green-500 flex justify-between p-4 items-center mb-4 mt-3">
        <h1 className="text-white mb-2 font-bold text-2xl">Customer list</h1>
        <div className="flex gap-4 items-center">
          <div>
            <select
              className="select select-primary w-full max-w-xs"
              onChange={handlePerPage}
              value={perPage}
            >
              <option value="5">5 Per Page</option>
              <option value="10">10 Per Page</option>
              <option value="20">20 Per Page</option>
              <option value="30">30 Per Page</option>
            </select>
          </div>
          <div className="w-[400px] flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-secondary w-full max-w-xs"
              onChange={handleSearchValue}
            />
            <button onClick={handleSearch} className="btn btn-primary">
              Search
            </button>
          </div>
          <div>
            <Link to="/customer-create-update" className="btn btn-secondary">
              Create customer
            </Link>
          </div>
        </div>
      </div>

      <table className="min-w-full border-collapse mb-5 border border-gray-300">
        <thead className="bg-orange-400 text-black text-lg">
          <tr>
            <th className="border border-gray-300 text-left w-1/12 px-4 py-2">No</th>
            <th className="border border-gray-300 text-left w-3/12 px-4 py-2">Customer Name</th>
            <th className="border border-gray-300 text-left w-2/12 px-4 py-2">Email</th>
            <th className="border border-gray-300 text-left w-2/12 px-4 py-2">Phone</th>
            <th className="border border-gray-300 text-left w-2/12 px-4 py-2">Address</th>
            <th className="border border-gray-300 text-left w-3/12 px-4 py-2">CreatedDate</th>
            <th className="border border-gray-300 text-left w-2/12 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {allCustomer?.map((customer, i) => (
            <tr key={i} className="bg-slate-200 border-b">
              <td className="border border-gray-300 px-4 py-2">
                {currentPage * perPage - perPage + i + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">{customer.customerName}</td>
              <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
              <td className="border border-gray-300 px-4 py-2">{customer.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{customer.address}</td>
              <td className="border border-gray-300 px-4 py-2">
                {moment(customer.createdDate).format('DD-MM-YYYY')}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center gap-2 justify-end">
                  <button className="px-2 py-1 flex items-center gap-2 justify-end rounded">
                    <FiDelete className="text-xl text-red-700" />
                    <FaEdit className="text-xl text-orange-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ResponsivePagination
        current={currentPage}
        total={Math.ceil(total / perPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CustomerList;
