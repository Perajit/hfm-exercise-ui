import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import BaseDropdown from './BaseDropdown';

const meta = {
  title: 'Components/Base/BaseDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      table: { summary: 'BaseDropdownOption[]' },
    },
    placeholder: {
      control: { type: 'text' },
      table: { summary: 'string' },
    },
    errorMessage: {
      control: { type: 'text' },
      table: { summary: 'string' },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      table: { disable: true },
    },
  },
  args: {
    onChange: fn(),
  },
  decorators: [
    (Story) => (
      <div className="h-[160px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BaseDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: 'option_1', label: 'Option 1' },
      { value: 'option_2', label: 'Option 2' },
      { value: 'option_3', label: 'Option 3' },
    ],
    placeholder: 'Select option',
  },
};
