import React from "react";

export function ServiceCard({ title, description, iconUrl }) {
  return (
    <div className="max-w-md rounded-md overflow-hidden shadow-lg bg-white mt-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-4 ">
      <div className="px-6 py-4 bg-primaryBlue">
        <img
          src={iconUrl}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-primaryDark font-semibold text-base mb-2 hover:text-primaryBlue">
          {title}
        </h3>
        <p className="text-secondaryDark text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
