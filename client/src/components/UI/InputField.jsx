import React from 'react';

import './InputField.css';

const InputField = ({ children, className='input-field', inputType, ...rest }) => (
  <input className={className} type={inputType} {...rest}>{children}</input>
);

export default InputField;