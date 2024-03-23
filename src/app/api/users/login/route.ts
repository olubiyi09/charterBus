import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User does not exist");
        }

        // Compare Password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Incorrect password" }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email,
        };

        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "1d",
        });

        const response = NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );

        // Set cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 1000, // Expires in 1 day
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function OPTIONS(request: NextRequest) {
    const response = NextResponse.json({ message: "CORS Preflight" }, { status: 200 });

    // Add headers for CORS
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}

export async function DELETE(request: NextRequest) {
    const response = NextResponse.json(
        { message: "Logout successful" },
        { status: 200 }
    );

    // Clear cookie on logout
    response.cookies.delete("token");

    return response;
}
