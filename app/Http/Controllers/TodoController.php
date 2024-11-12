<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function setTodo(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:255'
        ]);

        $todo = Todo::create([
            'content' => $request->content
        ]);

        return response()->json($todo, 201);
    }
    public function index()
    {
        // Todoのすべてのレコードを取得して変数に格納
        $todos = Todo::all();

        // 取得したTodoのリストをJSON形式で返す
        return response()->json($todos);
    }
}
