"use client"

import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnBoard from "./ColumnBoard";
import { ITodo } from "@/app/page";

const initialTasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Primeira task",
        tasks: [
            {
                title: "1",
                completed: true
            },
            {
                title: "2",
                completed: false
            },
            {
                title: "3",
                completed: false
            },
        ],
        author: "Heron",
        status: "done",
        createdAt: new Date('2024,02,26')
    },
    {
        id: 2,
        title: "Task 2",
        description: "Segunda task",
        tasks: [
            {
                title: "1",
                completed: true
            },
            {
                title: "2",
                completed: false
            },
            {
                title: "3",
                completed: true
            },
        ],
        author: "Rodrigues",
        status: "done",
        createdAt: new Date('2024,02,26')
    }
];

export default function Board(){
    const [tasks, setTasks] = useState<ITodo[]>(initialTasks);

    const onDragEnd = (result:any) => {
        if(!result.destination) return null
        let newTasks = [...tasks]
        newTasks[result.source.index].status = result.destination.droppableId
        const element = newTasks.splice(result.source.index, 1)[0];
        newTasks.splice(result.destination.index, 0, element);

        setTasks(newTasks)
    }

    return (
        <div className="flex h-full">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row w-full h-full justify-around p-2">
                    <ColumnBoard id="todo" title="A fazer" todos={tasks}/>
                    <ColumnBoard id="in_progress" title="Em progresso" todos={tasks}/>
                    <ColumnBoard id="done" title="Feito" todos={tasks}/>
                </div>
            </DragDropContext>
        </div>
    )
}