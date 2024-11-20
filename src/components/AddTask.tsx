import { useState } from "react";
import styles from "./AddTask.module.css";
import { PlusCircle } from "phosphor-react";

export function AddTask() {
    
const [placeholder, setPlaceholder] = useState("Adicione uma nova tarefa");

    return (
    <div className={styles.addTaskContainer}>
        <input 
            type="text" 
            name="newTask" 
            required
            placeholder={placeholder}
            onFocus={() => setPlaceholder("Descrição da tarefa")}
            onBlur={() => setPlaceholder("Adicione uma nova tarefa")}
        />
        <button>
                <span>Criar </span>
                <span><PlusCircle size={16}/></span>
        </button>
    </div>
    )
}

