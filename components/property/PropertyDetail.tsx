import { Property } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Image
        src={property.imageUrl}
        alt={property.title}
        width={1200}
        height={384}
        className="w-full h-96 object-cover rounded-md mb-6"
        priority
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-blue-600 font-semibold mb-4">
        ${property.price.toLocaleString()}
      </p>
      <p className="text-gray-700">{property.description}</p>
    </div>
  );
}
