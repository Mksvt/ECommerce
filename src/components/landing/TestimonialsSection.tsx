import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Testimonials Section
export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Jane S.',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id orcu congue, faucibus libero nec, placerat ligula.',
    },
    {
      name: 'Maria T.',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facililis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id orcu congue.',
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            What are our fans saying?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. Fusce non nibh luctus.
          </p>
        </div>

        {/* Image Gallery
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 mb-12">
          {[...Array(24)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
            </div>
          ))}
        </div> */}

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial > 0
                    ? currentTestimonial - 1
                    : testimonials.length - 1
                )
              }
              className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-sm">
                          {testimonial.name}
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial < testimonials.length - 1
                    ? currentTestimonial + 1
                    : 0
                )
              }
              className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center">
            <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
              Customize Your Outfit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex justify-center items-center space-x-1 text-yellow-400 mt-4">
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