import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

function safeJsonParse(str: string, fallback: unknown = []) {
  if (!str) return fallback;
  if (typeof str !== "string") return str;
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const video = await db.video.findUnique({
      where: { id },
      include: {
        transcript: true,
        clips: {
          orderBy: { sentimentScore: "desc" },
        },
      },
    });

    if (!video) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    // Parse JSON fields for convenience
    const parsedVideo = {
      ...video,
      transcript: video.transcript
        ? {
            ...video.transcript,
            segments: safeJsonParse(video.transcript.segments, []),
          }
        : null,
      clips: video.clips.map((clip) => ({
        ...clip,
        captions: safeJsonParse(clip.captions, []),
      })),
    };

    return NextResponse.json({ video: parsedVideo });
  } catch (error) {
    console.error("Get video error:", error);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}
