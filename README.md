# Музей «Історія становлення української нації»

Сучасний Angular-сайт музею [museumsun.org](https://www.museumsun.org) з SSR/prerender, Tailwind CSS та адаптивним патріотичним дизайном.

## Стек

- Angular 21 (standalone components, signals, OnPush)
- TypeScript (strict)
- Tailwind CSS v4
- Angular Router з lazy loading
- Angular SSR / prerender для SEO

## Маршрути

| Шлях | Сторінка |
|------|----------|
| `/` | Головна |
| `/aboutmuseum` | Про музей |
| `/posters` | Афіша |
| `/education` | Освіта |
| `/visitors` | Відвідувачам |
| `/history` | Історія |
| `/contacts` | Контакти |
| `/charity` | Благодійний фонд |
| `/donation` | Підтримайте нас |
| `/forpartners` | Партнерам |
| `/presscenter` | Прес-центр |
| `/values` | Наші цінності |
| `/appeal` | Звернення засновника |
| `/person/:id` | Сторінка експонату |

## Запуск

```bash
cd museumsun.itkamianets.com
npm install
npm start
```

Відкрийте [http://localhost:4200](http://localhost:4200).

## Збірка

```bash
npm run build
```

Статичний prerender-вивід: `dist/app/browser`.

## SSR-сервер (опційно)

```bash
npm run serve:ssr:app
```

## Структура

```text
src/app/
  core/           — константи музею (посилання, зображення)
  directives/     — scroll reveal, animated counter
  layouts/        — header, footer
  pages/
    home/         — головна з усіма секціями
    content/      — внутрішні сторінки
    person/       — експонати
src/data/museum/  — контент (експонати, партнери, тексти)
```

## Дизайн

- Палітра: `#0a0f2e`, `#f5c518`, `#ffffff`, `#1a1a2e`
- Шрифти: Playfair Display + Inter
- Темна тема за замовчуванням, перемикач у хедері
- Glassmorphism, parallax hero, flip-картки експонатів

## Вимоги

- Node.js 20+
- npm 11+

## Ліцензія

MIT
