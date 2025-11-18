"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhatWeDo() {
    const features = [
        {
            title: "Автоматизация создания контента при помощи ИИ",
            description: "Полностью автоматизированный процесс создания видео контента с использованием искусственного интеллекта",
        },
        {
            title: "Экономим время креаторам",
            description: "Минус 70–90% временных затрат на ролик за счёт конвейера и автошагов",
        },
        {
            title: "Библиотека проверенных хуков",
            description: "Генерация под нишу → меньше страха «промахнуться»",
        },
        {
            title: "Кастомные модели",
            description: "Обучаем свои кастомные модели для соответствия требованиям рынка",
        },
    ];

    return (
        <section className="min-h-screen bg-white dark:bg-neutral-950 py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Что мы делаем
                    </h2>
                    <p className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Aura+ — несколько минут от идеи до публикации короткого видео
                    </p>
                    <Link href="/generate">
                        <Button size="lg" className="text-lg px-8 py-6">
                            Попробовать сейчас
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

