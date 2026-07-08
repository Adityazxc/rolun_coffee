import { useState } from "react";
import { motion } from "motion/react";
import { branches } from "../../data/branches";
import { social } from "../../data/social";
import { MapPin, Phone, Clock } from "lucide-react";
import { MdMenuBook } from "react-icons/md";
import { packages } from "../../data/packages";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Reservation() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        note: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Data:", form);
        alert("Reservation submitted!");
    };

    const selectedPackage = packages.find(
        (pkg) => pkg.value === form.package
    );

    function ButtonLink({ icon: Icon, href, title, external = false }) {
        return (
            <a
                href={href}
                target={external ? "_blank" : "_self"}
                rel="noreferrer"
                className="block w-full rounded-xl bg-[var(--rolun)] px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#4B2E2B] shadow-md transition hover:-translate-y-1"
            >
                <div className="flex flex-row items-center gap-2 ">
                    <Icon
                        className=" text-white"
                        size={20}
                    />
                    <p className="text-white">{title}</p>
                </div>
            </a>
        );
    }
    return (
        <section id="reservation" className="flex flex-col items-center justify-center bg-[var(--bg-clear)] py-16 px-4">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >


                <span
                    className="block mb-1 text-[1.35rem] text-[var(--bg-rolun)]"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                    Book a Table
                </span>

                <h2 className="mb-3 text-[clamp(1.9rem,4vw,2.7rem)] font-black leading-tight">
                    Make a{" "}
                    <span className="text-[var(--rolun)]">
                        Reservation
                    </span>
                </h2>

                <p className="max-w-md mx-auto text-center text-gray-600 leading-7">
                    Reserve your table for a memorable dining experience. We recommend
                    booking 24 hours in advance for weekend evenings.
                </p>
            </motion.div>
            <div className="mt-8 mx-auto w-full max-w-7xl grid gap-6 md:grid-cols-5">

                {/* LEFT */}
                <motion.div
                    className="md:col-span-2 rounded-3xl bg-[var(--bg-rolun)] p-8 shadow-lg "
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex flex-col h-full">
                        <h2 className="text-3xl text-white text-center">Contact Info</h2>
                        <div className="space-y-6 mt-5">
                            {branches.map((branch) => (
                                <div key={branch.id} className="space-y-3">
                                    <ButtonLink
                                        icon={MapPin}
                                        title={branch.name}
                                        href={`/reservation?branch=${branch.map}`}
                                    />
                                    <ButtonLink
                                        icon={MdMenuBook}
                                        title={branch.menu.title}
                                        href={branch.menu.url}
                                    />
                                    <ButtonLink
                                        icon={Phone}
                                        title={branch.contact.title}
                                        href={branch.contact.url}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center mt-auto items-center ">
                            <p className="mb-3 text-lg font-semibold text-white md:text-xl">
                                Follow Us
                            </p>
                            <div className="flex gap-4">
                                <a href="#">
                                    <FaFacebook className="h-6 w-6 text-white transition-colors hover:text-[#6F4E37] md:h-8 md:w-8 lg:h-10 lg:w-10" />
                                </a>
                                <a href="#">
                                    <FaInstagram className="h-6 w-6 text-white transition-colors hover:text-[#6F4E37] md:h-8 md:w-8 lg:h-10 lg:w-10" />
                                </a>
                                <a href="#">
                                    <FaTiktok className="h-6 w-6 text-white transition-colors hover:text-[#6F4E37] md:h-8 md:w-8 lg:h-10 lg:w-10" />
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="md:col-span-3 rounded-3xl bg-white p-6 sm:p-8 shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Branch */}
                        <div>
                            <label
                                htmlFor="branch"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Cabang Rolun
                            </label>
                            <select
                                id="branch"
                                name="branch"
                                defaultValue=""
                                className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[var(--rolun)] focus:outline-none"
                            >
                                <option value="" disabled>
                                    Pilih Cabang
                                </option>
                                <option value="bojongsoang">
                                    Rolun Coffee & Pastry Bojongsoang
                                </option>
                                <option value="banjaran">
                                    Rolun Coffee & Roastery Banjaran
                                </option>
                            </select>
                        </div>
                        {/* Package */}
                        <div>
                            <label
                                htmlFor="package"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Paket Reservasi
                            </label>
                            <select
                                id="package"
                                name="package"
                                value={form.package}
                                onChange={handleChange}
                                className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
                            >
                                <option value="">
                                    Pilih Paket
                                </option>

                                {packages.map((pkg) => (

                                    <option
                                        key={pkg.id}
                                        value={pkg.value}
                                    >
                                        {pkg.label}
                                    </option>

                                ))}
                            </select>
                        </div>
                    </div>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
                            placeholder="john@email.com"
                            required
                        />
                    </div>
                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    {/* Guests */}
                    <div className="mb-4">
                        <div className="flex flex-row justify-between">
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Number of Guests
                            </label>
                            {selectedPackage && (
                                <p className="mb-1 text-sm text-amber-600">
                                    Minimum reservasi untuk paket ini adalah{" "}
                                    <strong>{selectedPackage.minPax} Pax</strong>
                                </p>
                            )}
                        </div>
                        <input
                            type="number"
                            name="guests"
                            min={selectedPackage?.minPax || 1}
                            value={form.guests}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2"
                        />
                    </div>
                    {/* Note */}
                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Notes (optional)
                        </label>
                        <textarea
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            rows="4"
                            className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
                            placeholder="Any special request..."
                        />
                    </div>
                    {/* Button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="w-56 rounded-lg bg-[var(--rolun)] py-3 font-semibold text-white transition hover:bg-[#5a3f2e]"
                        >
                            Reserve Now
                        </button>
                    </div>

                </motion.form>
            </div>


        </section >
    );
}