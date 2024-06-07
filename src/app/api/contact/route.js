import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const body = await req.json();
        await dbConn();
        await Contact.create(body);
        return NextResponse.json(
            { message: "message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "server error, please try again" },
            { status: 500 }
        );
    }

}