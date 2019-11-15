import React from "react";
import axios from "axios";

const Item = props => {
  const { id, text, created_date, status } = props.task;

  const deleteTask = id => {
    axios
      .delete(`http://localhost:4500/task/${id}`)
      .then(res => {
        document.querySelector("#process-result").innerHTML = "Task deleted!";
      })
      .catch(err => {
        document.querySelector("#process-result").innerHTML = err;
      });
  };

  const toggleComplete = id => {
    let statusToUpdate = props.todos.find(task => task.id === id);

    statusToUpdate.status =
      statusToUpdate.status === "pending" ? "completed" : "pending";
    axios
      .put(`http://localhost:4500/task/status/${id}`, {
        status: statusToUpdate.status.toString()
      })
      .then(res => {
        document.querySelector(
          "#process-result"
        ).innerHTML = `Task ${statusToUpdate.status}!`;
      })
      .catch(err => {
        document.querySelector("#process-result").innerHTML = err;
      });
  };

  return (
    <li>
      <input type="checkbox" onChange={() => toggleComplete(id)} />
      {text} - {created_date} - {status}
      {/* <a href="#container-edit-dialog"> */}
      <button onClick={() => props.getEditedTaskId(id)}>Edit</button>
      {/* </a> */}
      <button onClick={() => deleteTask(id)}>delete</button>
    </li>
  );
};

export default Item;
