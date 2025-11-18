"use client";

import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Home, Sparkles as SparklesIcon, History, Settings, User, Bell, Globe, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

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
                                {("Настройки").split("").map((letter, letterIndex) => (
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

                        <div className="space-y-6">
                            {/* Общие настройки */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg"
                            >
                                <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    Общие настройки
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                            Язык
                                        </label>
                                        <Select defaultValue="ru">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ru">Русский</SelectItem>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="de">Deutsch</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                            Часовой пояс
                                        </label>
                                        <Select defaultValue="moscow">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="moscow">Москва (UTC+3)</SelectItem>
                                                <SelectItem value="kiev">Киев (UTC+2)</SelectItem>
                                                <SelectItem value="almaty">Алматы (UTC+6)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Уведомления */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg"
                            >
                                <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white flex items-center gap-2">
                                    <Bell className="w-5 h-5" />
                                    Уведомления
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-neutral-900 dark:text-white">
                                                Email уведомления
                                            </p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                Получать уведомления на email
                                            </p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notifications}
                                                onChange={(e) => setNotifications(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-neutral-900 dark:text-white">
                                                Уведомления о готовности видео
                                            </p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                Получать уведомления когда видео готово
                                            </p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Внешний вид */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg"
                            >
                                <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white flex items-center gap-2">
                                    {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                                    Внешний вид
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-neutral-900 dark:text-white">
                                                Темная тема
                                            </p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                Переключить темную тему
                                            </p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={darkMode}
                                                onChange={(e) => setDarkMode(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Сохранить */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="pt-4"
                            >
                                <Button className="w-full" size="lg">
                                    Сохранить настройки
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}



