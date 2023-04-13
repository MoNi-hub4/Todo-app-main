import styled from "styled-components";

export const SecondSection = styled.div`
  height: 75vh;
  position: relative;
  background: #f6f1e9;
`;

export const SectionContent = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  top: -15%;
  width: auto;
  max-width: 100%;
`;

export const CreateTodo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const TodoBox = styled.div`
  margin-top: 25px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
`;
export const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid hsl(233, 11%, 84%);
`;

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TodoDetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  background: #fff;
`;

export const InputBox = styled.input`
  outline: none;
  border: 0 none;
  font-size: 15px;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  gap: 25px;
  justify-content: center;
`;

export const Checked = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border: ${(props) =>
    props.isClicked ? "none" : "1px solid hsl(233, 11%, 84%)"};
  background: ${(props) =>
    props.isClicked
      ? "linear-gradient(to right ,  hsl(192, 100%, 67%) ,hsl(280, 87%, 65%))"
      : 0};
`;

export const CheckedImg = styled.img`
  transform: translate(-5%, 15%);
  display: block;
`;

export const ButtonDelete = styled.img`
  margin-right: 20px;
  width: 10px;
  height: 10px;
`;

export const UpdateTask = styled.input`
  outline: none;
  border: 0 none;
  font-size: 15px;
  position: absolute;
  left: 33px;
`;
