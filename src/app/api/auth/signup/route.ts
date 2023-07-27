import { NextResponse } from "next/server"

export async function POST(request: Request) {

    const {fullname, email, password} = await request.json()
    console.log(fullname,email,password)

    if (!password || password.length < 6) return NextResponse.json({
        message: "Password must be at least 6 characters"
    },{
        status: 400
    })

    return NextResponse.json({message: "signUp"})
}