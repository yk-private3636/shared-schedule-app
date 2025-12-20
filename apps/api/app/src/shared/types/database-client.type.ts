/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { PrismaClient } from "@prisma/client";

export interface WriterClient extends PrismaClient {}
export interface ReaderClient extends PrismaClient {}
