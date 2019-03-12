
# 리액트를 다루는 기술

## 3장 컴포넌트

* 더 많은 propTypes 종류
  * array: 배열
  * bool: 참, 거짓
  * func: 함수
  * number: 숫자
  * object: 객체
  * string: 문자열
  * symbol: ES6 문법의 심벌 개체
  * node: 렌더링할 수 있는 모든 것(숫자, 문자열, element 또는 이들로 구성된 배열)
  * element: 리액트 요소
  * instanceOf(MyClass):특정 클래스의 인스턴스
  * oneOf(['Male', 'Female']): 주어진 배열 요소 중 값 하나
  * oneOfType([React.PropTypes.string, React.PropTypes.number]): 주어진 배열 안의 종류 중 하나
  * arrayOf([React.PropTypes.number]): 주어진 종류로 구성된 배열
  * objectOf(Reat.PropTypes.number): 주어진 종류의 값을 가진 객체
  * shape({name: React.PropTypes.string, age: React.PropTypes.number}): 주어진 스키마를 가진 객체
  * any: 아무 종류  

## 4장 이벤트 핸들링

> [React SyntheticEvent](https://reactjs.org/docs/events.html)

* 이벤트 종류
  * Clipboard
  * Form
  * Composition
  * Mouse
  * Keyboard
  * Selection
  * Focus
  * Touch
  * UI
  * Image
  * Wheel
  * Animation
  * Media
  * Transition  

## 7장 컴포넌트의 라이프사이클 메서드

* constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
* getDeriveStateFromProps: props에 있는 값을 state에 동기화하는 메서드
* render: 우리가 준비한 UI를 렌더링하는 메서드
* componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
* getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출하며, props가 바뀌어서 업데이트할 때도 호출
* shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드. 여기에서 false를 반환하면 아래 메서드들을 호출하지 않음.
* render: 컴포넌트를 리렌더링
* getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
* componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드  

## 10장 일정 관리 웹 애플리케이션 생성

* propagation
  * 지식 요소에도 onClick 이벤트가 설정되어 있고, 부모 요소에도 onClick 이벤트가 설정되어 있으면 자식 -> 부모 순으로 메서드를 실행하게 된다. 이를 **propagation**이라고 한다. 이를 방지하려면 자식 요소의 onClick 처리 함수 내부에서 **e.stopPropagation** 함수를 호출해준다.  

## 11장 컴포넌트 리렌더링 최적화

### 1. 문제점 찾기

* 리액트 개발자 도구의 Hightlight Updates 옵션을 활성화. 이 옵션을 활성화 하면 리렌더링 될 때마다 화면에 표시 된다. 리렌더링 빈도에 따라 하늘색->초록색->노란색->빨간색 순으로 나타난다.
* 크롬 개발자도구 [Performance] 탭 사용
  * http://localhost:3000/?react_perf 페이지를 열고 크롬 개발자 도구 클릭하여 Performance탭을 연다. 
  * 왼쪽 위 **녹화** 버튼(원모양)을 누른 후 문제가 되는 부분을 실행한다.(ex.input 부분에 글을 적는다.) 그런 다음 녹화 중지한다. 
  * User Timing을 연다. (문제점 파악)
  * 프로젝트를 작업하면서 버벅거린다고 느낄 때 성능 조사하고 상황에 따라 shouldComponentUpdate를 구현.

### 2. 최적화 진행

* 업데이트 될 때만 리렌더링을 하기 위해 조건을 설정
* **shouldComponentUpdate** 설정 예시

```javascript
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
```  

### 3. 정리

* **shouldComponentUpdate**를 구현 상황(불필요한 렌더링을 방지하여 리렌더링 성능 향상)
  * 컴포넌트 배열이 렌더링되는 리스트 컴포넌트일 때
  * 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일 때
  * 하위 컴포넌트 개수가 많으며, 리렌더링되지 말아야 할 상황에서도 리렌더링이 진행될 때
* 리스트를 렌더링할 때는 언제나 **shouldComponentUpdate**를 구현하는 것을 습관화.  

## 12장 리덕스 개념 이해

### 1. Actions(액션)

  > Store에서 상태 변화를 일으킬 때 참조하는 객체. type 값 필수.

* Action Creator(액션 생성 함수)
  * actions(액션)을 만들어주는 함수.

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

### 2. Reducers

* 2개의 파라미터를 받는다. 첫 번째 파라미터는 현재 상태이고, 두번째 파라미터는 액션 객체.
* 초기상태 initialState 값부터 먼저 설정.

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

* ES6 문법: 전개연산자(...) 사용

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

### 3. Store

```javascript
  import { createStore } from 'redux';

  const store = createStore(counter);
```

* subscribe(구독)

  ```javascript
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
  ```

* dispatching Actions

  ```javascript
    store.dispatch(increment(1));
    store.dispatch(decrement(5));
    store.dispatch(increment(10));
  ```

### 4. 리덕스의 3가지 규칙

* 스토어는 단 한개. 그 대싱 리듀서를 여러개 만들어서 사용.
* state는 읽기 전용.
* 변화는 순수 함수로 구성. 예를들어 리듀서 함수 내부에서 외부 네트워크와 데이터베이스에 직접 접근하면 안 된다.(요청이 실패할 수도 있고, 외부 서버의 반환 값이 변할 수 있기 때문, new Date(), Math.random() 함수등도 사용하면 안됨.)  

## 14장 리덕스, 더 편하게 사용

### 1. [Immutable.js](https://facebook.github.io/immutable-js/)

* Map
  > Immutable의 Map은 객체 대신 사용하는 데이터 구조.

  ```javascript
    const { Map, fromJS } = Immutable;
    const data = fromJS({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    });
  ```

  * 자바 스크립트 객체로 변환(**toJS**)

    ```javascript
      const deserialized = data.toJS();
      console.lo(deserialized); // { a: 1, b: 2, c: { d: 3, e: 4 }}
    ```

  * 특정 키의 값 불러오기(**get**)

    ```javascript
      data.get('a');  // 1
    ```

  * 깊숙이 위치하는 값 불러오기(**getIn**)

    ```javascript
      data.getIn(['c', 'd']);  // 3
    ```

  * 값 설정 (**set**)

    ```javascript
      const newData = data.set(['a', 4]);
    ```

      > set을 한다고 해서 데이터가 실제로 변하는 것은 아니다. 값이 변경된 새 Map을 만드는 것이다.

    ```javascript
      console.log(newData === data);  // false
    ```

      > 서로 다른 Map이기 때문에 false를 반환한다. 기존 data값은 그대로 남아있고, 변화가 적용된 데이터를 newData에 저장하는 것이다.

  * 깊숙이 위치하는 값 수정(**setIn**)

    ```javascript
      const newData = data.setIn(['c', 'd'], 10);
    ```

  * 여러 값 동시에 설정(**mergeIn**)

    ```javascript
      const newData = data.mergeIn(['c'], { d: 10, e: 10 });
    ```

    * 아래와 같이 입력할 수도 있다.

    ```javascript
      const newData = data.setIn(['c', 'd'], 10)
                          .setIn(['c', 'e'], 10);
    ```

    * 최상의 merge(**merge**)

    ```javascript
      const newData = data.merge({ a: 10, b: 10 });
    ```

* List
    > Immutable 데이터 구조로 배열 대신 사용. 배열과 동일하게 map, filter, sort, push, pop 함수를 내장하고 있다.

  ```javascript
    const { List, Map, fromJS } = Immutable;
    const list = List([
      Map({ value: 1 }),
      Map({ value: 2 })
    ]);
    // or
    const list2 = fromJS([
      { value: 1 },
      { value: 2 }
    ]);
  ```

   fromJS를 사용하면 내부 배열은 List로 만들고, 내부 객체는 Map으로 만든다. **toJs**를 사용하여 일반 배열로 변환.

  * 값 읽어오기(**get, getIn**)

    ```javascript
      // n번째 원소 값은 get(n) 사용
      list.get(0);
      // 0번째 아이템의 value값
      list.getIn([0, 'value']);
    ```

  * 아이템 수정(**set, setIn, update**)

    ```javascript
    // 원소를 통째로 바꾸고 싶을 때 set 사용.
    const newList = list.set(0, Map({value: 10}));
    // List의 Map 내부 값 변경하고 싶을 때 setIn 사용
    const newList = list.setin([0, 'value'], 10);
    /*
      다른 방법 (update)
      첫번째 파라미터: 선택할 인덱스 값, 두번째 파라미터: 선택한 원소를 업데이트 하는 함수
      const newList = list.setIn([9, 'value'], list.getIn([0, 'value'] * 5)); 와 같음 
    */
    const newlist = list.update(0, item => item.set('value', item.get('value') * 5));
    ```

  * 아이템 추가(**push, unshift**)

    ```javascript
      const newList = list.push(Map({value: 3}));
      // List 맨 뒤가 아니라 맨 앞에 데이터를 추가하고 싶으면 push 대신 unshift를 사용
      const newList = list.unshift(Map({value: 0}));
    ```

  * 아이템 제거(**delete, pop**)

    ```javascript
      const newList = list.delete(1); // 인덱스가 1인 아이템 제거.
      // 마지막 아이템을 제거하고 싶다면 pop을 사용.
      const newList = list.pop();
    ```

  * List 크기 가져오기 (**size, isEmpty**)

    ```javascript
      console.log(list.size);
      // 비어 있는 지 확인
      list.isEmpty();
    ```

### 2. Ducks 파일 구조

> (Ducks: Redux Reducer Bundles)[https://github.com/erikras/ducks-modular-redux]

* Ducks 구조에서는 액션 타입, 액션 생성 함수, 리듀서를 한꺼번에 넣어서 관리하는데, 이를 모듈이라 한다.
* Ducks 구조로 만드는 리덕스 모듈 생성 흐름
  * 액션 타입 정의 -> 액션 생성 함수 만들기 -> 초기 상태 정의 -> 리듀서 정의

    ```javascript
      // 액션 타입
      const CREATE = 'my-app/todos/CREATE';
      const REMOVE = 'my-app/todos/REMOVE';
      const TOGGLE = 'my-app/todos/TOGGLE';

      // 액션 생성 함수
      export const create = (todo) => ({
        type: CREATE,
        todo
      });

      export const remove = (id) => ({
        type: REMOVE,
        id
      });

      export const toggle = (id) => ({
        type: TOGGLE,
        id
      });

      const initialState = {
        // 초기 상태...
      }

      // 리듀서
      export default function reducer(state = initialState, action) {
        switch (action.type) {
          // 리듀서 관련 코드...
        }
      }
    ```

    * 규칙
      * export default를 이용하여 리듀서를 내보낸다.
      * export를 이용하여 액션 생성 함수를 내보낸다.
      * 액션 타입 이름은 npm-module-or-app/reducer/ACTION_TYPE 형식으로 만든다. [라이브러리를 만들거나 애플리케이션을 여러 프로젝트로 나눈 것이 아니라면 맨 앞은 생략해도 된다.(예: counter/INCREMENT)].
      * 외부 리듀서에서 모듈의 액션 타입이 필요할 때는 액션 타입을 내보낸다.

### 3. redux-actions를 이용한 더 쉬운 액션 관리

* Install
  `$ yarn add redux-actions`

  ```javascript
    import { createAction, handleActions } from 'redux-actions';
  ```

* **createAction**을 이용한 액션 생성 자동화

  ```javascript
    // 이전
    export const increment = (index) => ({
      type: type.INCREMENT,
      index
    });
    // createAction 사용
    export const increment = createAction(type.INCREMENT);
    // 위와 같이 만든 함수에 파라미터를 넣어서 호출하면 아래와 깉다.
    increment(3);
    /* 결과:
    {
      type: 'INCREMENT',
      payload: 3
    }
    */
  ```

* 전달받은 파라미터가 여러 개일 때: 액션을 만들면 파라미터로 전달한 객체를 payload로 설정.

  ```javascript
    export const setColor = createAction(types.SET_COLOR);
    setColor({index: 5, color: '#fff'});
    /* 결과:
      {
        type: 'SET_COLOR',
        payload: {
          index: 5,
          color: '#fff'
        }
      }
    */
  ```

* createAction의 두번째 파라니터에 payload 생성함수를 전달하여 코드상으로 명시할 수 있다.

  ```javascript
    export const setColor = createAction(types.SET_COLOR, ,({index, color}) => ({index, color}));
  ```

* switch 문 대신 **handleActions** 사용
  * 첫 번째 파라미터로 액션에 따라 실핼할 함수들을 가진 객체를 넣어주고, 두 번째 파라미터로 상태의 기본 값(initialState)을 넣어준다.

  ```javascript
    const reducer = handleActions({
      INCREMENT: (state, action) => ({
        counter: state.counter + action.payload
      }),
      DECREMENT: (state, action) => ({
        counter: state.counter - action.payload
      })
    }, {counter: 0});
  ```  

## 15장 Redux middleware(리덕스 미들웨어)와 외부 데이터 연동

> middleware: dispatch했을 때 reducer에서 이를 처리하기 전에 사전에 지정된 작업들을 실행. 액션과 리듀서 사이의 중간자라고 할 수 있다.

### 비동기 작업을 처리하는 미들웨어

#### 1. redux-thunk

* 객체가 아닌 함수도 디스패치 가능. 함수를 디스패치할 수 있게 함으로써 일반 액션 객체로는 할 수 없는 작업이 가능하다.

* 1초 뒤에 액션이 디스패치 되는 예제 코드

  ```javascript
    const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

    function increment() {
      return {
        type: INCREMENT_COUNTER
      };
    }

    funcion incrementAsync() {
      return dispatch => {	// dispatch를 파라미터로 가지는 함수를 리턴
        setTimeout(() => {
          // 1초 뒤 dispatc턴
          dispatch(increment());
        }, 1000);
      }
    }
  ```

  나중에 store.dispatch(incrementAsync())를 했을 때 INCREMENT_COUNTER 액션을 1초 뒤에 디스패치 한다.  

* 조건에 따라 액션을 디스패치하거나 무시하는 코드

  ```javascript
    function incrementIfOdd() {
      return (dispatch, getState) => {
        const { counter } = getState();

        if(counter % 2 === 0) {
          return;
        }

        dispatch(increment());
      };
    }
  ```

#### 2. 웹 요청 처리

* Promise

  ```javascript
    function printLater(number) {
      return new Promise( // 새 Promise를 만들어서 리턴한다.
        resolve => {
          setTimeout( // 1초 뒤 실행하도록 설정한다.
            () => {
              console.log(number);
              resolve(number + 1);  // 현재 숫자에 1을 더한값을 반환한다.
            }, 1000)
        })
    }

    printLater(1)
    .then(() => printLater(2))
    .then(() => printLater(3))
    .then(() => printLater(4))
  ```

  ```javascript
    function printLater(number) {
      return new Promise( // 새 Promise를 만들어서 리턴한다.
        (resolve, reject) => {  // resolve와 reject를 파라미터로 받는다.
          if(number > 4) {
            return reject('number is greater than 4');
          }	// reject는 오류를 발생시킨다.
          setTimeout( // 1초 뒤 실행하도록 설정한다.
            () => {
              console.log(number);
              resolve(number + 1);  // 현재 숫자에 1을 더한값을 반환한다.
          }, 1000)
        })
    }

    printLater(1)
    .then((num) => printLater(num))
    .then((num) => printLater(num))
    .then((num) => printLater(num))
    .then((num) => printLater(num))
    .catch(e => console.log(e));
  ```

## 16장 react-router로 SPA 개발

* 라우트로 사용된 컴포넌트가 전달받는 props
  * location: 현재 페이지의 주소 상태를 알려준다.
  * match: `<Route>` 컴포넌트에서 설정한 path와 관련된 데이터들을 조회할 때 사용한다.
  * history: 현재 라우터를 조작할 때 사용한다.
    * history.push: push는 페이지 방문 기록을 남기지 않아서 페이지 이동 후 뒤로가기 버튼을 눌렀을 때 방금 전의 페이지가 아니라 방 금 전의 전 페이지가 나타난다.
    * history.replace: `replace('/posts')` 형식으로 작성한다.
    * history.action: 현재 history 상태를 알려준다. 페이지를 처음 방문했을 때 POP이 나타나고, 링크를 통한 라이퉁 또는 push를 통한 라우팅을 했을 때는 PUSH가 나타나며, replace를 통한 라우팅을 했을 때는  REPLACE가 나타난다.
    * history.block: 페이지에서 벗어날 때, 사용자에게 정말 페이지를 떠나겠냐고 묻는 창을 띄운다.  

    ```javascript
      const unblock = history.block('정말로 떠나시겠습니까?');
      // 막는 작업을 취소할 때:
      unblock();
    ```

    * go, goBack, goForward는 이전 페이지 또는 다음 페이지로 이동하는 함수이다. ex) go(-1): 뒤로가기, go(1): 다음으로 가기
  * `withRouter`로 기타 컴포넌트에서 라우터 접근: withRouter를 사용하여 라우트 외부 props에 접근할 수 있다.  