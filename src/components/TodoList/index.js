import { connect } from 'react-redux';
import TodoList from './TodoList';
import { changeFilter } from '../../actions';

const mapStateToProps = (state) => ({
  filter: state.filter,
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
