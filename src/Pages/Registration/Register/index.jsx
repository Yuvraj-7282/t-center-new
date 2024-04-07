/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-yellow-200 px-1 lg:px-8 py-6 00 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-black '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className=' px-2 py-2 w-96 rounded-md outline-none shadow-md'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='shadow-md px-2 py-2 w-96 rounded-md outline-none'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='shadow-md px-2 py-2 w-96 rounded-md outline-none '
                    />
                </div>

                {/* Register Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-yellow-400 shadow-md hover:bg-yellow-600 w-full text-black text-center py-2 font-bold rounded-md '
                    >
                        Register
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Register;