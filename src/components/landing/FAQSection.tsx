import { useState } from 'react';
import {
  Plus,
} from 'lucide-react';

export const FAQSection = () => {
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
            <img src="/FQS.png" alt="FAQ Image " className="w-full h-[645px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}