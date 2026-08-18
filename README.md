# express-prisma-postgres-starter
cara jalanin:

npm install

cp .env.example .env

npm run docker:up

npx prisma migrate dev --name init

npm run dev



Catatan teknis singkat:

lib/prisma.js dibuat sebagai singleton agar node --watch tidak membuka koneksi Prisma berulang kali setiap kali file di-reload — ini masalah umum yang sering luput di boilerplate lain.
server.js sudah punya contoh CRUD dasar (GET /users, GET /users/:id, POST /users), 404 handler, dan graceful shutdown untuk prisma.$disconnect().
docker-compose.yml pakai postgres:16-alpine + healthcheck, dan kredensialnya ambil dari .env supaya konsisten dengan DATABASE_URL.
