import React from 'react';
import { Wine, Search, ShoppingCart, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import WineCard from './components/WineCard';
import { wines } from './data/wines';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wine className="h-8 w-8 text-red-700" />
              <span className="text-2xl font-semibold">VínoShop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-700">Domů</a>
              <a href="#" className="text-gray-700 hover:text-red-700">Červená vína</a>
              <a href="#" className="text-gray-700 hover:text-red-700">Bílá vína</a>
              <a href="#" className="text-gray-700 hover:text-red-700">Růžová vína</a>
              <a href="#" className="text-gray-700 hover:text-red-700">O nás</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="h-6 w-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Objevte svět kvalitních vín</h1>
            <p className="text-xl mb-8">Pečlivě vybraná kolekce nejlepších vín z Moravy i světa</p>
            <button className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition">
              Prozkoumat nabídku
            </button>
          </div>
        </div>
      </div>

      {/* Featured Wines */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Doporučená vína</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="h-6 w-6" />
                <span className="text-xl font-semibold">VínoShop</span>
              </div>
              <p className="text-gray-400">Váš spolehlivý partner ve světě vína</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+420 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@vinoshop.cz</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sledujte nás</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-red-500">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-900"
                />
                <button className="bg-red-700 px-4 py-2 rounded-r-lg hover:bg-red-800">
                  Odebírat
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;