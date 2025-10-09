import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Package, Sparkles, Droplets } from 'lucide-react';
import * as prismic from '@prismicio/client';

interface HeroSectionProps {
  title: prismic.KeyTextField;
  subtitle: prismic.KeyTextField;
  description: prismic.RichTextField;
  buttonText: prismic.KeyTextField;
  image: prismic.ImageField;
  isLoading?: boolean;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  image,
  isLoading = false,
}: HeroSectionProps) => {
  return (
    <div className="bg-white relative font-roboto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Лого або бренд */}
              <div className="text-[50px] font-bold text-black">
                Maksym Ecom
              </div>

              {/* Title */}
              {isLoading ? (
                <div className="h-12 w-3/4 bg-gray-200 animate-pulse rounded" />
              ) : (
                title && (
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight font-bold">
                    {title}
                  </h1>
                )
              )}

              {/* Subtitle */}
              {isLoading ? (
                <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded" />
              ) : (
                subtitle && (
                  <h2 className="text-xl text-gray-700">{subtitle}</h2>
                )
              )}

              {/* Description */}
              {isLoading ? (
                <div className="h-5 w-full bg-gray-200 animate-pulse rounded mb-2" />
              ) : (
                description && (
                  <p className="text-gray-600 text-lg">
                    {prismic.asText(description)}
                  </p>
                )
              )}

              {/* Features list (залишив приклади з іконками) */}
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

            {/* CTA Button */}
            {isLoading ? (
              <div className="h-12 w-40 bg-gray-200 animate-pulse rounded" />
            ) : (
              buttonText && (
                <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-md font-medium">
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )
            )}
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {isLoading ? (
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
            ) : image?.url ? (
              <img
                src={image.url}
                alt={image.alt ?? "Hero image"}
                className="w-full h-auto rounded-lg"
                loading="lazy"
                width={image.dimensions?.width}
                height={image.dimensions?.height}
              />
            ) : (
              <img
                src="/HeroSection.png"
                alt="Fallback hero"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                width={800}
                height={400}
              />
            )}
          </div>

          {/* Customer Review floating box */}
          <div className="absolute left-0 top-[450px] bg-white shadow-md p-5 rounded-lg max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              {isLoading ? (
                <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full" />
              ) : (
                <img
                  src="/avatar.png"
                  alt="Amy P."
                  className="w-8 h-8 rounded-full"
                  loading="lazy"
                  width={32}
                  height={32}
                />
              )}
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
              packaging, to the supplied washing bag, even the garments smelled
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
              <img
                src="/Artboard2.png"
                alt="Jillian Harris"
                className="inline-block h-6"
                loading="lazy"
                width={100}
                height={24}
              />
            </div>
            <div className="text-lg font-light text-gray-400">
              <img
                src="/Artboard4.png"
                alt="The Eco Hub"
                className="inline-block h-8"
                loading="lazy"
                width={100}
                height={32}
              />
            </div>
            <div className="text-lg font-light text-gray-400">
              <img
                src="/Artboard5.png"
                alt="TRENDHUNTER"
                className="inline-block h-8"
                loading="lazy"
                width={100}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
