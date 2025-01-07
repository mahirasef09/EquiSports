import { FaXTwitter } from "react-icons/fa6";
import { MdSportsVolleyball } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content items-center p-4 mt-5">
                <aside className="grid-flow-col items-center">
                    <a className="btn btn-ghost text-xl"><MdSportsVolleyball />EquiSports</a>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <a className="btn btn-ghost text-xs">Contact: +8801792932410 or +8801303926678</a>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
                    <Link to={'https://www.facebook.com/md.mahirasef.ador?mibextid=ZbWKwL'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </Link>
                    <a>
                        <FaXTwitter className="text-2xl"></FaXTwitter>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;