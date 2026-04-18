**⚡ AttentionX (Automated Content Repurposing System)**
  AI-Powered Automated Content Repurposing Enginr transforms long-form videos into viral short-form clips with emotional peak detection, dynamic captions, and smart vertical cropping — all powered by AI.
  
**🔥 Overview**
Content creators spend hours manually rewatching footage, identifying engaging moments, clipping segments, reframing to vertical, and adding captions.
AttentionX automates the entire pipeline, turning long videos into ready-to-publish short-form content in minutes.

**📸 Screenshots**
1.<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/ea1a91c6-2c06-499f-95c2-9049771ee4e4" />

2.<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/2b50dcd0-b6ec-40c3-a333-88707ccdf469" />

3.<img width="1916" height="1073" alt="3" src="https://github.com/user-attachments/assets/d60d8ada-1f51-4ea7-b645-c4138c3d5266" />

4.<img width="1915" height="1037" alt="4" src="https://github.com/user-attachments/assets/c1020693-3d7a-484b-a9f3-ba934fa9d74d" />

5.<img width="1920" height="1080" alt="5" src="https://github.com/user-attachments/assets/0c79bedd-626a-4447-ace0-f80ac1c166ab" />



**🚀 What It Does**
  📤 Upload long-form videos
  🎙️ AI transcribes audio with word-level timestamps
  🎯 Detects emotional peaks & high-engagement moments
  ✂️ Automatically generates short clips
  📱 Exports vertical (9:16) videos with captions


**✨ Features**
  1. Emotional Peak Detection: AI analyzes transcript sentiment and narrative flow to identify viral-worthy moments
  2. Dynamic Captions: Choose from 3 styles:
    🎤 Karaoke (word-by-word highlight)
    💪 Bold (sentence emphasis)
    ✨ Minimal (clean subtitles)
  3. Timestamp-Based Highlights: Clips include precise start/end times with emotion labels & sentiment scores
  4. Smart Vertical Crop: Automatically converts clips to 9:16 format for TikTok, Reels & Shorts
  5. Phone Mockup Preview: Preview clips inside a realistic mobile frame
  6. Clip Export & Download: Export MP4 videos with burned captions + downloadable SRT files
  7. Session Resumption: Resume processing even after closing the tab
  8. Real-Time Pipeline UI: Live progress tracking with animated processing stages

**🧠 AI Pipeline**
  _Upload → Transcription → Peak Detection → Clip Generation → Captions & Thumbnails → ✅ Ready_

📂 Project Structure
  src/
  ├── app/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   └── api/
  │       ├── videos/
  │       └── clips/
  ├── components/
  │   ├── hero-section.tsx
  │   ├── upload-zone.tsx
  │   ├── processing-pipeline.tsx
  │   ├── clip-results.tsx
  │   ├── clip-card.tsx
  │   ├── clip-detail.tsx
  │   ├── clip-video-player.tsx
  │   ├── phone-preview.tsx
  │   └── ui/
  ├── hooks/
  │   └── use-toast.ts
  └── lib/
      ├── db.ts
      ├── store.ts
      ├── types.ts
      └── utils.ts

**⚙️ Getting Started**
  Prerequisites:
    Bun runtime
    ffmpeg installed and available in PATH
  
  Installation:
    git clone https://github.com/<your-username>/attentionx.git
    cd attentionx
    bun install
    bun run db:push
    bun run dev
    Run the App

Open in your browser:
  http://localhost:3000


**💡 Use Cases**
  Content creators & YouTubers
  Podcasters
  Educators & mentors
  Social media managers
  Marketing teams

**📈 Future Improvements**
  Multi-language transcription
  Face tracking for smarter cropping
  Auto-posting to social platforms
  Virality score prediction
  Team collaboration features

**🤝 Contributing**
  Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.
