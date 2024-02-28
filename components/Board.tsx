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
                completed: false
            },
            {
                title: "2",
                completed: true
            },
            {
                title: "3",
                completed: false
            },
        ],
        author: "Heron",
        status: "in_progress",
        createdAt: new Date('2024,02,26')
    },
    {
        id: 2,
        title: "Task 2",
        description: "Segunda task",
        tasks: [
            {
                title: "1",
                completed: false
            },
            {
                title: "2",
                completed: true
            },
            {
                title: "3",
                completed: true
            },
        ],
        author: "Rodrigues",
        status: "done",
        createdAt: new Date('2024,02,26')
    },
];

export default function Board(){
    const [tasks, setTasks] = useState<ITodo[]>(initialTasks);

    const onDragEnd = (result:any) => {}

    return (
        <div className="flex h-full">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row w-full h-full justify-around p-2">
                    <ColumnBoard id="todo" title="A fazer" todos={tasks.filter(todo => todo.status.includes("todo"))}/>
                    <ColumnBoard id="in_progress" title="Em progresso" todos={tasks.filter(todo => todo.status.includes("in_progress"))}/>
                    <ColumnBoard id="done" title="Feito" todos={tasks.filter(todo => todo.status.includes("done"))}/>
                </div>
            </DragDropContext>
        </div>
    )
}