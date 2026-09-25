# Как показать заказчику сайт, guide и код

> Простая инструкция для начинающих

---

## Где что лежит на вашем компьютере

Всё в одной папке проекта:

```
C:\Users\kiaro\Projects\AmtPilot\
```

### Документы (Design Guide, стратегия)

| Файл | Что это |
|------|---------|
| `docs\arcwell-design-guide.md` | **Design Guide** — цвета, шрифты, кнопки |
| `docs\arcwell-dental-design-strategy.md` | Стратегия (англ.) — то, что вы вставили в чат |
| `docs\arcwell-obosnovanie-dlya-zakazchika.md` | Обоснение для заказчика (рус.) |
| `docs\kak-pokazat-zakazchiku.md` | Эта инструкция |

### Код сайта

| Папка / файл | Что это |
|--------------|---------|
| `dental.html` | Точка входа страницы |
| `src\dental\` | Весь код homepage |
| `public\dental\` | Картинки (PNG) |

### Копия на GitHub (уже загружена ранее)

```
C:\Users\kiaro\Projects\halden-test\amtpilot-dental\
```

Ссылка: https://github.com/BeiraMar1111/test/tree/main/amtpilot-dental

---

## Как ОТКРЫТЬ Design Guide у себя

### Способ 1 — в Cursor (рекомендуется)

1. Слева нажмите **Explorer** (иконка файлов)
2. Откройте папку `docs`
3. Кликните `arcwell-design-guide.md`
4. Чтобы красиво посмотреть: **Ctrl+Shift+V** (Markdown Preview)

### Способ 2 — в проводнике Windows

1. Win+E → вставьте в адресную строку:
   ```
   C:\Users\kiaro\Projects\AmtPilot\docs
   ```
2. Двойной клик по `arcwell-design-guide.md`
3. Откроется в блокноте или Cursor

### Способ 3 — отправить заказчику как PDF

1. Откройте файл в Cursor
2. Ctrl+Shift+V → preview
3. Печать → «Сохранить как PDF»  
   **или** скопируйте текст в Google Docs / Notion и отправьте ссылку

---

## Как ПОСМОТРЕТЬ сайт у себя (локально)

> `dental.html` сам по себе **не работает** если просто открыть двойным кликом.  
> Это React-проект — нужен dev-сервер.

1. Откройте терминал в Cursor: **Terminal → New Terminal**
2. Выполните:

```powershell
cd C:\Users\kiaro\Projects\AmtPilot
npm run dev
```

3. Откройте в браузере:
   ```
   http://localhost:5173/dental.html
   ```

Чтобы остановить сервер: **Ctrl+C** в терминале.

---

## Как дать заказчику ССЫЛКУ на сайт (онлайн)

Самый простой способ для новичка — **Netlify Drop** (бесплатно, без регистрации можно).

### Шаг 1 — собрать готовую версию

В терминале:

```powershell
cd C:\Users\kiaro\Projects\AmtPilot
npm run build
```

Появится папка `dist` — это готовый сайт.

### Шаг 2 — залить на Netlify

1. Откройте https://app.netlify.com/drop
2. Перетащите **всю папку** `dist` в окно браузера
3. Netlify даст ссылку вида `https://random-name-123.netlify.app`
4. Страница dental будет по адресу:
   ```
   https://random-name-123.netlify.app/dental.html
   ```
5. Отправьте эту ссылку заказчику

### Альтернативы

| Сервис | Сложность | Комментарий |
|--------|-----------|-------------|
| **Netlify Drop** | ⭐ Легко | Drag & drop папки dist |
| **Vercel** | ⭐⭐ | Нужен аккаунт GitHub |
| **GitHub Pages** | ⭐⭐⭐ | Настройка в репозитории |
| **ZIP + WeTransfer** | ⭐ | Отправить dist.zip, клиент не откроет без хостинга |

---

## Как отправить заказчику GUIDE

**Вариант A — файл**
- Отправьте `arcwell-design-guide.md` или PDF через email / Telegram / Drive

**Вариант B — ссылка на GitHub**
- https://github.com/BeiraMar1111/test/blob/main/amtpilot-dental/docs/arcwell-dental-design-strategy.md
- (Design Guide нужно допушить — см. ниже)

**Вариант C — Notion / Google Docs**
- Вставьте содержимое → «Поделиться» → ссылка для просмотра

---

## Как отправить заказчику КОД

**Уже на GitHub:**
```
https://github.com/BeiraMar1111/test/tree/main/amtpilot-dental
```

Заказчик может:
- Просто посмотреть файлы в браузере
- Скачать ZIP: зелёная кнопка **Code → Download ZIP**

**Локально у вас:**
```
C:\Users\kiaro\Projects\AmtPilot\src\dental\
C:\Users\kiaro\Projects\AmtPilot\public\dental\
```

---

## Что отправить заказчику одним пакетом

Минимальный набор для review:

1. **Ссылка на live demo** — Netlify URL + `/dental.html`
2. **Design Guide** — PDF или ссылка на markdown
3. **Strategy doc** — `arcwell-dental-design-strategy.md` или русская версия
4. **GitHub** — ссылка на код (опционально)

Пример сообщения заказчику:

> Добрый день!  
> Live preview: https://your-site.netlify.app/dental.html  
> Design guide (PDF): [вложение]  
> Strategy document: [ссылка]  
> Source code: https://github.com/BeiraMar1111/test/tree/main/amtpilot-dental  

---

## Частые вопросы

**Почему dental.html не открывается двойным кликом?**  
Потому что это React + Vite. Нужен `npm run dev` или собранная версия из `dist`.

**Где dist после build?**  
`C:\Users\kiaro\Projects\AmtPilot\dist\`

**Design guide не на GitHub?**  
Новый файл `arcwell-design-guide.md` пока только локально в AmtPilot. Скопируйте в halden-test и сделайте push (см. команды ниже).

---

## Обновить GitHub (если нужно)

```powershell
cd C:\Users\kiaro\Projects\halden-test
robocopy ..\AmtPilot\docs arcwell-design-guide-temp arcwell-design-guide.md
robocopy ..\AmtPilot\docs arcwell-design-guide-temp kak-pokazat-zakazchiku.md
mkdir amtpilot-dental\docs -Force
copy arcwell-design-guide-temp\*.md amtpilot-dental\docs\
robocopy ..\AmtPilot\src\dental amtpilot-dental\src\dental /E
robocopy ..\AmtPilot\public\dental amtpilot-dental\public\dental /E
copy ..\AmtPilot\dental.html amtpilot-dental\
git add amtpilot-dental
git commit -m "Update dental homepage and design guide"
git push
```
