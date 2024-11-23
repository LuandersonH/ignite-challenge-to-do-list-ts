import { ChangeEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { ClipboardText, PlusCircle } from "phosphor-react";
import { v4 as uuid } from "uuid";

interface Props {
  addTask: Function;
}

export function AddTask({ addTask }: Props) {
  const [placeholder, setPlaceholder] = useState("Adicione uma nova tarefa");

  const [newContentTask, setNewContentTask] = useState("");

  function addContentTask() {
    const textValue = newContentTask;
    console.log(textValue);

    const task = {
      key: uuid(),
      finished: false,
      description: textValue,
    };

    addTask(task);

    setNewContentTask("");
  }

  function handleNewContentTask(event: ChangeEvent<HTMLInputElement>) {
    setNewContentTask(event.target.value);
  }


    return (
      <div className={styles.addTaskContainer}>
        <input
          type="text"
          name="contentText"
          value={newContentTask}
          placeholder={placeholder}
          onChange={handleNewContentTask}
          onFocus={() => setPlaceholder("Descrição da tarefa")}
          onBlur={() => setPlaceholder("Adicione uma nova tarefa")}
        />
        <button onClick={addContentTask} title="Criar task">
          <span>Criar </span>
          <span>
            <PlusCircle size={16} />
          </span>
        </button>
      </div>
    );
  }

