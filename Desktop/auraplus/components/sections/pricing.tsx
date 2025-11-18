"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
    const plans = [
        {
            name: "Aura",
            price: "499",
            period: "руб / месяц",
            features: [
                "10 кредитов",
                "50 минут видео + 95 iStock",
                "2 UGC-рекламы с продуктовым ассетом",
                "30 секунд генеративного видео",
                "2 экспресс-клона",
                "3 пользователя, 100 ГБ хранилища",
                "Неограниченные экспорты",
            ],
            popular: false,
        },
        {
            name: "Mega Aura",
            price: "799",
            period: "руб / месяц",
            features: [
                "40 кредитов",
                "200 минут видео + 320 iStock",
                "8 UGC-реклам с продуктовым ассетом",
                "120 секунд генеративного видео",
                "5 экспресс-клонов",
                "3 пользователя, 400 ГБ хранилища",
                "Неограниченные экспорты",
            ],
            popular: true,
        },
        {
            name: "Supreme Aura",
            price: "1299",
            period: "руб / месяц",
            features: [
                "100 кредитов",
                "200 минут видео + 320 iStock",
                "5 генеративных UGC-объявлений",
                "300 секунд генеративного видео",
                "8 экспресс-клонов",
                "3 пользователя, 400 ГБ хранилища",
                "Неограниченные экспорты",
            ],
            popular: false,
        },
    ];

    return (
        <section className="min-h-screen bg-neutral-50 dark:bg-black py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Монетизация
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 transition-all duration-300 ${
                                plan.popular
                                    ? "border-blue-500 dark:border-blue-400 shadow-2xl scale-105"
                                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Популярный
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-400">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-neutral-700 dark:text-neutral-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${
                                    plan.popular
                                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                                        : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                                }`}
                            >
                                Выбрать план
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}



