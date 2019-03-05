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

### 10장 일정 관리 웹 애플리케이션 생성
  - propagation
    - 지식 요소에도 onClick 이벤트가 설정되어 있고, 부모 요소에도 onClick 이벤트가 설정되어 있으면 자식 -> 부모 순으로 메서드를 실행하게 된다. 이를 **propagation**이라고 한다. 이를 방지하려면 자식 요소의 onClick 처리 함수 내부에서 **e.stopPropagation** 함수를 호출해준다.
<br />

### 11장 컴포넌트 리렌더링 최적화
  1. 문제점 찾기
    - 리액트 개발자 도구의 Hightlight Updates 옵션을 활성화. 이 옵션을 활성화 하면 리렌더링 될 때마다 화면에 표시 된다. 리렌더링 빈도에 따라 하늘색->초록색->노란색->빨간색 순으로 나타난다.
    - 크롬 개발자도구 [Performance] 탭 사용
      - http://localhost:3000/?react_perf 페이지를 열고 크롬 개발자 도구 클릭하여 Performance탭을 연다. 
      - 왼쪽 위 **녹화** 버튼(원모양)을 누른 후 문제가 되는 부분을 실행한다.(ex.input 부분에 글을 적는다.) 그런 다음 녹화 중지한다. 
      - User Timing을 연다. (문제점 파악)
    - 프로젝트를 작업하면서 버벅거린다고 느낄 때 성능 조사하고 상황에 따라 shouldComponentUpdate를 구현. 
  2. 최적화 진행
    - 업데이트 될 때만 리렌더링을 하기 위해 조건을 설정
    - **shouldComponentUpdate** 설정 예시
    ```javascript
      shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
      }
    ```
  3. 정리
    - **shouldComponentUpdate**를 구현 상황(불필요한 렌더링을 방지하여 리렌더링 성능 향상)
      - 컴포넌트 배열이 렌더링되는 리스트 컴포넌트일 때
      - 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일 때
      - 하위 컴포넌트 개수가 많으며, 리렌더링되지 말아야 할 상황에서도 리렌더링이 진행될 때
    - 리스트를 렌더링할 때는 언제나 **shouldComponentUpdate**를 구현하는 것을 습관화.
<br />

### 12장 리덕스 개념 이해
1. Actions(액션)
  > Store에서 상태 변화를 일으킬 때 참조하는 객체. type 값 필수.
  - Action Creator(액션 생성 함수)
    - actions(액션)을 만들어주는 함수. 
      ```javascript
        // Actions: Action Creator를 정의하려면 우선  Actions type을 상수값으로 정의
          const INCREMENT = 'INCREMENT';  // 값을 더하는 액션
          const DECREMENT = 'DECREMENT';  // 값을 빼는 액션
        // Action Creator
          const increment = (diff) => ({
            type: INCREMENT,
            diff: diff
          });
          const decrement = (diff) => ({
            type: DECREMENT,
            diff: diff
          });
      ```
      ```
2. Reducers
  - 2개의 파라미터를 받는다. 첫 번째 파라미터는 현재 상태이고, 두번째 파라미터는 액션 객체.
  - 초기상태 initialState 값부터 먼저 설정.
  ```javascript
    // initialState 정의
      const initialState = {
        number: 0,
        foo: 'bar',
        bax: 'qux'
      };
    // Reducers 함수
    // Object.assign: 파리미터로 전달된 객체들을 순서대로 합쳐준다.
    function counter(state = initialState, action) {
      switch(action.type) {
        case INCREMENT:
          return Object.assign({}, state, {
            number: state.number + action.diff
          });
        case DECREMENT:
          return Object.assign({}, state, {
            number: state.number - action.diff
          });
        default:
          return state;
      }
    }
  ```
  - ES6 문법: 전개연산자(...) 사용
    ```javascript
      function counter(state = initialState, action) {
        switch(action.type) {
          case INCREMENT:
            return {
              ...state,
              number: state.number + action.diff
            };
          case DECREMENT:
            return {
              ...state,
              number: state.number - action.diff
            };
          default: 
            return state;
        }
      }
    ```
3. Store
  ```javascript
    import { createStore } from 'redux';

    const store = createStore(counter);
  ```
  - subscribe(구독)
    ```javascript
      const unsubscribe = store.subscribe(() => console.log(store.getState()));
    ```
  - dispatching Actions
    ```javascript
      store.dispatch(increment(1));
      store.dispatch(decrement(5));
      store.dispatch(increment(10));
    ```
4. 리덕스의 3가지 규칙
  - 스토어는 단 한개. 그 대싱 리듀서를 여러개 만들어서 사용.
  - state는 읽기 전용.
  - 변화는 순수 함수로 구성. 예를들어 리듀서 함수 내부에서 외부 네트워크와 데이터베이스에 직접 접근하면 안 된다.(요청이 실패할 수도 있고, 외부 서버의 반환 값이 변할 수 있기 때문, new Date(), Math.random() 함수등도 사용하면 안됨.)

