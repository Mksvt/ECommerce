import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Truck,
  Package,
  Sparkles,
  Droplets,
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      {/* Top Banner */}
      <div className="bg-blue-50 py-2 px-4 text-center text-sm text-gray-600">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) • FREE
        SHIPPING on orders &gt; $200 • easy 45 day return window.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">BYTEEX</div>

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

// Hero Section Component
function HeroSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                Don't apologize for being{' '}
                <span className="text-gray-900">comfortable.</span>
              </h1>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Beautiful, comfortable loungewear for day or night.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    No wasteful extras, like tags or plastic packaging.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Droplets className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Our signature fabric is incredibly comfortable — unlike
                    anything you've ever felt.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
                Customize Your Outfit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Customer Review */}
            <div className="bg-gray-50 p-4 rounded-lg max-w-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Amy P.</div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
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

          {/* Right Content - Hero Images */}
          <div className="relative">
            <img
              src="/HeroSection.png"
              alt="Decorative"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Press Logos */}
      <div className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">as seen in</span>
          </div>
          <div className="flex justify-center items-center space-x-8 lg:space-x-12 opacity-40">
            <div className="text-lg font-light text-gray-400">ECO-STYLIST</div>
            <div className="text-lg font-light text-gray-400">
              Canadian Living
            </div>
            <div className="text-lg font-light text-gray-400">
              JILLIAN HARRIS
            </div>
            <div className="text-lg font-light text-gray-400">THE ECO HUB</div>
            <div className="text-lg font-light text-gray-400">TRENDHUNTER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Features Section (Second image from design)
function ProductFeaturesSection() {
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
                  <Package className="w-4 h-4 text-blue-600" />
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
                  <Truck className="w-4 h-4 text-blue-600" />
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
                  <Sparkles className="w-4 h-4 text-blue-600" />
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
                  <Droplets className="w-4 h-4 text-blue-600" />
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
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Main Product Image */}
              <div
                className={`aspect-[3/4] rounded-lg overflow-hidden ${images[currentImage].bg}`}
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

// About Section (Third image from design)
function AboutSection() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Images Grid */}
          <div className="relative">
            <img src="/Triple.png" alt="Decorative" className="top-0 left-0 w-full h-full object-cover bg-amber-950" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Be your best self.
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! My name's [Insert Name], and I founded [Insert] in ____.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>

              <p>
                Fusce non nibh luctus, dignissim risus quis, bibendum dolor.
                Donec placerat volutpat ligula, ac consectetur felis varius non.
                Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
                Vivamus id orcu congue, faucibus libero nec, placerat ligula.
              </p>

              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
              </p>

              <p>
                Fusce non ante velit. Sed auctor odio eu tempor molestie. Nam
                mattis, sapien eget lobortis fringilla, eros ipsum tristique
                tellus, ac convallis urna massa at nibh.
              </p>

              <p>
                Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
                euismod leo aliquam ut. Vivamus in felis eu lacus laoreet
                aliquam nec ut sapien.
              </p>

              <p className="font-medium">Cras mattis varius mollis.</p>
            </div>

            <div className="pt-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
                Customize Your Outfit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Benefits Section
function BenefitsSection() {
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
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
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

// Testimonials Section
function TestimonialsSection() {
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
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium">
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

// FAQ Section
function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - FAQ List */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Frequently asked questions.
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="w-full py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-gray-900">{faq.question}</span>
                    <Plus
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openFaq === index ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div>
            <img src="/FQS.png" alt="FAQ Image " className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Impact Section
function ImpactSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
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
            <img src="/footer.png" alt="footer" className="w-full h-auto rounded-lg" />
          </div>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium mb-8">
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
        </div>
      </div>
    </div>
  );
}

// Main Landing Page Component
export default function ByteexLanding() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductFeaturesSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ImpactSection />
    </div>
  );
}

export { ByteexLanding };
