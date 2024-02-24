'use client';
import { useQuery } from '@tanstack/react-query';
import { Todo } from './api/todos/route';

const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );

      return response.json();
    },
  });
};

export default function Home() {
  const { data, isLoading } = useGetTodos();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
