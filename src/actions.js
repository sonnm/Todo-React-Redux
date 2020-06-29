export const ADD_ITEM = 'ADD_ITEM';
export const TOOGLE_ITEM = 'TOOGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_FILTER = 'CHANGE_FILTER';

// const addItem = (text) => ({ payload: { text }, type: ADD_ITEM });

export function addItem(text) {
  return { payload: { text }, type: ADD_ITEM };
}

export function toogleItem(id) {
  return { payload: { id }, type: TOOGLE_ITEM };
}

export function removeItem(id) {
  return { payload: { id }, type: REMOVE_ITEM };
}

export function changeFilter(value) {
  return { payload: { value }, type: CHANGE_FILTER };
}

// export function asynAddItem(text) {
//   return function (dispatch) {
//     return new Promise(() => {
//       setTimeout(() => { dispatch(addItem(text)); }, 2000);
//     });
//   };
// }
