# UX Analytics MVP

Laravel + React/Inertia + MySQL + rrweb + rrweb-player implementation for the controlled $15 milestone.

## What is included

- Email/password login and registration.
- Authenticated dashboard.
- Authenticated project/website creation.
- Project tracking key and install snippet.
- `public/tracker.js` that loads rrweb, masks inputs, batches events, and posts to `/api/track`.
- MySQL migrations for users, projects, user sessions, and session events.
- Session list and replay page using `rrweb-player`.
- Public test page at `/test/{tracking_key}` for generating sample sessions.
- Basic billing plans page.

## Local setup

This machine currently has PHP 8.5, but it is missing extensions Laravel/Composer need:

- `openssl`
- `mbstring`
- `pdo_mysql`

Enable those extensions or use a Laravel-ready PHP install, then run:

```powershell
cd "C:\Users\ALLAH\Downloads\UX Insight Hub"
composer install
Copy-Item .env.example .env
php artisan key:generate
```

Create the MySQL database configured in `.env`:

```sql
CREATE DATABASE ux_analytics CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Then migrate and run:

```powershell
php artisan migrate
php artisan serve
```

In another terminal, run the Vite dev server:

```powershell
npm install
npm run dev
```

Open `http://localhost:8000/register`, create an account, create a project, and install the snippet shown on the project page.

Use the project page's "Open tracking test page" link to generate a sample session, then check `/sessions` and open the replay.
