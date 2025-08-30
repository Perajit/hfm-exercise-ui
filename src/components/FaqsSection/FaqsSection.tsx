import BaseSection from '@/components/_base/BaseSection';
import { Faq } from '@/types/faq.model';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import { FC, HTMLProps } from 'react';

const faqList: Faq[] = [
  {
    key: 'a',
    question: 'Question A',
    answer: 'Answer A',
  },
  {
    key: 'b',
    question: 'Question B',
    answer: 'Answer B',
  },
  {
    key: 'c',
    question: 'Question C',
    answer: 'Answer C',
  },
  {
    key: 'd',
    question: 'Question D',
    answer: 'Answer D',
  },
];

export type FaqsSectionProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

const FaqsSection: FC<FaqsSectionProps> = (props) => {
  const title = 'FAQs';

  return (
    <BaseSection
      data-testid="faqs-section"
      title={title}
      {...props}
    >
      <Accordion className="border-0">
        {faqList.map((faq) => (
          <AccordionPanel key={faq.key}>
            <AccordionTitle className="text-xl font-semibold">{faq.question}</AccordionTitle>
            <AccordionContent className="">{faq.answer}</AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
    </BaseSection>
  );
};

export default FaqsSection;
