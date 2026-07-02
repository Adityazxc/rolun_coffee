import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

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

    return (
        <section id="reservation" className="flex items-center justify-center bg-[#f8f5f2] py-16">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-lg"
            >
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Reservation Rolun
                </h2>

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
                            defaultValue=""
                            className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:border-[var(--rolun)] focus:outline-none"
                        >
                            <option value="" disabled>
                                Pilih Paket
                            </option>
                            <option value="birthday">Birthday Package</option>
                            <option value="meeting">Meeting Package</option>
                            <option value="wedding">Wedding Package</option>
                            <option value="regular">Regular Reservation</option>
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
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Number of Guests
                    </label>
                    <input
                        type="number"
                        name="guests"
                        min="1"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-2 focus:border-[#6F4E37] focus:outline-none"
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
                        className="w-56 rounded-lg bg-[#6F4E37] py-3 font-semibold text-white transition hover:bg-[#5a3f2e]"
                    >
                        Reserve Now
                    </button>
                </div>
            </form>
        </section>
    );
}