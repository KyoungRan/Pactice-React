import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 설정
const SET_INPUT = 'input/SET_INPUT';

// 액션 생성 함수
export const setInput = createAction(SET_INPUT);

// 초기 상태 
const initialState = Map({
  value: ''
});

// 리듀서
export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState);;