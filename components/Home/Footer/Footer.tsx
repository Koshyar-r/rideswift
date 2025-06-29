import { footerData } from "@/data/data"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="pt-16 pb-16 bg-blue-800">
            <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* 1ST PART */}
                    {footerData.map((data) => (
                        <div className="space-y-5" key={data.id}>
                            <h1 className="text-lg font-bold text-white">{data.title}</h1>
                            {data.content.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-white font-medium cursor-pointer text-sm hover:text-blue-300"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    ))}
                    <div className="text-white">
                        <h1 className="text-lg font-bold">Contact us</h1>
                        <div className="mt-6">
                            <h1 className="text-sm">Our Mobile Number</h1>
                            <h1 className="text-base font-bold mt-1">+98 999 999 9999</h1>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-sm">Our Email Address</h1>
                            <h1 className="text-base font-bold mt-1">example@gmail.com</h1>
                        </div>
                    </div>
            </div>
            {/* COPYRIGHT */}
            <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                <p className="text-center md:text-left">Copyright © 2025. All rights reserved.</p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 text-white">
                    <span>Social: </span>
                    <Link href="#" className="hover:text-blue-300">
                        <FaFacebook />
                    </Link>
                    <Link href="#" className="hover:text-blue-300">
                        <FaInstagram />
                    </Link>
                    <Link href="#" className="hover:text-blue-300">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer