import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { prompt, duration, aspectRatio, style } = body;

        if (!prompt) {
            return NextResponse.json(
                { error: "Промпт обязателен" },
                { status: 400 }
            );
        }

        // TODO: Замените на реальный API ключ Sora
        const SORA_API_KEY = process.env.SORA_API_KEY || "";
        const SORA_API_URL = process.env.SORA_API_URL || "https://api.openai.com/v1/video/generations";

        // Вызов Sora API
        const response = await fetch(SORA_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SORA_API_KEY}`,
            },
            body: JSON.stringify({
                model: "sora",
                prompt: prompt,
                duration: duration,
                aspect_ratio: aspectRatio,
                style: style,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                errorData.error?.message || 
                `Sora API error: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();

        // Sora API возвращает video_id или video_url
        // В зависимости от API, может потребоваться polling для получения готового видео
        return NextResponse.json({
            video_id: data.id || data.video_id,
            videoUrl: data.video_url || data.url,
            status: data.status || "processing",
            message: "Видео создается. Это может занять несколько минут.",
        });

    } catch (error) {
        console.error("Error generating video:", error);
        
        // Для разработки - возвращаем mock данные
        if (process.env.NODE_ENV === "development") {
            return NextResponse.json({
                video_id: "mock_video_" + Date.now(),
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                status: "completed",
                message: "Mock видео (для разработки)",
            });
        }

        return NextResponse.json(
            { 
                error: error instanceof Error 
                    ? error.message 
                    : "Ошибка при генерации видео. Убедитесь, что SORA_API_KEY настроен правильно." 
            },
            { status: 500 }
        );
    }
}

