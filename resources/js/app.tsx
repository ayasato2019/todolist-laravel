import "../css/app.css";

import React from "react";
import TodoForm from "./Components/TodoForm";
import ShowTodoList from "./Components/ShowTodoList";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TodoForm />} />
                    <Route path="/show" element={<ShowTodoList />} />
                </Routes>
            </div>
        </Router>
    );
};

const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}