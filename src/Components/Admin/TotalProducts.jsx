import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../Context/myContext";
import Loader from "../Loader";
function TotalProducts() {
  const context = useContext(myContext);

  const { loading, getProductData } = context;

  const navigate = useNavigate();

  return (
    <div>
      {/* Loading  */}
      <div className="flex justify-center relative top-20">
        {loading && <Loader />}
      </div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-pink-300 font-bold">All Product</h1>
        {/* Add Product Button  */}
        <button
          className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg"
          onClick={() => {
            navigate("/addProduct");
          }}
        >
          Add Product
        </button>
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Name
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Image
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>

            {getProductData.map((v, i) => {
              return (
                <tr className="text-pink-300" key={i}>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {i + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {v.title}
                  </td>

                  <td className="py-6 h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <img
                      src={v.productImageUrl}
                      alt={v.title}
                      width={80}
                      height={80}
                    />
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                    <Link to="/editProduct">Edit</Link>
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TotalProducts;
