import React, { useState } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  // 일정 데이터 초기값
  const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({ id: index, text: `일정 ${index}`, done: false })
  )

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [countId, setCountId] = useState(500);

  const handleInsert = () => {
    // 일정 데이터 안에 들어가는 id 값
    setCountId(countId + 1);
    // 새 데이터 객체 만들기 
    const newTodo = {
      text: input,
      done: false,
      id: countId
    };
    // 배열 안에 새 데이터를 넣는다.
    setTodos([...todos, newTodo]);
    setInput('');
  }

  // to do 아이템 토글하기
  const handleToggle = (id) => {
    // id로 배열의 인덱스를 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    // 찾은 데이터의 done값을 반전시킨다.
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    // slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사한다.
    // 그리고 그 사이에는 변경된 to do 객체를 넣어준다.
    setTodos([
      ...todos.slice(0, index),
      toggled,
      ...todos.slice(index + 1, todos.length)
    ]);
  };

  // 선택한 id를 배열에서 제거합니다. 
  const handleRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    // slice로 전후 데이터들을 복사하고, 우리가 찾은 index는 제외시킨다.
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ]);
  }

  return (
    <PageTemplate>
      <TodoInput 
        onChange={(e) => setInput(e.target.value)} 
        onInsert={handleInsert} 
        value={input} />
      <TodoList 
        todos={todos} 
        onToggle={handleToggle}
        onRemove={handleRemove} />
    </PageTemplate>
  );
};

export default App;