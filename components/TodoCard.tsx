"use client"

import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "@/app/page";
import Progressbar from "./Progressbar";
import TodoModal from "./TodoModal";

export interface ITodoCard extends ITodo {
    index: number;
}

export default function TodoCard(props: ITodoCard){
    const [openModal, setOpenModal] = useState(false);
    const completedCount = props.tasks.reduce((count, task) => {
        return count + (task.completed ? 1 : 0);
    }, 0)

    function handleCloseModal(){
        setOpenModal(false)
    }

    return (
        <Draggable draggableId={props.id.toString()} index={props.index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="flex flex-col bg-zinc-800 h-1/5 w-full rounded-lg p-4 justify-between my-2"
                    onClick={()=>setOpenModal(true)}
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
                        <p className="text-zinc-500 text-sm">{props.endAt.toLocaleDateString()}</p>
                    </div>
                    {openModal && (
                        <div
                            onClick={handleCloseModal}
                            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
                        >
                            <TodoModal
                                {...props}
                                handleCloseModal={handleCloseModal}
                            />
                        </div>
                    )}
                </div>
            )}
        </Draggable>
    );
}