import db from "@/lib/db";
import Todo from "@/lib/models/Todo";
import { NextRequest, NextResponse } from "next/server";
import { Result } from "postcss";

export const GET = async (req: NextRequest) => {
    try {
        // DB OPRATION
        await db()
        const result = await Todo.find()
        return NextResponse.json({
            message: "Todo Fetch Success",
            result
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}
export const POST = async (req: NextRequest) => {
    try {
        // DB OPRATION
        const body = await req.json()
        await db()
        const result = await Todo.create(body)
        return NextResponse.json({
            message: "Todo Create Success",
            result
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}

