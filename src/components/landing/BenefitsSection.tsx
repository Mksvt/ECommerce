import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Star,
  Truck,
  Package,
  Sparkles,
} from 'lucide-react';

// Benefits Section
export const BenefitsSection = () => {
  return (
    <div className="bg-blue-50 py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-blue-200 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Comfort made easy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center mb-4">
                <Package className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">You save.</h3>
              <p className="text-gray-600">
                Browse our comfort sets and save 15% when you bundle.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-[#E8D5C4] aspect-square rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">We ship.</h3>
              <p className="text-gray-600">
                We ship your items within 1-2 days of receiving your order.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                You enjoy!
              </h3>
              <p className="text-gray-600">
                Wear them around the house, out on the town, or in bed.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
              Customize Your Outfit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                Over 500+ 5 Star Reviews Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}