# Инструкция по настройке Vercel

## Проблема
Git репозиторий находится в `/Users/sergeyderlugov`, а проект в подпапке `Desktop/auraplus/`.

## Решение 1: Настроить Root Directory в Vercel (РЕКОМЕНДУЕТСЯ)

1. Откройте Vercel Dashboard
2. Выберите проект "aura"
3. Перейдите в **Settings** → **General**
4. Найдите секцию **Root Directory**
5. Установите значение: `Desktop/auraplus`
6. Нажмите **Save**
7. Перейдите в **Deployments** и нажмите **Redeploy**

## Решение 2: Переместить .git в папку проекта

Если хотите, чтобы репозиторий был в корне проекта:

```bash
cd /Users/sergeyderlugov/Desktop/auraplus
git init
git remote add origin https://github.com/derlugov25/aura.git
git add .
git commit -m "fix: move git repo to project root"
git push -f origin main
```

**Внимание:** Это перезапишет историю на GitHub!

