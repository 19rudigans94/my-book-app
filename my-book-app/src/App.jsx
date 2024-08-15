import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  const siteInfo = {
    logo: 'https://free-png.ru/wp-content/uploads/2022/11/free-png.ru-358.png',
    phone: '+123456789',
    email: 'info@example.com',
    socialLinks: [
      { name: 'Facebook', url: 'https://facebook.com' },
      { name: 'Twitter', url: 'https://twitter.com' },
      { name: 'Instagram', url: 'https://instagram.com' },
    ],
  };

  const books = [
    {
      id: 1,
      title: 'Book One',
      description: 'Description of Book One.',
      image: 'https://i.obozrevatel.com/gallery/2018/2/16/screenshot44.png',
    },
    {
      id: 2,
      title: 'Book Two',
      description: 'Description of Book Two.',
      image: 'https://png.klev.club/uploads/posts/2024-06/png-klev-club-4tc7-p-oblozhka-vog-png-3.png',
    },
    {
      id: 3,
      title: 'Book Three',
      description: 'Description of Book Three.',
      image: 'https://avatars.dzeninfra.ru/get-zen_doc/3453969/pub_5f4a40674f1d400cca12b0cf_5f4a40b6fe0a99485940a730/scale_1200',
    },
    {
      id: 4,
      title: 'Book Four',
      description: 'Description of Book Four.',
      image: 'https://e7.pngegg.com/pngimages/507/671/png-clipart-katy-perry-vogue-singer-magazine-graphy-magazine-fashion-fashion-model-thumbnail.png',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header info={siteInfo} />
      <MainSection books={books} />
      <Footer info={siteInfo} />
    </div>
  );
}

export default App;
