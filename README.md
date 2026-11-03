# Лабораторная работа №1 — карточки товаров

Простое приложение на React: пять карточек ProductCard, данные через props, независимые счётчики через useState. Картинки мемов находятся в public/products и работают без интернета.

## Запуск

Открыть терминал в папке проекта:

```cmd
npm install
npm run dev
```

Открыть адрес, который выведет Vite. Для остановки — Ctrl+C.

## Файлы

- src/App.jsx — страница и пять карточек.
- src/ProductCard.jsx — props, useState и кнопка добавления.
- src/App.css и src/index.css — стили.
- reports/Lab1_Levushkin_Report.docx — отчёт.

После перезагрузки счётчики сбрасываются: количество хранится только в useState.

## Проверка

```cmd
npm run build
npm run lint
```

## Изображения

Шаблоны мемов использованы для учебной работы:
- Дим Димыч: https://www.meme-arsenal.com/en/create/chose?tag=dim+dimych+from+fixiki
- Мелстрой в очках: https://www.meme-arsenal.com/en/create/template/12551002
- Мелстрой: https://www.meme-arsenal.com/create/template/11694350
- Две кнопки: https://i.imgflip.com/1g8my4.jpg
- Съезд с дороги: https://i.imgflip.com/22bdq6.jpg
