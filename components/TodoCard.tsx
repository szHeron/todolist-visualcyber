import { ITodo } from "@/app/page";
import { Draggable } from "react-beautiful-dnd";
import Progressbar from "./Progressbar";

export default function TodoCard(props: ITodo){
    return (
        <Draggable draggableId={props.id.toString()} index={props.id}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-col bg-zinc-800 h-1/4 w-full rounded-lg p-4 justify-between"
                >
                    <div>
                        <h1 className="font-bold">
                            {props.title}
                        </h1>
                        <p className="text-zinc-500 text-sm">
                            {props.description}
                        </p>
                    </div>
                    <Progressbar value={2} total={5}/>
                    <div className="bg-zinc-700 rounded-full w-fit p-2">
                        <p className="text-zinc-500 text-sm">{props.createdAt.toLocaleDateString()}</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
}