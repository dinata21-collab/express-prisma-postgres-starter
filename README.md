# express-prisma-postgres-starter
Syarat sebelum menjalankan starter ini:

Wajib terinstall di komputer:

Node.js versi 20 ke atas (karena pakai node --watch, fitur native yang stabil mulai Node 20). Cek: node -v
Docker & Docker Compose (biasanya sudah satu paket kalau pakai Docker Desktop). Cek: docker -v dan docker compose version
npm (bawaan Node.js) — atau bisa ganti pnpm/yarn kalau kamu prefer, tinggal sesuaikan lockfile-nya sendiri.
Git (kalau mau langsung push ke GitHub sebagai template repo).

Port yang harus kosong/tidak bentrok:

3000 → dipakai Express server (bisa diganti lewat .env → PORT)
5432 → dipakai PostgreSQL container (bisa diganti lewat .env → POSTGRES_PORT, kalau di komputer kamu sudah ada Postgres lokal yang jalan di 5432)

Tidak wajib, tapi enak dipunya:

Prisma Studio otomatis ikut ter-install lewat devDependencies, jadi tidak perlu install terpisah.
VS Code + ekstensi Prisma untuk syntax highlighting di schema.prisma.
Akun GitHub kalau memang tujuannya dijadikan template repository.

Yang TIDAK perlu diinstall manual:

PostgreSQL lokal — tidak perlu, karena sudah jalan di dalam Docker container, jadi komputer kamu tetap bersih.



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
