import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cloudinary = require('cloudinary').v2;

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
            secure: true,
        });


        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'smile/',
        });
        return NextResponse.json(result, {status:200})

    } catch (error) {
        console.error("Error fetching images:", error);
        return NextResponse.json({ message: "Error in fetching images" }, { status: 404 });
    }
}
