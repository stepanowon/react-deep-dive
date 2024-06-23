import axios from "axios";

const BASEURL = "http://localhost:3000/todolist_long";

export type TodoType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type UpdateTodoType = TodoType & { owner: string };
export type AddTodoType = Pick<UpdateTodoType, "todo" | "desc" | "owner">;
export type DeleteTodoType = Pick<UpdateTodoType, "owner" | "id">;

export const fetchTodoList = ({ owner }: { owner: string }) => {
  const fetchUrl = `${BASEURL}/${owner}`;
  return axios.get<TodoType[]>(fetchUrl).then((response) => response.data);
};

export const fetchTodoOne = ({ owner, id }: { owner: string; id: number }) => {
  const fetchOneUrl = `${BASEURL}/${owner}/${id}`;
  return axios.get<TodoType>(fetchOneUrl).then((response) => response.data);
};

export const addTodo = ({ owner, todo, desc }: AddTodoType) => {
  const addUrl = `${BASEURL}/${owner}`;
  return axios.post(addUrl, { todo, desc });
};

export const updateTodo = ({ owner, id, todo, desc, done }: UpdateTodoType) => {
  const updateUrl = `${BASEURL}/${owner}/${id}`;
  return axios.put(updateUrl, { todo, desc, done });
};

export const toggleTodoDone = ({ owner, id }: DeleteTodoType) => {
  const toggleurl = `${BASEURL}/${owner}/${id}/done`;
  return axios.put(toggleurl);
};

export const deleteTodo = ({ owner, id }: DeleteTodoType) => {
  const deleteurl = `${BASEURL}/${owner}/${id}`;
  return axios.delete(deleteurl);
};
