import { CheckCircle, Circle } from 'phosphor-react';
//import { props } from './components/AddTask.tsx'; essas props vão ter o content do parágrafo.

import styles from './CreatedTasks.module.css';

export function CreatedTasks() {

let content = 'Aqui vai ir a descrição da tarefa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, impedit repellendus. Assumenda eveniet quaerat aliquid ut tenetur totam recusandae reprehenderit harum doloribus nostrum. Vel aut velit illo fugiat cumque repellendus.'

    return (
        <div className={styles.CreatedTasksContainer}>
            <div><span><Circle size={24}/></span></div>
            <p> {content} </p>
            <div><span><CheckCircle size={24}/></span></div>
        </div>
    )
}