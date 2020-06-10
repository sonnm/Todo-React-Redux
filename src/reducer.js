import _ from 'lodash';
import {
  ADD_ITEM, TOOGLE_ITEM, REMOVE_ITEM, CHANGE_FILTER,
} from './actions';

function reducer(state = {
  filter: 'all',
  items: [{
    id: 1591749680567,
    text: '234',
    completed: true,
  },
  {
    id: 1591749680565,
    text: '234 4',
    completed: false,
  }],
}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return _.assign({}, state, { // ???
        items: _.concat(state.items, {
          id: Date.now(),
          text: action.text,
          completed: false,
        }),
      });
    case TOOGLE_ITEM:
      return _.assign({}, state, {
        items: _.map(state.items, (item) => ((item.id === action.id)
          ? _.assign({}, item, { completed: !item.completed })
          : item
        )),
      });
    case REMOVE_ITEM:
      return _.assign({}, state, {
        // items: _.remove(state.items, (item) => (item.id === action.id)),
        items: _.filter(state.items, (item) => (item.id !== action.id)),
      });
    case CHANGE_FILTER:
      return _.assign({}, state, { filter: action.value });
    default:
      return state;
  }
}

export default reducer;
