import React from "react";
import {
  CreateTodo,
  FilterSection,
  InputBox,
  SecondSection,
  SectionContent,
  Todo,
  TodoBox,
  TodoDetailBox,
} from "../styledComponents/BodyStyle";

const Body = () => {
  return (
    <SecondSection>
      <SectionContent>
        <CreateTodo>
          <InputBox placeholder="Create a new todo..."></InputBox>
        </CreateTodo>
        <TodoBox>
          <Todo>Jog around the part 3x</Todo>
          <Todo>10 minutes meditation</Todo>
          <Todo>Read for 1 hour</Todo>
          <Todo>Jog around the part 3x</Todo>
          <Todo>10 minutes meditation</Todo>
          <Todo>Read for 1 hour</Todo>
          <TodoDetailBox>
            <div>5 items left</div>
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
