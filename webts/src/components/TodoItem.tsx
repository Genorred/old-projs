import React from 'react';
import {ITodo} from "../types/types";
interface TodoItemProps {
    todo: ITodo
}
const TodoItem = ({todo}: TodoItemProps) => {
    return (
        <div>
            {todo.id} {todo.title} {todo.completed}
        </div>
    );
};

export default TodoItem;