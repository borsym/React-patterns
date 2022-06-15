import React, { useState } from 'react';
import { ControlledModal } from './modal/ControlledModal';

export const ForAppControlledModel = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Controlled Modal</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
  );
};
