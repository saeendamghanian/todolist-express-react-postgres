import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const ToDoList = props => {
  return (
    <ul>
      {props.todos
        .map(task => <Item key={task.id} task={task} {...props} />)
        .reverse()}
    </ul>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
  // toggleComplete: PropTypes.func.isRequired
};

export default ToDoList;
