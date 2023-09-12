import Products from '@/components/product';
import  Head  from 'next/head';

const ProductsPage = () => {
  return (
    <div>
       <Head>
       <title>Hopp Harbour</title>
      </Head>
      <h1 className="text-3xl font-semibold my-4">Our Products</h1>
      <Products />
    </div>
  );
};

export default ProductsPage;
