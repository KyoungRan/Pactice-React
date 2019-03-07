import * as types from '../actions/ActionTypes';

const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch(action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),   // 선택한 인덱스의 전 아이템들 
          {
            ...counters[action.index],  // 기존 객체에
            number: counters[action.index].number + 1 // 새 number 값 덮어쓰기
          },
          ...counters.slice(action.index + 1, counters.length)  // 선택한 인덱스의 다음 아이템들
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;
// import number from './number';
// import color from './color';

// import { combineReducers } from 'redux';

// /*
//   서브 리듀서들을 하나로 합친다.
//   combineReducers를 실행하고 나면, 나중에 store 형태를
//   파라미터로 전달한 객체 모양대로 만듭니다.
//   지금은 다은과 같이 만듭니다.
//   {
//     numberData: {
//       number: 0
//     },
//     colorDate: {
//       color: 'black'
//     }
//   }
// */
// const reducers = combineReducers({
//   numberData: number,
//   colorData: color
// });

// export default reducers;
// import * as types from '../actions/ActionTypes';

// // 초기 상태를 정의한다.
// const initialState = {
//   color: 'black',
//   number: 0
// };

// /*
//   리듀서 함수 정의. 리듀서는 state의 action을 파라미터로 받는다.
//   state가 undefined일 때 (스토어가 생성될 때) state 기본 값을 initialState로 사용한다.
//   action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
//   이 때 주의할 점은 state를 직접 수정하면 안 되고,
//   기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
// */

// function counter(state = initialState, action) {
//   switch(action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       };
//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number -1
//       };
//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color
//       };
//     default:
//       return state;
//   };
// };

// export default counter;