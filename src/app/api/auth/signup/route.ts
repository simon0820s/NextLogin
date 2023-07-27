import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const {fullName, email, passoword} = await request.json()
    return NextResponse.json({message: "signUp"})
}