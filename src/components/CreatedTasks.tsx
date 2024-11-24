import { CheckCircle, Circle, ClipboardText, Trash } from "phosphor-react";
import styles from "./CreatedTasks.module.css";
import { Task } from "./Tasks.tsx";

interface Props {
  tasks: Task[];
  updateFinished: Function;
  deleteTask: Function;
}

export function CreatedTasks({ tasks, updateFinished, deleteTask }: Props) {
  return (
    <div className={styles.containerTasks}>
      {tasks.length > 0 ? (
        <div className={styles.containerCreatedTasksCards}>
          {tasks.map((tarefa) => (
            <div key={tarefa.key}>
              <div className={styles.CreatedTasksCards}>
                <div>
                  <span>
                    {!tarefa.finished ? (
                      <Circle
                        size={24}
                        className={styles.notCheckedTask}
                        onClick={() => updateFinished(true, tarefa)}
                      />
                    ) : (
                      <CheckCircle
                        className={styles.checkedTask}
                        size={24}
                        onClick={() => updateFinished(false, tarefa)}
                      />
                    )}
                  </span>
                </div>
                <p
                  className={
                    tarefa.finished
                      ? styles.descriptionTasksCheck
                      : styles.descriptionTasks
                  }
                >
                  {tarefa.description}
                </p>
                <div>
                  <span>
                    <Trash
                      size={24}
                      className={styles.deleteTasksIcon}
                      onClick={() => deleteTask(tarefa)}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyTasks}>
          <p>
            <ClipboardText size={56} />
          </p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
