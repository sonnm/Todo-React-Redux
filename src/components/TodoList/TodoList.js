import React from 'react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import TodoItem from '../TodoItem/index';

function TodoList({ items, filter, changeFilter }) {
  let filteredItems = items;
  if (filter === 'todo') filteredItems = _.filter(items, (item) => (item.completed === false));
  else if (filter === 'completed') filteredItems = _.filter(items, (item) => (item.completed === true));
  return (
    <>
      <div className="mb-3">
        <select value={filter} onChange={(e) => changeFilter(e.target.value)} className="py-2 px-3 border border-gray-400 mr-3 focus:outline-none">
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="completed">Completed</option>
        </select>
        <span className="text-gray-600">
          {filteredItems.length}
          {' '}
          item(s)
        </span>
      </div>
      <div className="mb-3">
        {filteredItems.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default TodoList;
