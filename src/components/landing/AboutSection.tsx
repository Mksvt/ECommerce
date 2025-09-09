import { Button } from '@/components/ui/button';

// About Section (Third image from design)
export const AboutSection = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Images Grid */}
          <div className="relative">
            <img src="/Triple.png" alt="Decorative" className="top-0 left-0 w-full h-[664px] bg-amber-950" />
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
              <Button className="bg-[#01005B] hover:bg-gray-800 text-white px-8 py-4 rounded-md font-medium">
                Customize Your Outfit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}