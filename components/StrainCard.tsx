import React from "react";
import { StrainCardProps } from "../interfaces/strains.interfaces";
import Link from "next/link";

const StrainCard: React.FC<StrainCardProps> = ({ strain }) => {
  return (
    <div className='grid grid-cols-1 gap-4 w-full h-full p-4 bg-white shadow-md rounded-lg'>
      <img
        src={strain.image}
        alt={strain.name}
        className='w-full h-48 object-cover object-center rounded-t-lg'
      />
      <div className='px-4 py-2'>
        <h3 className='text-2xl font-bold mb-2'>{strain.name}</h3>
        <p className='text-xl mb-1'>{strain.type}</p>
        <p className='text-xl mb-1'>THC: {strain.thc}%</p>
        <p className='text-xl mb-1'>CBD: {strain.cbd}%</p>
        <p className='text-xl mb-1'>Price: ${strain.price}</p>
        <p className='text-xl mb-1'>Stock: {strain.stock}</p>
        {/* <p className="text-lg mt-4 text-gray-700">{strain.description}</p> */}
      </div>

      <Link href={`/strains/${strain.id}`}>
        <p className='block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold'>
          View Strain
        </p>
      </Link>
      {/* Add other elements as needed */}
    </div>
  );
};

export default StrainCard;
