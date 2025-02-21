import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex fixed w-[100vw] items-center h-[60px] px-4 border-b bg-white'>
            <div className='flex-1 min-w-0'>
                <h1 className='font-bold text-lg'>
                    <Link href='/'>Todo List app</Link>
                </h1>
            </div>
            <Button size='sm'>New Task</Button>
        </header>
    );
};