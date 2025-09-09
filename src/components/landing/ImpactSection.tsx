import { Button } from '@/components/ui/button';
import {
  Shield,
  ArrowRight,
  Heart,
  Star,
  Truck,
  Package,
} from 'lucide-react';


// Impact Section
export const ImpactSection = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
            Our total green impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                3,927 kg
              </div>
              <div className="text-gray-600">of CO2 saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                2,546,187 days
              </div>
              <div className="text-gray-600">of drinking water saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                7,321 kWh
              </div>
              <div className="text-gray-600">of energy saved</div>
            </div>
          </div>

          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
            Find something you love.
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facililis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>

          {/* Product Grid */}
          <div className="mb-12">
            <img src="/footer.png" alt="footer" className="w-full h-[372.99560546875px] rounded-lg" />
          </div>

          <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium mb-8">
            Customize Your Outfit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Footer Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3">
              <Package className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                FREE Shipping on Orders over $200
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                Over 500+ 5 Star Reviews Online
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                Made ethically and responsibly
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 rounded-lg mt-16 p-8">
      <div>
        {/* Top shipping info */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Ships in 1-2 Days</span>
            <div className="flex space-x-1 ml-4">
              <div className="w-8 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">visa</span>
              </div>
              <div className="w-8 h-5 bg-red-600 rounded-sm"></div>
              <div className="w-8 h-5 bg-blue-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-yellow-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-purple-600 rounded-sm"></div>
              <span className="text-gray-500 text-xs ml-1">and more</span>
            </div>
          </div>
        </div>

        {/* Main features */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          {/* Free Shipping */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Truck className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">FREE Shipping on</h3>
              <p className="text-gray-600">Orders over $200</p>
            </div>
          </div>

          {/* 500+ Reviews */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Shield className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Over 500+ 5 Star</h3>
              <p className="text-gray-600">Reviews Online</p>
            </div>
          </div>

          {/* Made Ethically */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Heart className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Made ethically</h3>
              <p className="text-gray-600">and responsibly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}