import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { FC, ReactNode, useState } from 'react';
import BaseButton, { BaseButtonProps } from '../BaseButton/BaseButton';

export type BaseModalTriggerContext = {
  openModal: () => void;
  closeModal: () => void;
};

export type BaseModalProps = {
  modalDismissible?: boolean;
  renderTrigger?: (ctx: BaseModalTriggerContext) => ReactNode;
  triggerContent?: ReactNode;
  triggerProps?: BaseButtonProps;
  headerContent?: ReactNode;
  renderHeaderContent?: (ctx: BaseModalTriggerContext) => ReactNode;
  footerContent?: ReactNode;
  renderFooterContent?: (ctx: BaseModalTriggerContext) => ReactNode;
  bodyContent?: ReactNode;
  renderBodyContent?: (ctx: BaseModalTriggerContext) => ReactNode;
  className?: string;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
};

const BaseModal: FC<BaseModalProps> = (props) => {
  const {
    modalDismissible,
    renderTrigger,
    triggerContent,
    triggerProps,
    renderHeaderContent,
    headerContent,
    renderFooterContent,
    footerContent,
    renderBodyContent,
    bodyContent,
    className,
    onOpenModal,
    onCloseModal,
  } = props;
  const [modalShown, setModalShown] = useState(false);

  const openModal = () => {
    setModalShown(true);
    onOpenModal?.();
  };

  const closeModal = () => {
    setModalShown(false);
    onCloseModal?.();
  };

  const modalHeaderContent = renderHeaderContent?.({ openModal, closeModal }) ?? headerContent;
  const modalFooterContent = renderFooterContent?.({ openModal, closeModal }) ?? footerContent;
  const modalBodyContent = renderBodyContent?.({ openModal, closeModal }) ?? bodyContent;

  return (
    <>
      {renderTrigger?.({ openModal, closeModal }) ?? (
        <BaseButton {...triggerProps} onClick={openModal}>
          {triggerContent}
        </BaseButton>
      )}
      <Modal
        className={className}
        dismissible={modalDismissible}
        show={modalShown}
        onClose={closeModal}
      >
        {modalHeaderContent? (
          <ModalHeader>
            {modalHeaderContent}
          </ModalHeader>
        ) : null}
        {modalBodyContent? (
          <ModalBody>
            {modalBodyContent}
          </ModalBody>
        ) : null}
        {modalFooterContent ? (
          <ModalFooter>
            {modalFooterContent}
          </ModalFooter>
        ) : null}
      </Modal>
    </>
  );
};

export default BaseModal;
