import React from 'react';
import {useNavigate} from 'react-router-dom';

function ProductCardDisplay({title, image, price}) {
  const navigate = useNavigate();
  return (
    <div className="p-2 lg:p-4 w-2/4 h-fit lg:h-fit lg:w-1/4" onClick={() => {
        navigate(`/product`)
    }}>
            <div className="h-full border border-gray-300  rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                        className="lg:h-80 h-48 lg:w-96 w-full"
                        src={image}
                        alt="blog"
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
  )
}

export default ProductCardDisplay