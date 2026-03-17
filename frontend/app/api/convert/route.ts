import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
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

    // ===== RUN AUDIVERIS =====
    const audiverisPath = `"C:\\Program Files\\Audiveris\\audiveris.exe"`;
    const command = `${audiverisPath} -batch -export "${filePath}"`;

    // wrap exec in a promise so we can await it
    await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error("OMR Error:", error);
          reject(error);
          return;
        }

        console.log("OMR Output:", stdout);
        resolve(stdout);
      });
    });

    // ===== GET OUTPUT FILE =====
    const outputPath = filePath.replace(/\.(png|jpg|jpeg|pdf)$/i, ".mxl");

    // ===== RETURN RESULT =====
    return NextResponse.json({
      message: "OMR processing complete",
      input: filePath,
      output: outputPath,
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong during OMR processing" },
      { status: 500 }
    );
  }
}