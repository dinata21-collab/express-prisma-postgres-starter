const { PrismaClient } = require("@prisma/client");

// Singleton pattern - mencegah multiple instance Prisma Client saat --watch reload
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;
