import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Heart, Shield } from "lucide-react";
import * as prismic from "@prismicio/client";

interface ImpactSectionProps {
  impactItems: {
    impact_number: prismic.KeyTextField;
    impact_label: prismic.KeyTextField;
  }[];
}

export const ImpactSection = ({ impactItems }: ImpactSectionProps) => {
  return (
    <section className="bg-gray-50">
      {/* Impact Numbers */}
      <div className="text-center bg-[#F0EEEF] py-12">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
          Our total green impact
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {impactItems?.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                {item.impact_number}
              </div>
              <div className="text-gray-600">{item.impact_label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 px-4">
        <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
          Find something you love.
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
          sapien facilisis tincidunt pellentesque.
        </p>

        <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
          Customize Your Outfit
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      {/* Highlight Section */}
      <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 rounded-lg mt-8 p-8">
        {/* Top Shipping Info */}
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

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Truck className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">FREE Shipping on</h3>
              <p className="text-gray-600">Orders over $200</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Shield className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Over 500+ 5 Star</h3>
              <p className="text-gray-600">Reviews Online</p>
            </div>
          </div>

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
    </section>
  );
};
