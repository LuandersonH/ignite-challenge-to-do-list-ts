import { CheckCircle, Circle, ClipboardText } from "phosphor-react";
import styles from "./Tasks.module.css";
import { useState } from "react";
import { CreatedTasks } from "./CreatedTasks";
import { v4 as uuid } from "uuid";
import { AddTask } from "./AddTask";

export interface Task {
  key: string;
  finished: boolean;
  description: string;
}

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      key: uuid(),
      finished: false,
      description: "tarefa criada exatamente aqui",
    },
    {
      key: uuid(),
      finished: false,
      description: "tarefa 2",
    },
    {
      key: uuid(),
      finished: false,
      description:
        "tarefa 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet assumenda quas fuga tempore consequatur dicta quidem cupiditate illum accusamus excepturi non, explicabo est pariatur omnis, dignissimos inventore, ratione iure?",
    },
  ]);

  function addTask(task: Task) {
    setTasks((prev) => {
      return [...prev, task];
    });
  }

  const updateFinished = (isFinished: boolean, tarefa: Task) => {
    const _tasks = JSON.parse(JSON.stringify(tasks));

    //pega a taks para atualizar
    const taskToUpdate = _tasks.filter((t: Task) => t.key === tarefa.key)[0];
    taskToUpdate.finished = isFinished;

    //pega a index da task
    const taskIndex = _tasks.findIndex((t: Task) => t.key === tarefa.key);

    //deleta a task pelo index
    _tasks.splice(taskIndex, 1);

    //adiciona a task no index
    _tasks.splice(taskIndex, 0, taskToUpdate);

    setTasks(_tasks);
  };

  const deleteTask = (tarefa: Task) => {
    const _tasks = JSON.parse(JSON.stringify(tasks));

    //pega a index da task
    const taskIndex = _tasks.findIndex((t: Task) => t.key === tarefa.key);

    //deleta a task pelo index
    _tasks.splice(taskIndex, 1);

    setTasks(_tasks);
  };

  return (
    <div>
      <AddTask addTask={addTask}/>
      <div className={styles.TasksContainer}>
        <div className={styles.TasksCount}>
          <p>
            Tarefas criadas
            <span>{tasks.length}</span>
          </p>
          <p className={styles.TasksCountTextPurple}>
            Concluídas
            <span>{tasks.filter((t) => t.finished).length}</span>
          </p>
        </div>
        <div className={styles.TasksArea}>
          <div className={styles.TasksAreaText}>
            <CreatedTasks
              tasks={tasks}
              updateFinished={updateFinished}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
