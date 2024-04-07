import Layout from "../../Components/Layout";
import UserDetails from "../../Components/UserDetails";
import OrderInvoice from "../../Components/OrderInvoice";
const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        href: '#',
        price: '₹61,999',
        color: 'Orange',
        imageAlt: 'Nike Air Force 1 07 LV8',
        quantity: 1,
    },
]

function Account() {
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <UserDetails name="yuvraj" email="yuvraj@gmail.com" />

                {/* bottom  */}
                <OrderInvoice products={products} />
            </div>
        </Layout>
    );
}

export default Account;