---
Task ID: 1
Agent: Main
Task: Fix AttentionX processing pipeline - ASR format incompatibility and 30-second limit

Work Log:
- Investigated processing errors by reading dev.log → Found root cause: ASR API returns "Audio format conversion failed: unsupported audio format: unknown, only WAV and WebM are supported"
- The original code was sending raw MP4 video file to ASR, but ASR only accepts WAV/WebM audio
- Also discovered ASR has a 30-second duration limit ("transcriptions文件时长限制为0-30秒")
- Fixed processing pipeline with multiple improvements:
  1. Added ffmpeg-based audio extraction (MP4 → WAV, 16kHz mono)
  2. Implemented chunked ASR: splits audio into 25-second chunks for videos > 30s
  3. Added VLM fallback: if ASR fails, uses Vision Language Model with video_url to analyze video content
  4. Added ffprobe for accurate video duration detection
  5. Fixed clip time validation (ensure start < end, within video duration)
  6. Fixed JSON parsing resilience in video details API
- Added "Quick Start with Sample Video" button to upload zone
- Added resume feature: page loads existing processed videos on refresh
- Cleaned up old error videos from database

Stage Summary:
- Root cause: MP4 format incompatible with ASR (only WAV/WebM supported) AND 30-second ASR limit
- Solution: ffmpeg audio extraction + chunked ASR + VLM fallback
- Processing pipeline now works end-to-end: upload → extract audio → chunked ASR → LLM analysis → caption generation → thumbnail generation
- Successfully processed video.mp4 (85s) into 4 viral clips with thumbnails
- Key files modified: src/app/api/videos/[id]/process/route.ts, src/app/api/videos/[id]/route.ts, src/components/upload-zone.tsx, src/app/page.tsx
