import { useState } from 'react';
import {
  Menu,
  X,
} from 'lucide-react';

// Navigation Component
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white relative z-50">
      {/* Top Banner */}
      <div className="bg-red-50 py-2 text-center text-xs text-gray-600">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders &gt; $200 | easy 45 day return window.
      </div>

      <div>
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Reviews
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700">
              Shop
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700">
              Reviews
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}