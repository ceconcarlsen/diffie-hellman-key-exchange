import { useQuery } from "@tanstack/react-query";

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

export default useGetTodos