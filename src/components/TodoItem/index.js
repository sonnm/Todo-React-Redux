import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { toogleItem, removeItem } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  toogleItem: (id) => dispatch(toogleItem(id)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
