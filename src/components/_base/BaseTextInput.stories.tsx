import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import BaseTextInput from './BaseTextInput';

const meta = {
  title: 'Components/Base/BaseTextInput',
  component: BaseTextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
      ],
      control: { type: 'radio' },
      table: {
        type: { summary: 'BaseTextInput[\'size\']' },
      },
      defaultValue: { summary: 'md' },
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
        type: {
          summary: 'string',
        },
      },
    },
    onBlur: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    onBlur: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof BaseTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
