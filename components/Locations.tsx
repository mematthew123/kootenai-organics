import React from "react";
import Map from "../components/Map";
import { LocationsProps } from "../components/Map";

const Locations: React.FC<LocationsProps> = ({ locations }) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-semibold text-gray-900'>Our Locations</h1>
        <p className='mt-4 text-lg text-gray-600'>
          Find us in the following locations
        </p>
      </div>

      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <Map locations={locations} />
      </div>

      <div className='mt-10'>
        {locations.map((location) => (
          <div key={location._id} className='mb-4'>
            <h2 className='text-2xl font-semibold'>{location.name}</h2>
            <p className='text-gray-600'>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
