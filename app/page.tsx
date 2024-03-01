import Board from "@/components/Board";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export interface ITasks {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
  tasks: ITasks[];
  status: string;
}

export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-zinc-800 overflow-hidden">
      <Navbar/>
      <Projects/>
      <div className="flex flex-col h-full w-full">
        <Header/>
        <Board/>
      </div>
    </main>
  );
}
