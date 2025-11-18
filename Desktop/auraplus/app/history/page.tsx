"use client";

import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Home, Sparkles as SparklesIcon, History, Settings, User, Video, Download, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
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

    // Mock данные для истории
    const historyItems = [
        {
            id: 1,
            prompt: "Кот играет на пианино в космосе",
            duration: "10 секунд",
            aspectRatio: "16:9",
            style: "Реалистичный",
            createdAt: "2024-01-15 14:30",
            status: "completed",
        },
        {
            id: 2,
            prompt: "Город будущего с летающими машинами",
            duration: "15 секунд",
            aspectRatio: "9:16",
            style: "Кинематографичный",
            createdAt: "2024-01-14 10:15",
            status: "completed",
        },
        {
            id: 3,
            prompt: "Океан с дельфинами под водой",
            duration: "30 секунд",
            aspectRatio: "16:9",
            style: "Художественный",
            createdAt: "2024-01-13 16:45",
            status: "processing",
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
                                {("История").split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={letterIndex}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: letterIndex * 0.03,
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
                            </h1>
                        </motion.div>

                        <div className="space-y-4">
                            {historyItems.length > 0 ? (
                                historyItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Video className="w-5 h-5 text-neutral-500" />
                                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                                        {item.prompt}
                                                    </h3>
                                                    {item.status === "processing" && (
                                                        <span className="px-2 py-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded">
                                                            В обработке
                                                        </span>
                                                    )}
                                                    {item.status === "completed" && (
                                                        <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded">
                                                            Готово
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                                    <span>Длительность: {item.duration}</span>
                                                    <span>Формат: {item.aspectRatio}</span>
                                                    <span>Стиль: {item.style}</span>
                                                </div>
                                                <p className="text-xs text-neutral-500">
                                                    Создано: {item.createdAt}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                {item.status === "completed" && (
                                                    <>
                                                        <Button size="sm" variant="outline">
                                                            <Download className="w-4 h-4 mr-2" />
                                                            Скачать
                                                        </Button>
                                                        <Button size="sm" variant="outline">
                                                            <Video className="w-4 h-4 mr-2" />
                                                            Просмотр
                                                        </Button>
                                                    </>
                                                )}
                                                <Button size="sm" variant="ghost">
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <History className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        История генераций пуста
                                    </p>
                                    <Link href="/generate">
                                        <Button className="mt-4">Создать первое видео</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

