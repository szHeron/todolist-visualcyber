import { ITodo } from "@/app/page";
import { Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

interface IColumnBoard {
    id: string,
    title: string,
    todos: ITodo[]
}


export default function ColumnBoard(props: IColumnBoard){
    return (
        <Droppable droppableId={props.id}>
            {(provided) => (
                <div
                    className="flex flex-col items-center p-4 rounded-lg bg-zinc-900 w-1/5"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <p className="text-zinc-500 mb-4">
                        {props.title}
                    </p>
                    {props.todos.map((todo, index) => (
                        <TodoCard key={todo.id} {...todo} />
                    ))}
                </div>
            )}
        </Droppable>
    )
}