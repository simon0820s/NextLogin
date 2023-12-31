"use client"

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const authResponse = await signIn('credentials', {
      email: formData.get("email"),
      password: formData.get('password'),
      redirect: false,
    })

    if (authResponse?.error) return setError(authResponse.error as string)

    if (authResponse?.ok) return router.push("/dashboard/profile")


    setError("")

  }

  return (
    <div className='flex flex-col w-screen p-60'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit} >
        <h1 className='text-indigo-300 font-bold text-2xl mb-1'>Signin</h1>

        <input
          type='email'
          placeholder='simon0820s@gmail.com'
          name='email'
          className='bg-zinc-800 font-semibold px-4 py-2 block mb-2 rounded-sm' />

        <input
          type='password'
          placeholder='*******'
          name='password'
          className='bg-zinc-800 font-semibold px-4 py-2 block mb-2 rounded-sm' />

        {
          error && <p className='text-sm text-red-600 font-bold'> {error} </p>
        }
        <button type='submit' className='bg-indigo-500 px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-all ease-in-out duration-400  '>
          Login
        </button>
      </form>
    </div>
  )
}