import { Meta, StoryObj } from '@storybook/react-vite';
import { LuCircleUserRound, LuUserRound, LuUserRoundCog } from 'react-icons/lu';
import { fn } from 'storybook/test';
import BaseDropdownMenu from './BaseDropdownMenu';

const meta = {
  title: 'Components/Base/BaseDropdownMenu',
  component: BaseDropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      table: { summary: 'BaseDropdownOption[]' },
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
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof BaseDropdownMenu>;

export default meta;
type Story = StoryObj<typeof BaseDropdownMenu>;

export const Default: Story = {
  args: {
    items: [
      {
        key: 'item_1',
        content: 'Item 1',
        onClick: fn(),
      },
      {
        key: 'divider_1',
        asDivider: true,
      },
      {
        key: 'item_2',
        content: 'Item 2',
        children: [
          {
            key: 'item_2_1',
            content: 'Item 2.1',
            linkTo: '#',
          },
          {
            key: 'item_2_1',
            content: 'Item 2.2',
            children: [
              {
                key: 'item_2_1_1',
                content: 'Item 2.1.1',
                linkTo: '#',
              },
            ],
          },
        ],
      },
    ],
  },
  render: (args) => {
    return (
      <BaseDropdownMenu
        {...args}
        renderTrigger={() => <div className="text-red-500 cursor-pointer">Click me</div>}
      />
    );
  },
  decorators: [
    (Story) => (
      <div className="h-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  args: {
    items: [
      {
        key: 'my-page',
        content: (
          <div className="flex gap-2 justify-start items-center">
            <LuUserRound size={18} />
            <span>My Dashboard</span>
          </div>
        ),
      },
      {
        key: 'my-profile',
        content: (
          <div className="flex gap-2 justify-start items-center">
            <LuUserRoundCog size={18} />
            <span>My Profile</span>
          </div>
        ),
      },
    ],
  },
  render: (args) => {
    return (
      <BaseDropdownMenu
        {...args}
        renderTrigger={() => <LuCircleUserRound size={24} className="cursor-pointer" />}
      />
    );
  },
  decorators: [
    (Story) => (
      <div className="h-[100px]">
        <Story />
      </div>
    ),
  ],
};
