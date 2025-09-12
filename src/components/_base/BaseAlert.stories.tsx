import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import { fn } from 'storybook/test';
import BaseAlert, { BaseAlertProps } from './BaseAlert';

type StoryArgs = Omit<BaseAlertProps, 'children' | 'additionalContent'> & {
  children: string;
  additionalContent: string;
}

const meta = {
  title: 'Components/Base/BaseAlert',
  component: BaseAlert,
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
    additionalContent: {
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    color: {
      options: [
        'info',
        'success',
        'failure',
        'warning',
      ],
      control: { type: 'radio' },
      table: {
        type: { summary: 'BaseAlertProps[\'color\']' },
        defaultValue: { summary: 'info' },
      },
    },
    withDefaultIcon: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
      defaultValue: { summary: false },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    onDismiss: {
      table: { disable: true },
    },
  },
  args: {
    onDismiss: fn(),
  },
  render: (args) => {
    const { children, additionalContent, ...otherArgs } = args;
    return (
      <BaseAlert
        {...otherArgs}
        additionalContent={
          <ReactJsxParser jsx={additionalContent} renderInWrapper={false} />
        }
      >
        <ReactJsxParser jsx={children} renderInWrapper={false} />
      </BaseAlert>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    children: '<>Title line 1<br />Title line 2</>',
    additionalContent: 'This is a <span className="text-red-500">content</span>.',
    withDefaultIcon: false,
  },
};
