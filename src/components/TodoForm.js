import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import { addItem } from '../actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    const { dispatch } = this.props;
    if (!_.isEmpty(input)) {
      dispatch(addItem(input));
      this.setState({ input: '' });
    }
    // this.props.addItem(input)
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)} className="flex justify-between justify-center">
          <input
            value={input}
            onChange={(e) => this.handleChange(e)}
            type="text"
            className="px-3 py-2 border border-gray-300 focus:outline-none flex-grow mr-3"
            placeholder="Todo..."
          />
          <button type="submit" className="px-3 py-2 text-white bg-indigo-600 font-bold hover:bg-indigo-800 focus:outline-none">Add Task</button>
        </form>
        <hr className="my-3" />
      </>
    );
  }
}

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (text) => dispatch(addItem(text)),
// });

// export default connect(null, mapDispatchToProps)(TodoForm);

export default connect()(TodoForm);
