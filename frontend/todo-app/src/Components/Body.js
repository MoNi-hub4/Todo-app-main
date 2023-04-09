import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ButtonDelete,
  Checked,
  CheckedImg,
  CreateTodo,
  FilterSection,
  InputBox,
  SecondSection,
  SectionContent,
  Todo,
  TodoDiv,
  TodoBox,
  TodoDetailBox,
  UpdateTask,
} from "../styledComponents/BodyStyle";

import CheckedIcon from "../images/icon-check.svg";
import CrossIcon from "../images/icon-cross.svg";

const Body = () => {
  const [Task, setTask] = useState(null);
  const [createTodo, setCreateTodo] = useState({
    task: "",
    isCompleted: 0,
  });



  

  useEffect(() => {
    fetchTasks();
  }, []);

  
  

  // Fetch Data
  const fetchTasks = async () => {
    //Fetch the Todos
    const res = await axios.get("http://localhost:3000/todo");
    //Set to state
    setTask(() => res.data.todos.map((task) => {
      return{
        ...task,
        isClicked:false,
      }
    }));

    // console.log(Task);
  };

  // Update Create todo field
  const updateCreateTodoField = (e) => {
    const { name, value } = e.target;
    setCreateTodo({
      ...createTodo,
      [name]: value,
    });
    // console.log({name, value});
  };

  // Create Todo
  const CreateTask = async () => {
    //Create the Todo
    const res = await axios.post("http://localhost:3000/todo", createTodo);

    console.log(res);
    // Set State
    setTask([...Task, res.data.todo]);
    setCreateTodo({ task: "", isCompleted: 0 });
  };

  // Delete Todo
  const DeleteTask = async (_id) => {
    // Delete Task
    await axios.delete(`http://localhost:3000/todo/${_id}`);

    //Update the state
    const NewTasks = [...Task].filter((task) => {
      return task._id !== _id;
    });

    setTask(NewTasks);
  };

  // Update isClicked ==>> find the id on the Task state and update it through the clicked data
  const todoClicked = (task) => {
    task.isClicked = true;
    console.log(task);
    const newTask = [...Task]
    const FindIndex = Task.findIndex(x => x._id === task._id)
    newTask[FindIndex] = task;
    setTask(newTask)
  }

  return (
    <SecondSection>
      <SectionContent>
        <CreateTodo>
          <InputBox
            onBlur={CreateTask}
            onChange={updateCreateTodoField}
            value={createTodo.task}
            placeholder="Create a new todo..."
            type="text"
            name="task"
          ></InputBox>
        </CreateTodo>
        <TodoBox>
          {Task &&
            Task.map((task) => {
              return (
                <Todo key={task._id} onDoubleClick={() => todoClicked(task)} >
                  <TodoDiv>
                    <Checked isClicked={task.isCompleted}>
                      {task.isCompleted && (
                        <CheckedImg src={CheckedIcon}></CheckedImg>
                      )}
                    </Checked>
                    {task.task}
                    {task.isClicked && <UpdateTask value={task.task} onBlur={fetchTasks} autoFocus></UpdateTask>}
                  </TodoDiv>
                  
                  <ButtonDelete
                    src={CrossIcon}
                    onClick={() => DeleteTask(task._id)}
                  ></ButtonDelete>
                </Todo>
              );
            })}

          <TodoDetailBox>
            {Task && <div>{Task.length} items left</div>}
            <div>Clear Completed</div>
          </TodoDetailBox>
        </TodoBox>
        <FilterSection>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </FilterSection>
      </SectionContent>
    </SecondSection>
  );
};

export default Body;
