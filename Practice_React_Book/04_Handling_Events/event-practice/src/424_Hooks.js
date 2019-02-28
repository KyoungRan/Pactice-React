import React, { useState } from 'react';

function PracticeHooks() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    alert(username + ": " + message);
    setUsername('');
    setMessage('');
  }
  
  return (
    <div>
      <h1>Hooks 이벤트 연습</h1>
      <input 
        type="text"
        name="username"
        placeholder="유저명"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default PracticeHooks;