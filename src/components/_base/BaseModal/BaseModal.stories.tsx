import BaseButton from '@/components/_base/BaseButton/BaseButton';
import { Meta, StoryObj } from '@storybook/react-vite';
import ReactJsxParser from 'react-jsx-parser';
import { fn } from 'storybook/test';
import BaseModal, { BaseModalProps } from './BaseModal';

type StoryArgs = Omit<BaseModalProps, 'triggerContent' | 'headerContent' | 'footerContent' | 'bodyContent'> & {
  triggerContent: string;
  headerContent: string;
  footerContent: string;
  bodyContent: string;
};

const meta = {
  title: 'Components/Base/BaseModal',
  component: BaseModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalDismissible: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
      defaultValue: { summary: false },
    },
    renderTrigger: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    triggerContent: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    triggerProps: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'BaseButtonProps',
        },
      },
    },
    renderHeaderContent: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    headerContent: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    renderFooterContent: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    footerContent: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    renderBodyContent: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    bodyContent: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
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
    onOpenModal: {
      table: { disable: true },
    },
    onCloseModal: {
      table: { disable: true },
    },
  },
  args: {
    onOpenModal: fn(),
    onCloseModal: fn(),
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    modalDismissible: true,
    triggerContent: '<span className="uppercase">Click me</span>',
    triggerProps: { color: 'green' },
    headerContent: '<span className="text-red-500">This is a header</span>.',
    footerContent: '<span className="text-red-500">This is a footer</span>.',
    bodyContent: '<span className="text-red-500">This is a body</span>.',
  },
  render: (args) => {
    const { triggerContent, headerContent, footerContent, bodyContent, ...otherArgs } = args;

    return (
      <BaseModal
        {...otherArgs}
        triggerContent={<ReactJsxParser jsx={triggerContent} renderInWrapper={false} />}
        headerContent={<ReactJsxParser jsx={headerContent} renderInWrapper={false} />}
        footerContent={<ReactJsxParser jsx={footerContent} renderInWrapper={false} />}
        bodyContent={<ReactJsxParser jsx={bodyContent} renderInWrapper={false} />}
      />
    );
  },
};

export const CustomRender: Story = {
  args: {
    modalDismissible: true,
    renderTrigger: ({ openModal }) => (
      <div className="text-red-500 cursor-pointer" onClick={openModal}>
        Custom trigger
      </div>
    ),
    renderHeaderContent: () => (
      <span className="text-red-500">
        Custom header.
      </span>
    ),
    renderFooterContent: ({ closeModal }) => (
      <>
        <span className="basis-full text-red-500">
          Custom footer.
        </span>
        <span className="flex gap-2">
          <BaseButton color="light" onClick={closeModal}>Cancel</BaseButton>
          <BaseButton onClick={closeModal}>Ok</BaseButton>
        </span>
      </>
    ),
    renderBodyContent: () => (
      <span className="text-red-500">
        Custom body.
      </span>
    ),
  },
};

export const WithoutHeaderAndFooter: Story = {
  args: {
    modalDismissible: true,
    triggerContent: '<span className="uppercase">Click me</span>',
    triggerProps: { color: 'green' },
    bodyContent: '<span className="text-red-500">This is a body</span>.',
  },
  render: (args) => {
    const { triggerContent, bodyContent, ...otherArgs } = args;

    return (
      <BaseModal
        {...otherArgs}
        triggerContent={<ReactJsxParser jsx={triggerContent} renderInWrapper={false} />}
        bodyContent={<ReactJsxParser jsx={bodyContent} renderInWrapper={false} />}
      />
    );
  },
};
