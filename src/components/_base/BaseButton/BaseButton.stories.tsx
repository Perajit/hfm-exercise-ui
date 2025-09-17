import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import { fn } from 'storybook/test';
import BaseButton, { BaseButtonProps } from './BaseButton';

type StoryArgs = Omit<BaseButtonProps, 'children'> & {
  children: string;
};

const meta = {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    color: {
      options: [
        'default',
        'blue',
        'cyan',
        'dark',
        'gray',
        'green',
        'indigo',
        'light',
        'lime',
        'pink',
        'purple',
        'red',
        'teal',
        'yellow',
        'transparent',
      ],
      control: { type: 'select' },
      table: {
        type: { summary: 'BaseButtonProps[\'color\']', },
      },
      defaultValue: { summary: 'default' },
    },
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
      ],
      control: { type: 'radio' },
      table: {
        type: { summary: 'BaseButtonProps[\'size\']' },
      },
      defaultValue: { summary: 'md' },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      table: { disable: true },
    },
  },
  args: {
    onClick: fn(),
  },
  render: (args) => {
    const { children, ...otherArgs } = args;
    return (
      <BaseButton {...otherArgs}>
        <ReactJsxParser jsx={children} renderInWrapper={false} />
      </BaseButton>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    children: '<span className="uppercase">Click me</span>',
    color: 'default',
    className: '',
  },
};
