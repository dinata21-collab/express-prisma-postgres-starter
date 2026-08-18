# Express + Prisma + PostgreSQL (Docker) Starter

## Quick Start

```bash
npm install
cp .env.example .env
npm run docker:up          # jalankan PostgreSQL via Docker
npx prisma migrate dev --name init   # buat tabel dari schema
npm run dev                # jalankan server (node --watch)
```

Server jalan di `http://localhost:3000`.

## Struktur

```
.
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
├── server.js
├── lib/
│   └── prisma.js
└── prisma/
    └── schema.prisma
```

## Perintah berguna

| Command | Fungsi |
|---|---|
| `npm run docker:up` | Start container PostgreSQL |
| `npm run docker:down` | Stop container |
| `npm run prisma:migrate` | Jalankan migrasi Prisma |
| `npm run prisma:studio` | Buka Prisma Studio (GUI database) |
| `npm run dev` | Jalankan server dengan hot-reload (`node --watch`) |
