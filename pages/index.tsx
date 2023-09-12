import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-black text-white p-10'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6'>Welcome Craft Heads</h1>
        <p className='text-lg mb-4'>
          Cheers to Craft Beer Enthusiasts! Welcome to [Webshop Name], your
          ultimate destination for artisanal brews and craft beer excellence.
          🍻
        </p>
        <p className='text-lg mb-4'>
          At [Webshop Name], we're passionate about the art of brewing, and
          we've curated a diverse selection of handcrafted beers that are sure
          to tantalize your taste buds. Whether you're a seasoned beer
          connoisseur or just starting your craft beer journey, you've come to
          the right place.
        </p>
        <p className='text-lg mb-4'>
          Explore our carefully chosen collection of unique and flavorful beers
          from local microbreweries and renowned craft beer masters from around
          the world. From hoppy IPAs to rich stouts, crisp lagers to sour ales,
          we've got something for every palate.
        </p>
        <p className='text-lg mb-4'>
          Our mission is simple: to share the joy of discovering exceptional
          brews and supporting the craft beer community. We believe that great
          beer brings people together, and we're excited to be part of your beer
          adventure.
        </p>
        <p className='text-lg mb-4'>
          So, grab a glass, browse our selection, and let's toast to the
          wonderful world of craft beer. Cheers to you, our fellow beer
          enthusiasts, and welcome to [Webshop Name]!
        </p>
        <p className='text-lg'>
          To your next great beer experience,
          <br />
          Greg
          <br />
          Founder, [Webshop Name]
        </p>
      </div>
    </div>
  );
}
