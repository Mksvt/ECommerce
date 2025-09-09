import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as prismic from "@prismicio/client";

interface ProductFeaturesSectionProps {
  features: {
    feature_title: prismic.RichTextField;
    feature_description: prismic.RichTextField;
    feature_image: prismic.ImageField;
  }[];
}

export const ProductFeaturesSection = ({
  features,
}: ProductFeaturesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!features?.length) return null;

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Features List */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Loungewear you can be proud of.
            </h2>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {/* Іконку можна винести в Prismic, якщо треба */}
                    <span className="text-[#01005B]">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {prismic.asText(feature.feature_title)}
                    </h3>
                    <p className="text-gray-600">
                      {prismic.asText(feature.feature_description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Slider */}
          <div className="relative">
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              onClick={() =>
                setCurrentIndex(
                  currentIndex > 0 ? currentIndex - 1 : features.length - 1
                )
              }
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              onClick={() =>
                setCurrentIndex(
                  currentIndex < features.length - 1 ? currentIndex + 1 : 0
                )
              }
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>

            <div className="h-[648px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {true ? (
                <img
                  src="/Desribe.png"
                  alt={
                    features[currentIndex].feature_image.alt ?? "Product feature"
                  }
                  className="w-full h-auto object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>

            <div className="mt-4 text-center">
              <span className="text-gray-600">
                {prismic.asText(features[currentIndex].feature_title)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
