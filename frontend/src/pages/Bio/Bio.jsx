import Logo from "../../assets/logo.png";
import { branches } from "../../data/branches";
import { social } from "../../data/social";

import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  MdTableRestaurant,
  MdLocationOn,
  MdLanguage,
} from "react-icons/md";

import { BiSolidFoodMenu } from "react-icons/bi";

function SectionTitle({ title }) {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/40"></div>

      <span className="text-xs font-bold uppercase tracking-[4px] text-white">
        {title}
      </span>

      <div className="h-px flex-1 bg-white/40"></div>
    </div>
  );
}

function ButtonLink({ href, title, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel="noreferrer"
      className="block w-full rounded-xl bg-white px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#4B2E2B] shadow-md transition hover:-translate-y-1 hover:bg-[#F7F4F1]"
    >
      {title}
    </a>
  );
}

export default function Bio() {
  return (
    <div className="min-h-screen bg-[#A69A8F] py-10">

      <div className="mx-auto w-full max-w-md px-5">

        {/* Logo */}

        <div className="text-center">

          <img
            src={Logo}
            className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl"
          />

          <h1 className="mt-5 text-3xl font-bold text-white">
            Rolun Coffee
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Coffee • Event • Reservation
          </p>

        </div>

        {/* MENU */}

        <SectionTitle title="Menu" />

        <div className="space-y-3">

          {branches.map((branch) => (

            <ButtonLink
              key={branch.id}
              title={branch.menu.title}
              href={branch.menu.url}
              external
            />

          ))}

        </div>

        {/* OUR LOCATIONS */}

        <SectionTitle title="Our Locations" />

        <div className="space-y-6">

          {branches.map((branch) => (

            <div
              key={branch.id}
              className="rounded-2xl bg-[#D8CEC5] p-4 shadow-lg"
            >

              <div className="mb-4 flex items-center gap-2">

                <FaMapMarkerAlt className="text-[#6F4E37]" />

                <h3 className="font-bold uppercase text-[#4B2E2B]">

                  {branch.name}

                </h3>

              </div>

              <div className="space-y-3">

                <ButtonLink
                  title="Reservation"
                  href={`/reservation?branch=${branch.reservation.branch}`}
                />

                <ButtonLink
                  title="Location Map"
                  href={branch.map}
                  external
                />

                <ButtonLink
                  title="Facility"
                  href={`/facility/${branch.slug}`}
                />

              </div>

            </div>

          ))}

        </div>

        {/* FOLLOW */}

        <SectionTitle title="Follow Us" />

        <div className="space-y-3">

          <ButtonLink
            title="Instagram"
            href={social.instagram}
            external
          />

          <ButtonLink
            title="TikTok"
            href={social.tiktok}
            external
          />

          <ButtonLink
            title="WhatsApp"
            href={social.whatsapp}
            external
          />

        </div>

        {/* WEBSITE */}

        <SectionTitle title="Our Website" />

        <ButtonLink
          title="Visit Website"
          href="/"
        />

        {/* Footer */}

        <div className="mt-12 text-center">

          <div className="mb-5 flex justify-center gap-8 text-4xl text-white">

            <a href={social.instagram}>
              <FaInstagram />
            </a>

            <a href={social.tiktok}>
              <FaTiktok />
            </a>

            <a href={social.whatsapp}>
              <FaWhatsapp />
            </a>

          </div>

          <p className="text-xs leading-6 text-white/80">

            © 2026 Rolun Coffee

          </p>

        </div>

      </div>

    </div>
  );
}