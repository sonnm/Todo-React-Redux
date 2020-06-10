export const ADD_ITEM = 'ADD_ITEM';
export const TOOGLE_ITEM = 'TOOGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function addItem(text) {
  return { text, type: ADD_ITEM };
}

export function toogleItem(id) {
  return { id, type: TOOGLE_ITEM };
}

export function removeItem(id) {
  return { id, type: REMOVE_ITEM };
}

export function changeFilter(value) {
  return { value, type: CHANGE_FILTER };
}
