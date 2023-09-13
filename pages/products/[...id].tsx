import products, { Products } from "@/data/products";



interface Props {
    product: Products | null;
  }

  const ProductPage = ({ product }: Props) => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {product ? (
            <>
             <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full object-cover mb-2"
          />
              <h1 className="text-2xl text-black font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </>
          ) : (
            <p className="text-red-500">Product not found.</p>
          )}
        </div>
      </div>
    );
  };
      

  export async function getServerSideProps({ params }: { params: { id: string[] } }) {
    const productId = parseInt(params.id[0]); // Parse the product ID from the URL
    const product = products.find((p) => p.id === productId) || null;
  
    return {
      props: {
        product,
      },
    };
  }
  
  export default ProductPage;