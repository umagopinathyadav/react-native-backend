import { NextRequest, NextResponse } from "next/server";

export const PUT = (req: NextRequest) => {
    try {

        const id = req.url.split("/todo/")[1]
        // DB Opration
        return NextResponse.json({
            message: `Todo Update Success with id: ${id}`,
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}

export const DELETE = (req: NextRequest) => {
    try {

        const id = req.url.split("/todo/")[1]
        // DB Opration

        return NextResponse.json({
            message: `Todo Delete Success with id: ${id}`,
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}