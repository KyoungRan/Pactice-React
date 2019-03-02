## 리액트를 다루는 기술

### 3장 컴포넌트
  - 더 많은 propTypes 종류
    - array: 배열
    - bool: 참, 거짓
    - func: 함수
    - number: 숫자 
    - object: 객체 
    - string: 문자열 
    - symbol: ES6 문법의 심벌 개체 
    - node: 렌더링할 수 있는 모든 것(숫자, 문자열, element 또는 이들로 구성된 배열) 
    - element: 리액트 요소 
    - instanceOf(MyClass):특정 클래스의 인스턴스
    - oneOf(['Male', 'Female']): 주어진 배열 요소 중 값 하나
    - oneOfType([React.PropTypes.string, React.PropTypes.number]): 주어진 배열 안의 종류 중 하나
    - arrayOf([React.PropTypes.number]): 주어진 종류로 구성된 배열
    - objectOf(Reat.PropTypes.number): 주어진 종류의 값을 가진 객체
    - shape({name: React.PropTypes.string, age: React.PropTypes.number}): 주어진 스키마를 가진 객체
    - any: 아무 종류
<br />

### 4장 이벤트 핸들링
> [React SyntheticEvent](https://reactjs.org/docs/events.html)

  - 이벤트 종류
    - Clipboard
    - Form
    - Composition
    - Mouse
    - Keyboard
    - Selection
    - Focus
    - Touch
    - UI
    - Image
    - Wheel
    - Animation
    - Media
    - Transition
<br />

### 7장 컴포넌트의 라이프사이클 메서드
  - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  - getDeriveStateFromProps: props에 있는 값을 state에 동기화하는 메서드
  - render: 우리가 준비한 UI를 렌더링하는 메서드
  - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
  - getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출하며, props가 바뀌어서 업데이트할 때도 호출
  - shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드. 여기에서 false를 반환하면 아래 메서드들을 호출하지 않음.
  - render: 컴포넌트를 리렌더링
  - getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
  <br />


