import BaseButton from '@/components/_base/BaseButton/BaseButton';
import BaseModal, { BaseModalProps } from '@/components/_base/BaseModal/BaseModal';
import { FC } from 'react';

export type TermsAndConditionsModalTriggerProps = {
  renderTrigger?: BaseModalProps['renderTrigger'];
  onOpenModal?: BaseModalProps['onOpenModal'];
  onCloseModal?: BaseModalProps['onCloseModal'];
};

const TermsAndConditionsModalTrigger: FC<TermsAndConditionsModalTriggerProps> = (props) => {
  const { renderTrigger, ...otherProps } = props;

  const title = 'Terms and Conditions';

  const defaultRenderTrigger: BaseModalProps['renderTrigger'] = ({ openModal }) => (
    <a href="#" className="!text-red-700 hover:!text-red-500" onClick={openModal}>
      {title}
    </a>
  );

  const renderFooterContent: NonNullable<BaseModalProps['renderFooterContent']> = ({ closeModal }) => (
    <BaseButton onClick={closeModal}>
      Close
    </BaseButton>
  );

  return (
    <BaseModal
      renderTrigger={renderTrigger ?? defaultRenderTrigger}
      headerContent={title}
      bodyContent={
        <div className="space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
        </div>
      }
      renderFooterContent={renderFooterContent}
      modalDismissible
      {...otherProps}
    />
  );
};

export default TermsAndConditionsModalTrigger;
