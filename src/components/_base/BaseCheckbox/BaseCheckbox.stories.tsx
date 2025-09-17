import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import { fn } from 'storybook/test';
import BaseCheckbox, { BaseCheckboxProps } from './BaseCheckbox';

type StoryArgs = Omit<BaseCheckboxProps, 'label'> & {
  label: string;
};

const meta = {
  title: 'Components/Base/BaseCheckbox',
  component: BaseCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    errorMessage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    onChange: fn(),
  },
  render: (args) => {
    const { label, ...otherArgs } = args;
    return (
      <BaseCheckbox
        {...otherArgs}
        label={
          <ReactJsxParser jsx={label} renderInWrapper={false} />
        }
      />
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    label: '<span class="text-red-500">This is an option</span>.',
  },
};
