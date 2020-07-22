import React from 'react';

import './Button.css';

const Button = ({children, buttonType='button', className='consoleBtn', ...rest}) => (
  <button type={buttonType} className={className} {...rest}>{children}</button>
)

export default Button;