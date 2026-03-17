import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // save file locally
    const filePath = path.join(process.cwd(), "uploads", file.name);

    // make sure uploads folder exists
    fs.mkdirSync(path.join(process.cwd(), "uploads"), { recursive: true });

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      message: "File saved successfully",
      path: filePath,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}