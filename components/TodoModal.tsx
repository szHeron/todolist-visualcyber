import { FormEvent, useState } from "react";
import { ITasks, ITodo } from "@/app/page";

interface ITodoModal {
    handleCloseModal: ()=>void;
    task: ITodo;
    handleEditTask: (editedTask: ITodo) => void;
}

export default function TodoModal(props: ITodoModal){
    const [task, setTask] = useState(props.task)
    const [subTask, setSubTask] = useState<ITasks>({title: "", completed: false, id: 0})

    function addNewSubTask(){
        const tasks = [...task.tasks]
        tasks.push(subTask)
        setTask({...task, tasks: tasks})
        setSubTask({title: "", completed: false, id:0})
    }

    function editSubTask(editedTask: ITasks){
        const tasks = task.tasks.map((item) => {
            if(item.id === editedTask.id){
                return {
                    title: item.title,
                    completed: editedTask.completed,
                    id: item.id
                }
            }else{
                return item
            }
        })
        setTask({...task, tasks: tasks})
    }

    function save(e: FormEvent){
        e.preventDefault()

        if(props.task.id){
            props.handleEditTask(task)
        }

        props.handleCloseModal()
    }

    return (
        <div
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                event.stopPropagation();
            }}
            className="fixed flex flex-col justify-between w-2/5 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg p-4 bg-zinc-800"
        >
            <button className="mb-2 self-end" onClick={props.handleCloseModal}>
                <svg height={24} width={24} fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
            </button>
            <form onSubmit={save}>
                <div className="mb-2"> 
                    <label className="block mb-2 text-sm font-medium dark:text-white">Titulo</label>
                    <input onChange={text => setTask({...task, title: text.target.value})} value={task.title} type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tarefa 1" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium dark:text-white">Descrição</label>
                    <input onChange={text => setTask({...task, description: text.target.value})} value={task.description} type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A fazer" required />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="block mb-2 text-sm font-medium dark:text-white">Crie uma nova tarefa</label>
                    <div className="flex flew-row gap-2">
                        <input onChange={text => setSubTask({...subTask, title: text.target.value})} type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tarefa 1" />
                        <button onClick={addNewSubTask} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Criar</button>
                    </div>
                </div>
                <label className="block mb-2 text-sm font-medium dark:text-white">Tarefas</label>
                <div className="flex flex-col mb-4 max-h-32 overflow-y-scroll border-zinc-600 border-2 p-2 rounded-xl">
                    {task.tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row my-1">
                                <input type="checkbox" value="" onChange={value => {
                                    editSubTask({...item, completed: value.target.checked})
                                }} checked={item.completed} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.title}</label>
                            </div>
                        )
                    })}
                </div>
                <button type="submit" className="mt-2 text-white self-end bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 h-full text-center mb-2">Salvar</button>
            </form>
        </div>
    )
}