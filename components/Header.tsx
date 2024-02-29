import Image from "next/image"

export default function Header(){
    return (
        <div className="flex flex-row w-full justify-between items-center p-4 border-b-2 border-b-zinc-700">
            <h1>
                Bem-vindo, Heron!
            </h1>
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="foto de perfil"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}