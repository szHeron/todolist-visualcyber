"use client"

import { ITodo } from "@/app/page";
import { Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

interface IColumnBoard {
    id: string,
    title: string,
    todos: ITodo[]
}

interface IColumnTask extends ITodo {
    arrayIndex: number;
}

export default function ColumnBoard(props: IColumnBoard){
    const tasks: IColumnTask[] = []

    props.todos.forEach((todo, index) => {
        if(todo.status.includes(props.id)){
            tasks.push({...todo, arrayIndex: index})
        }
    })

    return (
        <Droppable droppableId={props.id}>
            {(provided) => (
                <div 
                    className="flex flex-col items-center p-4 rounded-lg bg-zinc-900 w-[30%]"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <p className="text-zinc-500 mb-4">
                        {props.title}
                    </p>
                    {tasks.map((todo) => (
                        <TodoCard key={todo.id} index={todo.arrayIndex} {...todo} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}