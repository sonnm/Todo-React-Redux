import _ from 'lodash';
import {
  ADD_ITEM, TOOGLE_ITEM, REMOVE_ITEM, CHANGE_FILTER,
} from './actions';

function reducer(state = {
  filter: 'all',
  items: [{
    id: 1591749680567,
    text: 'Todo 1',
    completed: true,
  },
  {
    id: 1591749680565,
    text: 'Todo 2',
    completed: false,
  }],
}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), text: payload.text, completed: false }],
      };
    case TOOGLE_ITEM:
      return {
        ...state,
        items: _.map(state.items, (item) => {
          if (item.id === payload.id) return { ...item, completed: !item.completed };
          return item;
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: _.filter(state.items, (item) => (item.id !== payload.id)),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.value,
      };
    default:
      return state;
  }
}

export default reducer;
