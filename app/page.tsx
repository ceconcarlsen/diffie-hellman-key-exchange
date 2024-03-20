'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Welcome from '@/components/welcome';
import useGetTodos from '@/services/todos.service';
import { UserButton, useUser } from '@clerk/nextjs';



export default function Home() {
  const { setTheme } = useTheme();
  const { isLoaded, isSignedIn, user } = useUser();
  const { data, isLoading } = useGetTodos();

  if (isLoading) return <div>Loading...</div>;

  // In case the user signs out while on the page.
  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="h-screen">
      <div className="m-8 flex flex-row gap-4 items-center">
        <UserButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="m-12">
        <div>Hello, {user.firstName} welcome to Leaf-It</div>
      </div>
      <Welcome />
    </div>
  );
}
