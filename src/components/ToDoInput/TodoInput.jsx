/* eslint-disable react/prop-types */
import { useState } from "react"

const TodoInput = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const handleaddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            const trimmedValue = e.target.value.trim();
    
            if (trimmedValue) {
                addTodo(trimmedValue);
                setTitle('');
            }
        }
    };
    
    
    return(
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
            type="text" 
            className="focus:shadow-lg font-inter focus:shadow-green-700  pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
            
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e=> handleaddTodo(e)}
            placeholder="Cual es la siguiente tarea?..."
           
            />
        
        </div>
    )
}

export {TodoInput}