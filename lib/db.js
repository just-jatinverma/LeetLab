import { PrismaClient } from "@prisma/client";

const globalThisForPrisma = globalThis;

export const db = globalThisForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThisForPrisma.prisma = db;
