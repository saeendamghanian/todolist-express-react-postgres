import React from "react";
import axios from "axios";

const EditTask = props => {
  const editTask = id => {
    let taskToUpdate = document.querySelector("#edited-input-value").value;
    console.log(taskToUpdate + id);

    // if (taskToUpdate !== null) {
    // let dateToUpdate = Date.now();
    // console.log(dateToUpdate);
    axios
      .put(`http://localhost:4500/task/${id}`, {
        text: taskToUpdate.toString(),
        created_date: new Date(Date.now()).toISOString()
      })
      .then(res => {
        document.querySelector("#process-result").innerHTML = "Task updated!";
      })
      .catch(err => {
        document.querySelector("#process-result").innerHTML = err;
      });
    document.querySelector("#container-edit-dialog").style.display = "none";
    document.querySelector("#edit-dialog").style.display = "none";
    document.querySelector("#edited-input-value").value = "";
    // }
  };

  const closeEditDialog = () => {
    document.querySelector("#container-edit-dialog").style.display = "none";
    document.querySelector("#edit-dialog").style.display = "none";
  };

  return (
    <div id="container-edit-dialog">
      <div id="edit-dialog">
        {/* eslint-disable-next-line */}
        {/* <a href="#close-target" classtext="close-target"></a> */}
        <h3>Edit</h3>
        <input id="edited-input-value" type="text" autofocus="true" />
        <div>
          {/* <a href="#done-target"> */}
          <button onClick={() => editTask(props.editedTaskId)}>Done</button>
          {/* </a> */}
          {/* <a href="#close-target"> */}
          <button onClick={closeEditDialog}>Cancel</button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default EditTask;
