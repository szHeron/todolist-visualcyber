"use client"

import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "@/app/page";
import Progressbar from "./Progressbar";
import TodoModal from "./TodoModal";

export interface ITodoCard {
    index: number;
    task: ITodo;
    handleEditTask: (editedTask: ITodo) => void;
}

export default function TodoCard(props: ITodoCard){
    const [openModal, setOpenModal] = useState(false);
    const completedCount = props.task.tasks.reduce((count, task) => {
        return count + (task.completed ? 1 : 0);
    }, 0)

    function handleCloseModal(){
        setOpenModal(false)
    }

    return (
        <Draggable draggableId={props.task.id.toString()} index={props.index}>
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
                            {props.task.title}
                        </h1>
                        <p className="text-zinc-500 text-sm">
                            {props.task.description}
                        </p>
                    </div>
                    <Progressbar value={completedCount} total={props.task.tasks.length}/>
                    {openModal && (
                        <div
                            onClick={handleCloseModal}
                            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
                        >
                            <TodoModal
                                task={props.task}
                                handleCloseModal={handleCloseModal}
                                handleEditTask={props.handleEditTask}
                            />
                        </div>
                    )}
                </div>
            )}
        </Draggable>
    );
}