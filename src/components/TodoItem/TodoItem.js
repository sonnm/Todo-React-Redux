import React from 'react';
import { PropTypes } from 'prop-types';

function TodoItem({ item, toogleItem, removeItem }) {
  return (
    <div className="mb-2 p-3 border border-gray-300 text-gray-600 flex items-center justify-between">
      <button onClick={() => toogleItem(item.id)} type="button" className="flex items-center focus:outline-none">
        <i className={`rounded-full inline-block w-6 h-6 mr-3 ${item.completed ? 'bg-green-600' : 'bg-gray-400'}`} />
        <span>{item.text}</span>
      </button>
      <button onClick={() => removeItem(item.id)} type="button" className="text-sm text-red-700 focus:outline-none">Remove</button>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  toogleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default TodoItem;
