import { useContext } from "react";
import { MdSportsVolleyball } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserTie } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allEquipment'}>All Equipment</NavLink></li>
        <li><NavLink to={'/addEquipment'}>Add Equipment</NavLink></li>
        <li><NavLink to={'/myList'}>My List</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-gray-100">
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
                                    <div className="hidden md:flex gap-2 items-center" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="bottom">
                                        <img className="w-12 rounded-none" src={user?.photoURL} alt="" />
                                    </div> :
                                    <FaUserTie className="text-2xl"></FaUserTie>
                            }
                        </div>
                        <div>
                            {
                                user && user?.email ? <button onClick={userLogout} className="btn btn-neutral btn-sm hover:bg-primary">Log Out</button> :
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Link to={"/auth/login"} className="btn btn-accent btn-sm">Login</Link>
                                        <Link to={"/auth/register"} className="btn btn-accent btn-sm">Register</Link>
                                    </div>
                            }
                        </div>
                        <a className="btn btn-neutral btn-sm">Dark</a>
                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;