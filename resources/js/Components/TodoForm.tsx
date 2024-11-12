import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoForm: React.FC = () => {
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/todo", { content });
            setMessage("Item added successfully");
            setContent("");
            navigate("/show");
        } catch (error) {
            setMessage("Failed to add item");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">
                lifiGoalTodo
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="content" className="block text-lg text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        id="content"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    目標を送信
                </button>
            </form>
            {message && (
                <p className="mt-4 text-center text-gray-600">
                    {message}
                </p>
            )}
        </div>
    );
};

export default TodoForm;
