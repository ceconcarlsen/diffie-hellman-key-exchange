import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await response.json();

  return NextResponse.json(todos);
}