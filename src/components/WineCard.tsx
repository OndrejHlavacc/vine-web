import React from 'react';
import { Wine as WineType } from '../types';
import { ShoppingCart } from 'lucide-react';

interface WineCardProps {
  wine: WineType;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={wine.image}
        alt={wine.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
        <p className="text-gray-600 mb-4">{wine.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-700">{wine.price} Kč</span>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Do košíku</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;