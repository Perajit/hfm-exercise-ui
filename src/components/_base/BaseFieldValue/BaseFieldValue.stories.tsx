import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import BaseFieldValue, { BaseFieldValueProps } from './BaseFieldValue';

type StoryArgs = Omit<BaseFieldValueProps, 'value'> & {
  value: string;
};

const meta = {
  title: 'Components/Base/BaseFieldValue',
  component: BaseFieldValue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    field: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  render: (args) => {
    const { value, ...otherArgs } = args;
    return (
      <BaseFieldValue
        {...otherArgs}
        value={<ReactJsxParser jsx={value} renderInWrapper={false} />}
      />
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    field: 'Content',
    value: '<span class="text-red-500">This is a content</span>.',
    className: 'border border-gray-500',
  },
};
