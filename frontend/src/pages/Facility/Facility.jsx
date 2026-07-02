import { branches } from "../../data/branches";
import MainLayout from "../../layouts/MainLayout";
import Footer from "../../components/layout/Footer";

export default function Facility() {

    const branch = branches[0];

    return (
        <MainLayout>


            <section className="bg-[#F8F5F2] py-20">
                <div className="mx-auto max-w-7xl px-6">

                    {branches.map((branch) => (
                        <div key={branch.id} className="mb-24 last:mb-0">

                            {/* Header Cabang */}
                            <div className="text-center">
                                <p className="uppercase tracking-[4px] text-[#8B6B4A]">
                                    Facilities
                                </p>

                                <h2 className="mt-3 text-5xl font-bold text-[#3E2723]">
                                    {branch.name}
                                </h2>

                                <p className="mt-3 text-gray-500">
                                    {branch.address}
                                </p>
                            </div>

                            {/* Facilities */}
                            <div className="mt-16 flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
                                {branch.facilities.map((facility) => (
                                    <div
                                        key={facility.id}
                                        className="w-80 flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="h-60 w-full object-cover"
                                        />

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#3E2723]">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                                {facility.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>
            </section>
            <Footer />
        </MainLayout>
    );
}