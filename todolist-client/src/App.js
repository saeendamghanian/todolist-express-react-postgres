import React from "react";
import ToDoList from "./ToDoList";
import Search from "./Search";
import "./App.css";
import axios from "axios";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

class App extends React.Component {
  state = {
    todos: [],
    taskStatus: "",
    intervalIsSet: false,
    editedTaskId: ""
  };

  componentDidMount() {
    this.getDataFromDB();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDB, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDB = () => {
    axios
      .get("http://localhost:4500/tasks")
      .then(res => this.setState({ todos: res.data }));
  };

  getEditedTaskId = id => {
    this.setState({ editedTaskId: id });

    document.querySelector("#container-edit-dialog").style.display = "flex";
    document.querySelector("#edit-dialog").style.display = "flex";
  };

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <p id="process-result"></p>
        <Search />
        <AddTask />
        <ToDoList
          todos={this.state.todos}
          getEditedTaskId={this.getEditedTaskId}
        />
        <EditTask editedTaskId={this.state.editedTaskId} />
      </div>
    );
  }
}

export default App;
