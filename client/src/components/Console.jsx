import React, { useState } from 'react';

import ResultDisplay from './UI/ResultDisplay';
import Button from './UI/Button';
import InputField from './UI/InputField';
import { ReactComponent as Rocket } from '../assets/rocket.svg';

import './Console.css';

const Console = () => {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');

  const url = 'http://localhost:4000';
  const capsulesUrl = url + '/capsules';
  const landpadUrl = url + `/landpads/${text}`;

  const getCapsule = (e) => {
    e.preventDefault();
    fetch(capsulesUrl)
      .then(
        res => res.json()
      )
      .then(
        jsondata => setResult(JSON.stringify(jsondata))
      )
      .catch(err => console.log(err));
  }

  const getLandpad = (e) => {
    e.preventDefault();
    console.log(landpadUrl);
    fetch(landpadUrl)
    .then(
      res => res.json()
    )
    .then(
      jsondata => setResult(JSON.stringify(jsondata))
    )
    .catch(err => setResult('404 Not found'));
  }
  
  return (
    <div className="outer-warpper">
      <div className='display-warpper'>
        <ResultDisplay>{result}</ResultDisplay>
      </div>
      <div className='panel-warpper'>
        <div className='item-container' style={{width: '30%'}}>
          <Button onClick={getCapsule}>Capsules</Button>
        </div>
        <div className='item-container' style={{width: '20%'}}>
          <Rocket />
        </div>
        <div className='item-container' style={{width: '60%'}}>
          <form onSubmit={getLandpad}>
            <InputField
              placeholder="text"
              onChange={(e) => setText(e.target.value)}
              pattern='[A-Za-z0-9-_]{1,}'
              required
            />
            <Button buttonType="submit">Landing Pad</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Console;