import BaseButton from '@/components/_base/BaseButton';
import BaseModalTrigger, { BaseModalTriggerProps } from '@/components/_base/BaseModalTrigger';
import { FC, useCallback } from 'react';

export type PrivacyPolicyModalTriggerProps = {
  renderTrigger?: BaseModalTriggerProps['renderTrigger'];
  onOpenModal?: BaseModalTriggerProps['onOpenModal'];
  onCloseModal?: BaseModalTriggerProps['onCloseModal'];
};

const PrivacyPolicyModalTrigger: FC<PrivacyPolicyModalTriggerProps> = (props) => {
  const { renderTrigger, ...otherProps } = props;

  const renderHeader: NonNullable<BaseModalTriggerProps['renderModalHeader']> = useCallback(() => (
    <>Privacy Policy</>
  ), []);

  const renderBody: BaseModalTriggerProps['renderModalBody'] = useCallback(() => (
    <div className="space-y-6">
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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
      </p>
      <p>
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
  ), []);

  const renderFooter: NonNullable<BaseModalTriggerProps['renderModalFooter']> = useCallback(({ closeModal }) => (
    <BaseButton onClick={closeModal}>
      Close
    </BaseButton>
  ), []);

  const defaultRenderTrigger: BaseModalTriggerProps['renderTrigger'] = useCallback(({ openModal }) => (
    <a href="#" className="!text-red-700 hover:!text-red-500" onClick={openModal}>
      Privacy Policy
    </a>
  ), []);

  return (
    <BaseModalTrigger
      renderTrigger={renderTrigger ?? defaultRenderTrigger}
      renderModalHeader={renderHeader}
      renderModalBody={renderBody}
      renderModalFooter={renderFooter}
      modalDismissible
      {...otherProps}
    />
  );
};

export default PrivacyPolicyModalTrigger;
