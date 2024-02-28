import Board from "@/components/Board";
import Header from "@/components/Header";

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
    <main className="flex flex-col h-screen bg-zinc-800">
      <Header/>
      <Board/>
    </main>
  );
}
