import React, { useState } from 'react';

import ResultDisplay from './UI/ResultDisplay';
import Button from './UI/Button';
import InputField from './UI/InputField';
import { ReactComponent as Rocket } from '../assets/rocket.svg';

import './Console.css';

const Console = () => {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  
  return (
    <div className="outer-warpper">
      <div className='display-warpper'>
        <ResultDisplay>test 1234</ResultDisplay>
      </div>
      <div className='panel-warpper'>
        <div className='item-container' style={{width: '30%'}}>
          <Button>Capsules</Button>
        </div>
        <div className='item-container' style={{width: '20%'}}>
          <Rocket />
        </div>
        <div className='item-container' style={{width: '60%'}}>
            <InputField
              placeholder="text"
              onChange={(e) => setText(e.target.value)}
              pattern='\w'
            />
            <Button>Landing Pad</Button>
        </div>
      </div>
    </div>
  );
};

export default Console;