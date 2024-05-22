import React from 'react';
import PropTypes from 'prop-types';

export const PaymentResModal = ({
  isOpen,
  onClose,
  title,
  children,
  classNames = {}
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex ${classNames.overlay}`}>
      <div className={`relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg ${classNames.modal}`}>
        <span className={`absolute top-0 right-0 p-4 cursor-pointer ${classNames.closeButton}`} onClick={onClose}>
          &times;
        </span>
        <h2 className={`text-2xl font-semibold mb-4 ${classNames.title}`}>{title}</h2>
        <div className={classNames.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

PaymentResModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.shape({
    overlay: PropTypes.string,
    modal: PropTypes.string,
    closeButton: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};
