import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Star,
  Package,
  Sparkles,
  Droplets,
} from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="bg-white relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-[50px] font-bold text-black">BYTEEX</div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight font-bold">
                Don't apologize for being{' '}
                <span className="text-gray-900">comfortable.</span>
              </h1>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span>
                    Beautiful, comfortable loungewear for day or night.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span>
                    No wasteful extras, like tags or plastic packaging.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Droplets className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span>
                    Our signature fabric is incredibly comfortable — unlike
                    anything you've ever felt.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-md font-medium">
                Customize Your Outfit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="relative">
            <img
              src="/HeroSection.png"
              alt="Decorative"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Customer Review - floating box */}
          <div className="absolute left-0 top-[450px] bg-white shadow-md p-5 rounded-lg max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="/avatar.png"
                alt="Amy P."
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-medium text-sm">Amy P.</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 ml-auto">
                One of 500+ 5 Star Reviews Online
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Bottom with Logos */}
      <div className="mt-32 bg-gradient-to-br from-amber-50 to-orange-100 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-gray-500">as seen in</span>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 opacity-60">
            <div className="text-lg font-light text-gray-400">ECO-STYLIST</div>
            <div className="text-lg font-light text-gray-400">
              Canadian Living
            </div>
            <div className="text-lg font-light text-gray-400">
                <img src="/Artboard2.png" alt="Jillian Harris" className="inline-block h-6" />
            </div>
            <div className="text-lg font-light text-gray-400"><img src='/Artboard4.png' alt='The Eco Hub' className="inline-block h-8" /></div>
            <div className="text-lg font-light text-gray-400"><img src='/Artboard5.png' alt='TRENDHUNTER' className="inline-block h-8" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}