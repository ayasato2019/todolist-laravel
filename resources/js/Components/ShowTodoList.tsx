import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowTodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);
    const [loading, setLoading] = useState(true);

    // fetchTodos関数をuseEffect内で呼び出す
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get("/api/todo");
                console.log(response.data); // レスポンスをログに出力して確認
                setTodos(response.data); // データをtodosステートにセット
            } catch (error) {
                console.error("Error fetching items:", error); // エラーが発生した場合の処理
            } finally {
                setLoading(false); // ローディング状態を解除
            }
        };

        fetchTodos(); // コンポーネントがマウントされたときにデータを取得
    }, []); // 空の依存配列で最初の1回だけ実行される

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>; // ローディング中の表示
    }

    return (
        <div className="max-w-md mx-auto mt-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Item List</h1>
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg">{todo.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowTodoList;
