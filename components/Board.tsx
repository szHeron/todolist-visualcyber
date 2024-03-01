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
                id: 1,
                title: "1",
                completed: true
            },
            {
                id: 2,
                title: "2",
                completed: false
            },
            {
                id: 3,
                title: "3",
                completed: false
            }
        ],
        author: "Heron",
        status: "done"
    },
    {
        id: 2,
        title: "Task 2",
        description: "Segunda task",
        tasks: [
            {
                id: 1,
                title: "1",
                completed: true
            },
            {
                id: 2,
                title: "2",
                completed: false
            },
            {
                id: 3,
                title: "3",
                completed: true
            },
        ],
        author: "Rodrigues",
        status: "done"
    }
];

export default function Board(){
    const [tasks, setTasks] = useState<ITodo[]>(initialTasks);

    function onDragEnd(result:any) {
        if(!result.destination) return null
        let newTasks = [...tasks]
        newTasks[result.source.index].status = result.destination.droppableId
        const element = newTasks.splice(result.source.index, 1)[0];
        newTasks.splice(result.destination.index, 0, element);

        setTasks(newTasks)
    }

    function handleEditTask(editedTask: ITodo){
        let newTasks = tasks.map(item => 
            {
                if(item.id === editedTask.id){
                    return editedTask
                }else{
                    return item
                }
            }
        )
        setTasks(newTasks)
    }

    function handleAddNewTask(newTask: ITodo){
        let newTasks = [...tasks]
        newTasks.push(newTask)
        setTasks(newTasks)
    }

    return (
        <div className="flex h-full">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row w-full h-full justify-around p-2">
                    <ColumnBoard id="todo" title="A fazer" todos={tasks} handleEditTask={handleEditTask}/>
                    <ColumnBoard id="in_progress" title="Em progresso" todos={tasks} handleEditTask={handleEditTask}/>
                    <ColumnBoard id="done" title="Feito" todos={tasks} handleEditTask={handleEditTask}/>
                </div>
            </DragDropContext>
        </div>
    )
}