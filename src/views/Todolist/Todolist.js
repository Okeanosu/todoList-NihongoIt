import { useState, useEffect } from "react";
import {toast} from "react-toastify";
import "./Todolist.scss"
export default function Todo(props) {
    const [task, setTask] = useState([{"work":"test",
    "status":"in progress"}]);
    const [taskInput, setTaskInput] = useState("");
    const [test, setTest] = useState(0);
    useEffect(() => {
      //read data from local storage
      const data = localStorage.getItem("task");
      if (data) {
          setTask(JSON.parse(data));
      }
    }, []);
    const addTask = () => {
      const newTask = [...task];
      const newTaskInput = {};
      newTaskInput.work = taskInput;
      newTaskInput.status = "in progress";
      newTask.push(newTaskInput);
      setTask(newTask);
      setTaskInput("");
      localStorage.setItem("task", JSON.stringify(newTask));
      toast.success("Add task successfully");
    };
    const DeleteTask = (index) => {
      const newTask = [...task];
      newTask.splice(index, 1);
      setTask(newTask);
      localStorage.setItem("task", JSON.stringify(newTask));
      toast.error("Delete task successfully");
      };
      const FinishedTask = (index) => {
          const newTask = [...task];
          newTask[index].status = "finished";
          setTask(newTask);
          localStorage.setItem("task", JSON.stringify(newTask));
          toast.success("Finished task successfully");
      };
  return (
    <div className="container">
        <div id="myDIV" className="header">
    <h2>My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..."
    value={taskInput}
    onChange={(e)=>setTaskInput(e.target.value)}
    />
    <button className="addBtn"
    onClick={addTask}
    >ADD</button>
    </div>

    <ul id="myUL">
    {
        task.map((value,index)=>(
            <div className="d-flex ">
                <li className={value.status=="finished"?"col-11 checked":"col-11"}>{value.work}</li>
                <button className="btn btn-danger"
                onClick={DeleteTask}
                >delete</button>
                <button className="btn btn-primary"
                onClick={()=>FinishedTask(index)}
                >finished</button>
            </div>
        ))
    }
    </ul>
    </div>
  );
}