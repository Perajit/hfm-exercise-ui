import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { FC, ReactElement, ReactNode, useState } from 'react';

export type BaseModalTriggerContext = {
  openModal: () => void;
  closeModal: () => void;
};

export type BaseModalTriggerProps = {
  renderTrigger: (context: BaseModalTriggerContext) => ReactElement;
  renderModalHeader: (context: BaseModalTriggerContext) => ReactNode;
  renderModalBody: (context: BaseModalTriggerContext) => ReactNode;
  renderModalFooter: (context: BaseModalTriggerContext) => ReactNode;
  modalClassName?: string;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
};

const BaseModalTrigger: FC<BaseModalTriggerProps> = (props) => {
  const { renderTrigger, renderModalHeader, renderModalBody, renderModalFooter, modalClassName, onOpenModal, onCloseModal } = props;
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
  const modalHeader = renderModalHeader({ openModal, closeModal });
  const modalBody = renderModalBody({ openModal, closeModal });
  const modalFooter = renderModalFooter({ openModal, closeModal });

  return (
    <>
      {trigger}
      <Modal show={modalShown} className={modalClassName} onClose={closeModal}>
        <ModalHeader>
          {modalHeader}
        </ModalHeader>
        <ModalBody>
          {modalBody}
        </ModalBody>
        <ModalFooter>
          {modalFooter}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default BaseModalTrigger;
