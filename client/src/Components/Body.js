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
  const [updateTodo, setUpdateTodo] = useState({
    _id: null,
    task: "",
    isCompleted: 0,
    isClicked: 0,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  Task && console.log(Task)

  // Fetch Data
  const fetchTasks = async () => {
    //Fetch the Todos
    const res = await axios.get("https://todo-app-main-sandy.vercel.app/todo");
    //Set to state
    setTask(() =>
      res.data.todos.map((task) => {
        return {
          ...task,
          isClicked: false,
        };
      })
    );

    
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
    const res = await axios.post("https://todo-app-main-sandy.vercel.app/todo", createTodo);

    
    // Set State
    setTask([...Task, res.data.todo]);
    setCreateTodo({ task: "", isCompleted: 0 });
  };

  // Delete Todo
  const DeleteTask = async (_id) => {
    // Delete Task
    await axios.delete(`https://todo-app-main-sandy.vercel.app/todo/${_id}`);

    //Update the state
    const NewTasks = [...Task].filter((task) => {
      return task._id !== _id;
    });

    setTask(NewTasks);
  };

  // Update isClicked ==>> find the id on the Task state and update it through the clicked data
  const todoClicked = (task) => {
    task.isClicked = true;
    const newTask = [...Task];
    const FindIndex = Task.findIndex((x) => x._id === task._id);
    newTask[FindIndex] = task;
    setTask(newTask);
    setUpdateTodo({
      _id: task._id,
      task: task.task,
      isCompleted: task.isCompleted,
    });
  };

  // Handle update field change
  const handleupdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateTodo({
      ...updateTodo,
      [name]: value,
    });
  };

  // Update Todo
  const updateTask = async () => {
    const { task, isCompleted } = updateTodo;
    // Send the update req
    const res = await axios.put(
      `https://todo-app-main-sandy.vercel.app/todo/${updateTodo._id}`,
      { task, isCompleted }
    );

    // Updating the State
    const newTasks = [...Task];
    const TaskIndex = Task.findIndex((x) => {
      return x._id === updateTodo._id;
    });
    newTasks[TaskIndex] = res.data.todo;
    setTask(() =>
      newTasks.map((task) => {
        return {
          ...task,
          isClicked: false,
        };
      })
    );
  };

  // Toggle Complete
  const toggleComplete = async(task) => {

    const isCompleted = !task.isCompleted;
    const res = await axios.put(
      `https://todo-app-main-sandy.vercel.app/todo/${task._id}`,
      { isCompleted }
    );
    console.log(res)

    //Update State
    const newTasks = [...Task];
    const TaskIndex = Task.findIndex((x) => {
      return x._id === task._id;
    });
    newTasks[TaskIndex] = res.data.todo;
    console.log(newTasks)
    setTask(() =>
      newTasks.map((task) => {
        return {
          ...task,
          isClicked: false,
        };
      })
    );

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
                <Todo key={task._id} onDoubleClick={() => todoClicked(task)}>
                  <TodoDiv>
                    <Checked isCompleted={task.isCompleted} onClick={() => toggleComplete(task)}>
                      {task.isCompleted && (
                        <CheckedImg src={CheckedIcon}></CheckedImg>
                      )}
                    </Checked>
                    {!task.isClicked && task.task}
                    {task.isClicked && (
                      <UpdateTask
                        name="task"
                        onChange={handleupdateFieldChange}
                        value={updateTodo.task}
                        onBlur={updateTask}
                        autoFocus
                      ></UpdateTask>
                    )}
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
