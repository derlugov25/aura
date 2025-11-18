import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-neutral-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          Страница не найдена
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Запрашиваемая страница не существует
        </p>
        <Link href="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
}

