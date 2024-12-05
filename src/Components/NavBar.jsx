import { useContext } from "react";
import { MdSportsVolleyball } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserTie } from "react-icons/fa";

const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allequipment'}>All Equipment</NavLink></li>
        <li><NavLink to={'/addequipment'}>Add Equipment</NavLink></li>
        <li><NavLink to={'/mylist'}>My List</NavLink></li>
        <li><NavLink to={'/auth/login'}>Login</NavLink></li>
        <li><NavLink to={'/auth/register'}>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><MdSportsVolleyball />EquiSports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="flex gap-2 items-center">
                        <div>
                            {
                                user && user?.email ? 
                                <div className="hidden md:flex gap-2 items-center tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className="w-12 rounded-none" src={user?.photoURL} alt="" />
                                </div> : 
                                <FaUserTie></FaUserTie>
                            }
                        </div>
                        <div>
                            {
                                user && user?.email ? <button onClick={userLogout} className="btn btn-neutral btn-sm hover:bg-primary">Log Out</button> : <Link to={"/auth/login"} className="btn btn-info btn-sm">Login</Link>
                            }
                        </div>
                        <a className="btn btn-neutral btn-sm">Dark</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;