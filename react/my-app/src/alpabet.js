import { useState } from 'react';

const Alphabet = () => {
  // 배열(state)에 고유 id 를 갖도로 설정
  const [alphabets, setAlphabets] = useState([
    { id: 1, alpha: 'k' },
    { id: 2, alpha: 'd' },
    { id: 3, alpha: 't' },
    { id: 4, alpha: '3' },
    { id: 5, alpha: 'r' },
    { id: 6, alpha: 'd' },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: alphabets.length + 1,
      alpha: inputAlpha,
    });
    setAlphabets(newAlpha);
  };

  return (
    <div>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      />
      <button onClick={addAlpha}>ADD</button>

      <ul>
        {alphabets.map((a) => {
          // a =>  { id: n, alpha: xxx }
          return <li key={a.id}>{a.alpha}</li>;
        })}
      </ul>
    </div>
  );
};

export default Alphabet;











강의에 메시지 보내기








