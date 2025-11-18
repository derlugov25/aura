# Aura+ - Платформа для генерации контента с помощью AI

Платформа для автоматизированного создания видео контента с использованием искусственного интеллекта.

## Возможности

- 🎬 Генерация видео контента за несколько минут
- 🤖 Автоматизация создания контента при помощи ИИ
- ⚡ Экономия 70-90% времени креаторам
- 📚 Библиотека проверенных хуков
- 🎨 Кастомные модели под требования рынка

## Getting Started

### Установка зависимостей

```bash
npm install
```

### Настройка Sora API

1. Создайте файл `.env.local` в корне проекта
2. Добавьте ваш API ключ Sora:

```env
SORA_API_KEY=your_sora_api_key_here
SORA_API_URL=https://api.openai.com/v1/video/generations
```

**Примечание:** В режиме разработки (development) без настроенного API ключа будет использоваться mock данные для тестирования интерфейса.

### Запуск сервера разработки

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
