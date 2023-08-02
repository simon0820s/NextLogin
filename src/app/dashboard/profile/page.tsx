"use client"

import { useSession } from "next-auth/react"

export default function ProfilePage() {

    const { data: session, status, } = useSession()

    console.log(session, status)
    return (
        <div className="flex flex-col p-4 m-8 gap-4">
            <h1 className="font-bold text-4xl">Profile</h1>
            <div className="p-10 bg-slate-700 rounded-lg">
                <pre>
                    {
                        JSON.stringify({
                            session,
                            status
                        }, null, 2)
                    }
                </pre>
            </div>
        </div>
    )
}
