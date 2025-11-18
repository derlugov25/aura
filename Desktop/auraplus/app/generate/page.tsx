"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Video, Loader2, Download, Play, Home, Sparkles as SparklesIcon, Settings, History, User } from "lucide-react";
import Link from "next/link";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

export default function GeneratePage() {
    const [prompt, setPrompt] = useState("");
    const [duration, setDuration] = useState("10");
    const [aspectRatio, setAspectRatio] = useState("16:9");
    const [style, setStyle] = useState("realistic");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError("Пожалуйста, введите описание видео");
            return;
        }

        setIsGenerating(true);
        setError(null);
        setGeneratedVideo(null);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt,
                    duration: parseInt(duration),
                    aspectRatio,
                    style,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ошибка при генерации видео");
            }

            const data = await response.json();
            setGeneratedVideo(data.videoUrl || data.video_id);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Произошла ошибка");
        } finally {
            setIsGenerating(false);
        }
    };

    const sidebarLinks = [
        {
            label: "Главная",
            href: "/",
            icon: <Home className="w-5 h-5" />,
        },
        {
            label: "Создать контент",
            href: "/generate",
            icon: <SparklesIcon className="w-5 h-5" />,
        },
        {
            label: "История",
            href: "/history",
            icon: <History className="w-5 h-5" />,
        },
        {
            label: "Профиль",
            href: "/profile",
            icon: <User className="w-5 h-5" />,
        },
        {
            label: "Настройки",
            href: "/settings",
            icon: <Settings className="w-5 h-5" />,
        },
    ];

    return (
        <Sidebar>
            <div className="flex min-h-screen bg-white dark:bg-neutral-950 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>

                {/* Sidebar */}
                <SidebarBody className="relative z-50">
                    <div className="flex flex-col gap-6 h-full pt-8">
                        <div className="flex-1">
                            {sidebarLinks.map((link, index) => (
                                <SidebarLink key={index} link={link} />
                            ))}
                        </div>
                    </div>
                </SidebarBody>

                {/* Main Content */}
                <div className="flex-1 relative z-10 overflow-y-auto">
                    <div className="container mx-auto px-4 py-12 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-center mb-12"
                        >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {("Генерируй с Aura+").split(" ").map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Левая колонка - Форма */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                    <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white">
                                        Параметры генерации
                                    </h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                                Описание видео *
                                            </label>
                                            <Textarea
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                                placeholder="Опишите, какое видео вы хотите создать. Например: 'Кот играет на пианино в космосе'"
                                                className="min-h-[120px] resize-none"
                                                disabled={isGenerating}
                                            />
                                            <p className="text-xs text-neutral-500 mt-1">
                                                Чем подробнее описание, тем лучше результат
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                                    Длительность (сек)
                                                </label>
                                                <Select
                                                    value={duration}
                                                    onValueChange={setDuration}
                                                    disabled={isGenerating}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="5">5 секунд</SelectItem>
                                                        <SelectItem value="10">10 секунд</SelectItem>
                                                        <SelectItem value="15">15 секунд</SelectItem>
                                                        <SelectItem value="30">30 секунд</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                                    Соотношение сторон
                                                </label>
                                                <Select
                                                    value={aspectRatio}
                                                    onValueChange={setAspectRatio}
                                                    disabled={isGenerating}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="16:9">16:9 (Горизонтальное)</SelectItem>
                                                        <SelectItem value="9:16">9:16 (Вертикальное)</SelectItem>
                                                        <SelectItem value="1:1">1:1 (Квадрат)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                                Стиль
                                            </label>
                                            <Select
                                                value={style}
                                                onValueChange={setStyle}
                                                disabled={isGenerating}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="realistic">Реалистичный</SelectItem>
                                                    <SelectItem value="cinematic">Кинематографичный</SelectItem>
                                                    <SelectItem value="animated">Анимационный</SelectItem>
                                                    <SelectItem value="artistic">Художественный</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                                            </div>
                                        )}

                                        <Button
                                            onClick={handleGenerate}
                                            disabled={isGenerating || !prompt.trim()}
                                            className="w-full h-12 text-lg font-semibold"
                                            size="lg"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Генерация...
                                                </>
                                            ) : (
                                                <>
                                                    <Video className="w-5 h-5 mr-2" />
                                                    Создать видео
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Правая колонка - Предпросмотр */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                    <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white">
                                        Результат
                                    </h2>

                                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                                        {isGenerating ? (
                                            <div className="text-center">
                                                <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
                                                <p className="text-neutral-600 dark:text-neutral-400">
                                                    Генерация видео...
                                                </p>
                                                <p className="text-sm text-neutral-500 mt-2">
                                                    Это может занять несколько минут
                                                </p>
                                            </div>
                                        ) : generatedVideo ? (
                                            <div className="w-full h-full relative">
                                                <video
                                                    src={generatedVideo}
                                                    controls
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute bottom-4 right-4 flex gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="secondary"
                                                        onClick={() => {
                                                            const link = document.createElement("a");
                                                            link.href = generatedVideo;
                                                            link.download = "generated-video.mp4";
                                                            link.click();
                                                        }}
                                                    >
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Скачать
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center p-8">
                                                <Video className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                                                <p className="text-neutral-600 dark:text-neutral-400">
                                                    Ваше видео появится здесь
                                                </p>
                                                <p className="text-sm text-neutral-500 mt-2">
                                                    Заполните форму и нажмите "Создать видео"
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {generatedVideo && (
                                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                                ✓ Видео успешно создано! Вы можете скачать его или создать новое.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* История генераций */}
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                    <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                                        История
                                    </h3>
                                    <p className="text-sm text-neutral-500">
                                        Ваши предыдущие генерации появятся здесь
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

