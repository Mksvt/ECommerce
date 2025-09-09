import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  Package,
  Sparkles,
  Droplets,
} from 'lucide-react';

// Product Features Section (Second image from design)
export const ProductFeaturesSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { color: 'White Robe', bg: 'bg-[#E8D5C4]' },
    { color: 'Grey Set', bg: 'bg-gray-200' },
    { color: 'Beige Set', bg: 'bg-amber-100' },
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Loungewear you can be proud of.
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Package className="w-4 h-4 text-[#01005B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ethically sourced.
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Truck className="w-4 h-4 text-[#01005B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Responsibly made.
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-[#01005B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Made for living in.
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilitis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Droplets className="w-4 h-4 text-[#01005B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Unimaginably comfortable.
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilitis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Image with Color Selector */}
          <div className="relative">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                onClick={() =>
                  setCurrentImage(
                    currentImage > 0 ? currentImage - 1 : images.length - 1
                  )
                }
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                onClick={() =>
                  setCurrentImage(
                    currentImage < images.length - 1 ? currentImage + 1 : 0
                  )
                }
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>

              {/* Main Product Image */}
              <div
                className={`h-[648px] lg:h-40 rounded-lg overflow-hidden ${images[currentImage].bg}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-500">
                    Product Image - {images[currentImage].color}
                    <img src="/Desribe.png" alt="Product" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              {/* Color Selector */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${
                      currentImage === index
                        ? 'border-gray-900'
                        : 'border-gray-300'
                    } ${image.bg}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Name */}
            <div className="mt-4 text-center">
              <span className="text-gray-600">
                {images[currentImage].color}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}