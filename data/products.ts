export interface Products {
    id: number;
    name: string;
    description: string;
    imageUrl : string
  }
  
  const products : Products[] = [
    { id: 1, name: 'BAZ BEER Ede Bácsi', imageUrl: '/BAZ BEER Ede bacsi.png', description: 'Egy könnyű belga blonde ale, ami visszafogott keserűséggel és kellemes fűszerezettséggel oltja a szomjat.' },
    { id: 2, name: 'BAZ BEER Kenderes IPA', imageUrl: '/BAZ BEER Kenderes IPA.png', description: 'A gyógyhatású kender ízvilágának újraalkotásával létrehozott vadonatúj, felséges sör, mely kiválóan elegyíti a kender és a komló változatos ízeit.' },
    { id: 3, name: 'Alkimista Mangolea', imageUrl: '/Mangós 0,33.jpg', description: 'Mangóvelővel ízesített, búzasör alapú gyümölcsössör. Trópusi gyümölcsösség és enyhe keserűség jellemzi.  ' },
  ];

  export default products;