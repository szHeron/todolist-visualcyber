import Dropdown from "./Dropdown";

export default function Projects(){
    return (
        <div className="flex flex-col w-1/5 bg-zinc-900 items-center p-6">
            <div className="flex flex-row w-full items-center justify-between mb-5">
                <h1 className=" font-bold text-3xl">
                    Projetos
                </h1>
                <button className="bg-zinc-600/50 p-1 rounded-full">
                    <svg width="20" height="20" fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>
                </button>
            </div>
            <Dropdown title="VisualCyber" items={[{selected: false, text: 'QA'},{selected: true, text: 'Front-end'},{selected: false, text: 'Back-end'}, {selected: false, text: 'UX/UI'}]}/>
            <Dropdown title="Social Media" items={[{selected: false, text: 'Instagram'}, {selected: false, text: 'Facebook'}, {selected: false, text: 'Twitter'}]}/>
            <Dropdown title="Other" items={[{selected: false, text: 'Agenda'}, {selected: false, text: 'Meetings'}]}/>
        </div>
    )
}