export type TodoItemType = {             
    id: number;
    userid: string;
    todo: string;
    desc: string;
}

export type TodoListResponseType = {
    status: string;
    todoList : TodoItemType[]
}
