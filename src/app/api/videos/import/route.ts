import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import fs from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "upload");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filePath, fileName } = body;

    // Resolve the file path
    const resolvedPath = filePath
      ? path.resolve(filePath)
      : path.join(UPLOAD_DIR, fileName || "video.mp4");

    if (!fs.existsSync(resolvedPath)) {
      return NextResponse.json(
        { error: `File not found at: ${resolvedPath}` },
        { status: 404 }
      );
    }

    const stats = fs.statSync(resolvedPath);
    const fileSize = stats.size;

    // Store a path that the process route can resolve
    // Use "/upload/" prefix for files in the upload directory
    // Use absolute path for other locations
    let storedUrl: string;
    if (resolvedPath.startsWith(path.join(process.cwd(), "public"))) {
      // File is in public dir - use relative URL
      storedUrl = resolvedPath.replace(path.join(process.cwd(), "public"), "");
    } else if (resolvedPath.startsWith(UPLOAD_DIR)) {
      // File is in the upload directory - store relative path with special prefix
      storedUrl = `/upload/${path.basename(resolvedPath)}`;
    } else {
      // File is elsewhere - store absolute path
      storedUrl = resolvedPath;
    }

    const displayName = fileName || path.basename(resolvedPath);

    // Create video record
    const video = await db.video.create({
      data: {
        filename: displayName,
        originalUrl: storedUrl,
        fileSize,
        status: "uploaded",
      },
    });

    return NextResponse.json(
      {
        video,
        filePath: resolvedPath,
        storedUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Import error:", error);
    return NextResponse.json(
      { error: "Failed to import video file" },
      { status: 500 }
    );
  }
}
