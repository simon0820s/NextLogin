"use client"

import { useSession } from "next-auth/react"

export default function ProfilePage() {

    const { data: session, status, } = useSession()

    console.log(session, status)
    return (
        <div className="flex flex-col gap-4 p-10 bg-slate-700 rounded-lg m-8">
            <h1 className="font-bold text-xl">Profile</h1>
            <pre>
                {
                    JSON.stringify({
                        session,
                        status
                    }, null, 2)
                }
            </pre>
        </div>
    )
}
