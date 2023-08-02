"use client"

import axios, { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {

  const [error, setError] = useState();
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const response = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname')
      })

      const authResponse = await signIn('credentials', {
        email: response.data.email,
        password: formData.get('password'),
        redirect: false,

      })

      if (authResponse?.ok) return router.push("/dashboard/profile")


      setError(undefined)
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
      }
    }
  }

  return (
    <div className='flex flex-col w-screen p-60'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit} >
        <h1 className='font-bold text-indigo-300 text-2xl'>Signup</h1>
        <input
          type='text'
          placeholder='Simon Arboleda'
          name='fullname'
          className='bg-zinc-800 font-semibold px-4 py-2 block mb-2 rounded-sm' />

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
          Signup
        </button>
      </form>
    </div>
  )
}