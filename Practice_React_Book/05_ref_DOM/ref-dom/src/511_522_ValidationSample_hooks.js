import React, { useState, useRef } from 'react';
import './511_522_ValidationSample.css';

function ValidationSampleHooks() {
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const inputEl = useRef(null);

  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === '0000');
    inputEl.current.focus();
  }

  return (
    <div>
      <input 
        ref={inputEl}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={clicked ? (validated ? 'success' : 'failure') : ''}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSampleHooks;
