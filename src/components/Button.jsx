import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({ onClick, children, className, outline }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
