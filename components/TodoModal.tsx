import Datetimepicker from "./Datetimepicker";
import { ITodoCard } from "./TodoCard";

interface ITodoModal extends ITodoCard {
    handleCloseModal: ()=>void
}

export default function TodoModal(props: ITodoModal){
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
            <form>
                <div className="mb-2"> 
                    <label className="block mb-2 text-sm font-medium dark:text-white">Titulo</label>
                    <input type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tarefa 1" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium dark:text-white">Descrição</label>
                    <input type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A fazer" required />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="block mb-2 text-sm font-medium dark:text-white">Crie uma nova tarefa</label>
                    <input type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tarefa 1" required />
                    <button className="mt-2 text-white self-end bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 h-full text-center mb-2">Criar</button>
                </div>
                <label className="block mb-2 text-sm font-medium dark:text-white">Tarefas</label>
                <div className="flex items-center mb-4">
                    <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                </div>
                <Datetimepicker/>
            </form>
        </div>
    )
}