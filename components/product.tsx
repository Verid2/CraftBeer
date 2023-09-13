import products from '@/data/products';
import { useRouter } from 'next/router';
import React from 'react';



const Products = () => {
  
  const router = useRouter();

  const handleLinkClick = (route : string) => {
    // Use Next.js router to navigate to the specified route
    router.push(route);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 m-10">
      {products.map((product) => (
        <div key={product.id} className="border-4 border-gray-300 rounded-2xl p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-60 object-cover mb-2"
          />
          <p className="text-lg font-semibold cursor-pointer hover:underline" onClick={()=> handleLinkClick('/products/' + product.id)}>{product.name}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
