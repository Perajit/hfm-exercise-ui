import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import BaseButton from './BaseButton';
import BaseModalTrigger from './BaseModalTrigger';

const meta = {
  title: 'Components/Base/BaseModalTrigger',
  component: BaseModalTrigger,
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
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactElement' },
    },
    renderModalHeader: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    renderModalBody: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    renderModalFooter: {
      table: { summary: '(ctx: BaseModalTriggerContext) => ReactNode' },
    },
    modalClassName: {
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
} satisfies Meta<typeof BaseModalTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalDismissible: true,
    renderTrigger: (ctx) => <BaseButton onClick={ctx.openModal}>Trigger</BaseButton>,
    renderModalHeader: () => <>This is a header.</>,
    renderModalBody: () => <>This is a body.</>,
    renderModalFooter: ({ closeModal }) => (
      <>
        <span className="basis-full">
          This is footer.
        </span>
        <span className="flex gap-2">
          <BaseButton color="light" onClick={closeModal}>Cancel</BaseButton>
          <BaseButton onClick={closeModal}>Ok</BaseButton>
        </span>
      </>
    ),
  },
};

export const WithoutHeaderAndFooter: Story = {
  args: {
    modalDismissible: true,
    renderTrigger: (ctx) => <BaseButton onClick={ctx.openModal}>Trigger</BaseButton>,
    renderModalBody: () => <>This is a body.</>,
  },
};
