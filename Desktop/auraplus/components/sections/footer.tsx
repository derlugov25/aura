"use client";

export function Footer() {
    return (
        <footer className="bg-neutral-900 dark:bg-black text-neutral-400 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Aura+
                        </h3>
                        <p className="text-sm">
                            Генерация контента с помощью ИИ
                        </p>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>© 2024 Aura+. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

