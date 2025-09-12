import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import BaseSection, { BaseSectionProps } from './BaseSection';

type StoryArgs = Omit<BaseSectionProps, 'title' | 'children'> & {
  title: string;
  children: string;
};

const meta = {
  title: 'Components/Base/BaseSection',
  component: BaseSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  render: (args) => {
    const { title, children, ...otherArgs } = args;

    return (
      <BaseSection
        title={
          <ReactJsxParser jsx={title ?? ''} renderInWrapper={false} />
        }
        {...otherArgs}
      >
        <ReactJsxParser jsx={children ?? ''} renderInWrapper={false} />
      </BaseSection>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    title: '<span className="uppercase">Section Title</span>',
    children: 'This is a section <span className="text-red-500">content</span>.',
    className: 'bg-gray-200',
  },
};
