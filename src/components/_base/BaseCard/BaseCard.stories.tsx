import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import BaseCard, { BaseCardProps } from './BaseCard';

type StoryArgs = Omit<BaseCardProps, 'children'> & {
  children: string;
}

const meta = {
  title: 'Components/Base/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    color: {
      options: [
        'white',
        'gray',
      ],
      control: { type: 'radio' },
      table: {
        type: { summary: 'BaseCardProps[\'color\']' },
      },
      defaultValue: { summary: 'white' },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  render: (args) => {
    const { children, ...otherArgs } = args;
    return (
      <BaseCard {...otherArgs}>
        <ReactJsxParser jsx={children} renderInWrapper={false} />
      </BaseCard>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    children: '<span class="text-red-500">This is a content</span>.',
    className: 'border border-gray-500',
  },
};
