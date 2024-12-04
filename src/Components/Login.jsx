import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                    <h3 className='text-2xl font-extrabold text-center'>Welcome Back!</h3>
                    <form className="card-body">
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                            <p
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute right-4 top-3'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Get Started</button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            <button className="btn bg-gray-200"><FcGoogle />Continue with Google</button>
                        </div>
                    </form>
                    <p className='text-center text-xs font-semibold'>Don’t Have An Account ? <Link className='text-blue-500' to={"/auth/register"}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;