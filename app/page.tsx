import Board from "@/components/Board";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

interface ITasks {
  title: string,
  completed: boolean
}

export interface ITodo {
  id: number,
  title: string,
  description: string,
  tasks: ITasks[],
  author: string,
  status: string,
  createdAt: Date
}

export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-zinc-800 bg">
      <Navbar/>
      <div className="flex flex-col h-full w-full">
        <Header/>
        <Board/>
      </div>
    </main>
  );
}
