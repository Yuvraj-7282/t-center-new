import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plain } from "../../Assets";
import { useContext } from "react";
import myContext from "../../Context/myContext";

function ProductCardDisplay({ title, image, price }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className="p-2 lg:p-4 w-2/4 h-fit lg:h-fit lg:w-1/4"
      onClick={() => {
        navigate(`/product`);
      }}
    >
      <div className="h-full border border-gray-300  rounded-xl overflow-hidden shadow-md cursor-pointer">
        {!isLoaded && <img className="lg:h-70 lg:w-72 p-6" src={plain} />}

        <img
          className={`lg:h-72 lg:w-80 ${!isLoaded && "hidden"}`}
          src={image}
          alt="shirt"
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            T-Center
          </h2>
          <h1 className="title-font text-xs lg:text-lg font-medium text-gray-900 mb-3">
            {title.substring(0, 25)}
          </h1>
          <h1 className="title-font text-xs lg:text-lg font-medium text-gray-900 mb-3">
            ₹{price}
          </h1>

          <div className="flex justify-center">
            <button className=" bg-yellow-400 hover:bg-yellow-300 text-black w-full py-[4px] rounded-lg font-bold">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardDisplay;
