/*
  action 객체를 만드는 액션 생성 함수들을 선언. (action creators)
  여기에서 () => ({})은 function() { return { } }와 동일한 의미.
*/

import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있다.
export const setColor = ({index, color}) => ({
  type: types.SET_COLOR,
  index,
  color
});