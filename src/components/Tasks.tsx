import { ClipboardText } from 'phosphor-react';
import styles from './Tasks.module.css';
// import { useState } from 'react';
import { CreatedTasks } from './CreatedTasks';


function noTasksContent() {
    return (
        <div className={styles.TasksArea}>
        <div className={styles.TasksAreaText}>
            <p><ClipboardText size={56}/></p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        </div>
    )
}

// function teste() {
//     return (
//         setTasksState("cu")
//     )
// }

export function Tasks() {
    
    return (
        <div className={styles.TasksContainer}>
            <div className={styles.TasksCount}>
                <p>
                    Tarefas criadas 
                    <span>0</span>
                </p>
                <p className={styles.TasksCountTextPurple}>
                    Concluídas 
                    <span>0 de 5</span>
                </p>
            </div>
            <div className={styles.TasksArea}>
                {noTasksContent()}
                <CreatedTasks/>
            </div>

        </div>
    )
}