import { useState } from 'react';
import { useAuth } from '../AuthProvider';
import axios from 'axios';
import { TodoItemType, TodoListResponseType } from '../AppType';

const TODOLIST_URL = "/todolist";
const AdminPage = () => {
    const auth = useAuth();
    const userInfo = auth.getCurrentUserInfo();
    const [todoList, setTodoList] = useState<TodoItemType[]>([]);

    const getTodoList = async () => {
        const response = await axios.get<TodoListResponseType>(TODOLIST_URL);
        if (response.data.status === "success") {
            setTodoList(response.data.todoList);
        } else {
            setTodoList([]);
        }
    }

    return (
        <>
            <div>
                <h3>관리자 페이지 : admins 역할이 필요함.</h3>
                <p>관리자 : {userInfo.userid}, 역할 : {userInfo.role}</p>
            </div>
            <div>
                <button onClick={getTodoList}>TodoList 조회</button>
                <hr />
                <ul>
                    { 
                        todoList.length === 0 ? <li>데이터 없음</li> :
                            todoList.map((todoItem)=>(<li key={todoItem.id}>{todoItem.todo}</li>))
                    }
                </ul>
            </div>
        </>
    );
};

export default AdminPage;
