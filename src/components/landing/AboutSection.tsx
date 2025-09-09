import * as prismic from "@prismicio/client";
interface AboutSectionProps {
  title: prismic.RichTextField;
  description: prismic.RichTextField;
  image: prismic.ImageField;
}

export const AboutSection = ({ title, description, image }: AboutSectionProps) => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            {image?.url && (
              <img
                src={image.url}
                alt={image.alt ?? "About"}
                className="w-full h-[664px] object-cover rounded-lg"
              />
            )}
          </div>

          <div className="space-y-6">
            {title && (
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                {prismic.asText(title)}
              </h2>
            )}

            {description && (
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {description.map((block, i) => (
                  <p key={i}>{prismic.asText([block])}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
