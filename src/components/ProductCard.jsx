import React from "react";

export default function ProductCard({ image }) {
  return (
    <div className="rounded-lg bg-white shadow duration-300 hover:shadow-2xl relative">
      <img src={image} alt="" className="w-full h-auto mx-auto object-cover" />
    </div>
  );
}
