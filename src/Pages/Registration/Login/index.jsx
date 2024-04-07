/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-yellow-200 px-1 lg:px-8 py-6 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-black '>
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='shadow-md px-2 py-2 w-96 rounded-md outline-none '
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='shadow-md px-2 py-2 w-96 rounded-md outline-none'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='shadow-md bg-yellow-400 text-black hover:bg-yellow-600 w-full text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-red-500 font-bold' to={'/register'}>Register</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;