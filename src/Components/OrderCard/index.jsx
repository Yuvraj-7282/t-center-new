import React from "react";

function OrderCard(products) {
  const totalAmount = products.price - products.discount;
  return (
    <div
      aria-labelledby="summary-heading"
      className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
    >
      <h2
        id="summary-heading"
        className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
      >
        Price Detials
      </h2>
      <div>
        <dl className=" space-y-1 px-2 py-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-800">
              {products.price} ({products.items} item)
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              ₹ {products.price}
            </dd>
          </div>
          <div className="flex items-center justify-between pt-4">
            <dt className="flex items-center text-sm text-gray-800">
              <span>Discount</span>
            </dt>
            <dd className="text-sm font-medium text-green-700">
              - ₹ {products.discount}
            </dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="flex text-sm text-gray-800">
              <span>Delivery Charges</span>
            </dt>
            <dd className="text-sm font-medium text-green-700">
              {products.dc == 0 ? "Free" : products.dc}
            </dd>
          </div>
          <div className="flex items-center justify-between border-y border-dashed py-4 ">
            <dt className="text-base font-medium text-gray-900">
              Total Amount
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ₹ {totalAmount}
            </dd>
          </div>
        </dl>
        <div className="px-2 pb-4 font-medium text-green-700">
          <div className="flex gap-4 mb-6">
            <button className="w-full px-4 py-3 text-center text-black bg-yellow-400 border border-transparent hover:border-yellow-100 rounded-xl">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
