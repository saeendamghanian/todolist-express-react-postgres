import React from "react";
import axios from "axios";

class AddTask extends React.Component {
  state = {
    userInput: null
  };

  addTaskToDB = task => {
    if (task !== null) {
      axios
        .post("http://localhost:4500/tasks", {
          text: task.toString()
        })
        .then(res => {
          document.querySelector("#process-result").innerHTML = "Task added!";
        })
        .catch(err => {
          document.querySelector("#process-result").innerHTML = err;
        });
    } else {
      document.querySelector("#process-result").innerHTML =
        "The field is empty!";
    }
  };

  addButtonClick = () => {
    this.addTaskToDB(this.state.userInput);
    document.querySelector("#user-input").value = "";
  };

  render() {
    return (
      <div classtext="add-new-task">
        <input
          type="text"
          id="user-input"
          onChange={event => this.setState({ userInput: event.target.value })}
        />
        <button onClick={this.addButtonClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
