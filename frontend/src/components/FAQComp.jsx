import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Title from './Title'

const faqs = [
  { question: "What's the best thing about Switzerland?", answer: "I don’t know, but the flag is a big plus!" },
  { question: "How do you make holy water?", answer: "You boil the hell out of it." },
  { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
  { question: "Why do you never see elephants hiding in trees?", answer: "Because they're so good at it." },
  { question: "Why can't you hear a pterodactyl go to the bathroom?", answer: "Because the 'P' is silent." },
  { question: "Why did the invisible man turn down the job offer?", answer: "He couldn't see himself doing it." }
];

export default function FAQComp() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
        <div className='text-3xl text-center pt-8 border-t mb-12'>
          <Title text1={'FREQUENTLY ASKED QUESTIONS'}/>
        </div>
      <div className="space-y-7">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium py-3"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
