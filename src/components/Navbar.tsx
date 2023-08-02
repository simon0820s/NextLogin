import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-zinc-900 p-4'>
            <div className='flex justify-between container mx-auto'>
                <Link href="/">
                    <h1 className='font-bold text-2xl text-indigo-400'>NextAuth</h1>
                </Link>
                <ul className='flex gap-x-2'>
                    <li className='px-3 py-1'>
                        <Link className='hover:text-violet-400 transition-all ease-in-out duration-500' href="/dashboard/profile">Profile</Link>
                    </li>
                    <li className='px-3 py-1'>
                        <Link className='hover:text-violet-400 transition-all ease-in-out duration-500' href="/login">Login</Link>
                    </li>
                    <li className='px-3 py-1'>
                        <Link className='hover:text-violet-400 transition-all ease-in-out duration-500' href="/register">Register</Link>
                    </li>

                    <li className='px-3 py-1'>
                        <Link className='hover:text-violet-400 transition-all ease-in-out duration-500' href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
