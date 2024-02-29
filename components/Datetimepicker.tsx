import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Datetimepicker() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<Date>()

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div onClick={toggle}>
                <label className="block mb-2 text-sm font-medium dark:text-white">Selecione a data</label>
                <input type="text" className="bg-zinc-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data" required />
            </div>
            {
                isOpen && 
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        locale={ptBR}
                    />
            }
        </>
    );
}