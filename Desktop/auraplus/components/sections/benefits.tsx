"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Library, Brain } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            icon: Zap,
            title: "Быстро",
            description: "Несколько минут от идеи до публикации",
            stat: "70-90%",
            statLabel: "экономия времени",
        },
        {
            icon: Library,
            title: "Библиотека хуков",
            description: "Проверенные решения для вашей ниши",
            stat: "1000+",
            statLabel: "готовых шаблонов",
        },
        {
            icon: Brain,
            title: "ИИ технологии",
            description: "Кастомные модели под требования рынка",
            stat: "AI",
            statLabel: "поколение",
        },
        {
            icon: Clock,
            title: "Автоматизация",
            description: "Конвейер и автошаги для максимальной эффективности",
            stat: "24/7",
            statLabel: "работа",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-black py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Преимущества
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Почему выбирают Aura+ для создания контента
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                    {benefit.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                                    {benefit.description}
                                </p>
                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-sm text-neutral-500 dark:text-neutral-500">
                                        {benefit.statLabel}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

