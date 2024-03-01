"use client"

import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ITodo } from "@/app/page";
import TodoCard from "./TodoCard";
import TodoModal from "./TodoModal";

interface IColumnBoard {
    id: string;
    title: string;
    todos: ITodo[];
    handleEditTask: (editedTask: ITodo) => void;
    handleAddNewTask: (newTask: ITodo) => void;
}

interface IColumnTask extends ITodo {
    arrayIndex: number;
}

export default function ColumnBoard(props: IColumnBoard){
    const tasks: IColumnTask[] = []
    const [openModal, setOpenModal] = useState(false);

    props.todos.forEach((todo, index) => {
        if(todo.status.includes(props.id)){
            tasks.push({...todo, arrayIndex: index})
        }
    })

    function handleCloseModal(){
        setOpenModal(false)
    }

    return (
        <Droppable droppableId={props.id}>
            {(provided) => (
                <div 
                    className="flex flex-col items-center p-4 rounded-lg bg-zinc-900 w-[30%]"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div className="flex flex-row w-full justify-between items-center mb-4 text-sm">
                        <p className="text-zinc-500">
                            {props.title}
                        </p>
                        {
                            props.id === "todo" &&
                            <button onClick={()=>setOpenModal(true)} className="flex flex-row items-center gap-2">
                                <div className="bg-zinc-600/50 p-1 rounded-full">
                                    <svg width="16" height="16" fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>
                                </div>
                                Adicionar nova tarefa
                            </button>
                        }
                    </div>
                    {tasks.map((todo) => (
                        <TodoCard key={todo.id} index={todo.arrayIndex} task={todo} handleEditTask={props.handleEditTask} />
                    ))}
                    {openModal && (
                        <div
                            onClick={handleCloseModal}
                            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
                        >
                            <TodoModal
                                handleCloseModal={handleCloseModal}
                                handleEditTask={props.handleEditTask}
                                handleAddNewTask={props.handleAddNewTask}
                            />
                        </div>
                    )}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}