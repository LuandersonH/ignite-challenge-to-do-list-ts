import { Header } from "./components/Header.tsx";
import { Tasks } from "./components/Tasks.tsx";

import "./app.css";

export function App() {
  return (
    <div className="toDoListMain">
      <Header />
      <Tasks />
    </div>
  );
}
