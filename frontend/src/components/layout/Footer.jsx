import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";
import FooterImage from "../../assets/rolun_footer.jpg";

const menus = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Gallery", href: "#" },
    { title: "Contact", href: "#" },
];


export default function Footer() {
    return (
        <footer id="contact" className="bg-white">
            <div className="grid lg:grid-cols-5">
                {/* Left Image */}
                <div className="relative h-72 lg:col-span-2 lg:h-full">
                    <img
                        src={FooterImage}
                        alt="Rolun Reserve"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="px-6 py-14 lg:col-span-3 lg:px-16">
                    <h2 className="text-3xl font-bold text-[#6F4E37]">
                        Rolun Reserve
                    </h2>

                    <p className="mt-3 max-w-lg text-gray-600">
                        A cozy place to enjoy premium coffee, celebrate special moments,
                        and create unforgettable memories.
                    </p>

                    {/* Contact */}
                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <MapPin
                                    className="mt-1 text-[#6F4E37]"
                                    size={20}
                                />
                                <p className="text-gray-600">
                                    Jl. Cijagra No.8, Bojongsoang, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288
                                    <br />
                                    Rolun Coffee & Pastry Bojongsoang
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin
                                    className="mt-1 text-[#6F4E37]"
                                    size={20}
                                />
                                <p className="text-gray-600">
                                Jl. Raya Banjaran Barat No.591, Lebakwangi, Kec. Arjasari, Kabupaten Bandung, Jawa Barat 40379
                                    <br />
                                    Rolun Coffee & Roastery Banjaran
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone
                                    className="text-[#6F4E37]"
                                    size={20}
                                />
                                <a
                                    href="tel:+628123456789"
                                    className="text-gray-600 hover:text-[#6F4E37]"
                                >
                                    +62 812-3456-789
                                </a>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock
                                    className="mt-1 text-[#6F4E37]"
                                    size={20}
                                />
                                <div className="text-gray-600">
                                    <p>Monday - Friday</p>
                                    <p>09:00 - 22:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Quick Links
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {menus.map((menu) => (
                                    <li key={menu.title}>
                                        <a
                                            href={menu.href}
                                            className="text-gray-600 transition hover:text-[#6F4E37]"
                                        >
                                            {menu.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Rolun Reserve. All rights reserved.
                        </p>

                        <div className="flex gap-4">

                            <b>
                                <h2>Follow Us</h2>
                            </b>

                            <a href="#">
                                <FaFacebook className="h-5 w-5 text-gray-700 hover:text-[#6F4E37]" />
                            </a>

                            <a href="#">
                                <FaInstagram className="h-5 w-5 text-gray-700 hover:text-[#6F4E37]" />
                            </a>

                            <a href="#">
                                <FaTiktok className="h-5 w-5 text-gray-700 hover:text-[#6F4E37]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}