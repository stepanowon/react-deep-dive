import axios from "axios";

const BASEURL = "http://localhost:3000";

export type TodoType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};
export type AddTodoType = Pick<TodoType, "todo" | "desc">;

export const fetchTodoList = (url: string) => {
  const fetchUrl = `${BASEURL}${url}`;
  return axios.get<TodoType[]>(fetchUrl).then((response) => response.data);
};

export const addTodo = (url: string, { arg }: { arg: AddTodoType }) => {
  const addUrl = `${BASEURL}${url}`;
  return axios.post(addUrl, { todo: arg.todo, desc: arg.desc });
};
