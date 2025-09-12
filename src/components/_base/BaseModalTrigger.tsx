import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { FC, ReactElement, ReactNode, useState } from 'react';

export type BaseModalTriggerContext = {
  openModal: () => void;
  closeModal: () => void;
};

export type BaseModalTriggerProps = {
  modalDismissible?: boolean;
  renderTrigger: (ctx: BaseModalTriggerContext) => ReactElement;
  renderModalHeader?: (ctx: BaseModalTriggerContext) => ReactNode;
  renderModalBody: (ctx: BaseModalTriggerContext) => ReactNode;
  renderModalFooter?: (ctx: BaseModalTriggerContext) => ReactNode;
  modalClassName?: string;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
};

const BaseModalTrigger: FC<BaseModalTriggerProps> = (props) => {
  const { modalDismissible, renderTrigger, renderModalHeader, renderModalBody, renderModalFooter, modalClassName, onOpenModal, onCloseModal } = props;
  const [modalShown, setModalShown] = useState(false);

  const openModal = () => {
    setModalShown(true);
    onOpenModal?.();
  };

  const closeModal = () => {
    setModalShown(false);
    onCloseModal?.();
  };

  const trigger = renderTrigger({ openModal, closeModal });
  const modalHeader = renderModalHeader?.({ openModal, closeModal });
  const modalBody = renderModalBody?.({ openModal, closeModal });
  const modalFooter = renderModalFooter?.({ openModal, closeModal });

  return (
    <>
      {trigger}
      <Modal
        className={modalClassName}
        dismissible={modalDismissible}
        show={modalShown}
        onClose={closeModal}
      >
        {modalHeader ? (
          <ModalHeader className="border-neutral-200">
            {modalHeader}
          </ModalHeader>
        ) : null}
        {modalBody ? (
          <ModalBody>
            {modalBody}
          </ModalBody>
        ) : null}
        {modalFooter ? (
          <ModalFooter>
            {modalFooter}
          </ModalFooter>
        ) : null}
      </Modal>
    </>
  );
};

export default BaseModalTrigger;
