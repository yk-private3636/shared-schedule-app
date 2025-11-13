import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export interface WriterClient extends PrismaClient {};
export interface ReaderClient extends PrismaClient {};