import React from 'react';
import PageTitle from './PageTitle';

const ContactUs = () => {
    return (
        <div>
            <PageTitle title="EquiSports | Contact Us"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">Contact Us</h2>
            </div>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Our Information</h1>
                        <p className="py-2">
                            <span className="font-bold">Address:</span> Dhaka, Bangladesh
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Whatsapp:</span> +8801792932410
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Optional Number:</span> +8801303926678
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-accent" placeholder="your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;