import { ITodo } from "@/app/page";
import { Draggable } from "react-beautiful-dnd";
import Progressbar from "./Progressbar";

interface ITodoCard extends ITodo {
    index: number;
}

export default function TodoCard(props: ITodoCard){
    const completedCount = props.tasks.reduce((count, task) => {
        return count + (task.completed ? 1 : 0);
    }, 0)

    return (
        <Draggable draggableId={props.id.toString()} index={props.index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-col bg-zinc-800 h-1/5 w-full rounded-lg p-4 justify-between my-2"
                >
                    <div>
                        <h1 className="font-bold">
                            {props.title}
                        </h1>
                        <p className="text-zinc-500 text-sm">
                            {props.description}
                        </p>
                    </div>
                    <Progressbar value={completedCount} total={props.tasks.length}/>
                    <div className="bg-zinc-700 rounded-full w-fit p-2">
                        <p className="text-zinc-500 text-sm">{props.createdAt.toLocaleDateString()}</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
}