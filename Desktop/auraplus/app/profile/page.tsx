"use client";

import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Home, Sparkles as SparklesIcon, History, Settings, User, Camera, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
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
                    <div className="container mx-auto px-4 py-12 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                                {("Профиль").split("").map((letter, letterIndex) => (
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg"
                        >
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                                        А
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                    Пользователь
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    user@example.com
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                        Имя
                                    </label>
                                    <Input defaultValue="Пользователь" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                        Email
                                    </label>
                                    <Input type="email" defaultValue="user@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                        Дата регистрации
                                    </label>
                                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>15 января 2024</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                    <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                                        Статистика
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white">12</div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Видео</div>
                                        </div>
                                        <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white">45</div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">Кредитов</div>
                                        </div>
                                        <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white">8.5</div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">ГБ</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button className="w-full">Сохранить изменения</Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

