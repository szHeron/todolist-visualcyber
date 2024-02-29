"use client"

import { useState } from "react"

interface IDropdown {
    title: string;
    items: {
        text: string;
        selected: boolean;
    }[];
}

export default function Dropdown(props: IDropdown){
    const [isOpen, setIsOpen] = useState<boolean>(props.title.includes("VisualCyber"))

    const toggle = () => {
        setIsOpen(old => !old)
    }

    return (
        <>
            <button
                className="flex flex-row w-full items-center justify-between hover:text-blue-400 p-2"
                onClick={toggle}
            >
                <p className={`${isOpen?"text-white":"text-zinc-500"}`}>{props.title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen&&"rotate-90"}`} fill="#fff" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
            </button>
            {
                isOpen && 
                    props.items.map((item,index) =>
                        <button
                            key={index}
                            className={`${item.selected&&"bg-zinc-600/30 text-white rounded-full"} self-start text-zinc-500 hover:bg-zinc-700 hover:rounded-full px-4 py-2`}
                        >
                            {item.text}
                        </button>
                    )
            }
        </>
    )
}