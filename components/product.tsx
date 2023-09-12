import { useRouter } from 'next/router';
import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'BAZ BEER Ede Bácsi', imageUrl: '/BAZ BEER Ede bacsi.png', description: 'Egy könnyű belga blonde ale, ami visszafogott keserűséggel és kellemes fűszerezettséggel oltja a szomjat.' },
    { id: 2, name: 'BAZ BEER Kenderes IPA', imageUrl: '/BAZ BEER Kenderes IPA.png', description: 'A gyógyhatású kender ízvilágának újraalkotásával létrehozott vadonatúj, felséges sör, mely kiválóan elegyíti a kender és a komló változatos ízeit.' },
    { id: 2, name: 'Alkimista Mangolea', imageUrl: '/Mangós 0,33.jpg', description: 'Mangóvelővel ízesített, búzasör alapú gyümölcsössör. Trópusi gyümölcsösség és enyhe keserűség jellemzi.  ' },
  ];

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
            className="w-full h-80 object-cover mb-2"
          />
          <p className="text-lg font-semibold">{product.name}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
