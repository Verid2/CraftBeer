import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLinkClick = (route : string) => {
    // Use Next.js router to navigate to the specified route
    router.push(route);
  };

  return (
    <div className="bg-white p-2 rounded-b-2xl flex justify-between">
      <p className="text-black cursor-pointer hover:underline" onClick={() => handleLinkClick('/')}>
        Home
      </p>
      
        <p
          className="text-black cursor-pointer hover:underline"
          onClick={() => handleLinkClick('/contacts')}
        >
          Contacts
        </p>
        <p
          className="text-black cursor-pointer hover:underline"
          onClick={() => handleLinkClick('/products')}
        >
          Products
        </p>
      
    </div>
  );
}
