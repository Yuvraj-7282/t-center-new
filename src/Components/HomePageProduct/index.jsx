import ProductCardDisplay from "../ProductCardDisplay";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import myContext from "../../Context/myContext";
import Loader from "../Loader";
// productData

function HomePageProduct({ title }) {
  const { item } = useParams();

  const context = useContext(myContext);
  const { loading, getProductData } = context;
  const productData = getProductData;

  return (
    <div className="my-10">
      {/* Heading  */}
      <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold">{title}</h1>
      </div>

      {/* main  */}
      {!loading && <Loader />}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.map((item, index) => {
              return (
                <ProductCardDisplay
                  key={index}
                  title={item.title}
                  image={item.productImageUrl}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePageProduct;
