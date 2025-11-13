import { PrismaClient } from "@prisma/client";
import { PrismaTx } from "../types/prisma.type";

export interface IDatabaseClientService {
  /**
   * 書き込み用クライアント（Primary DB）
   * トランザクション、書き込み操作に使用
   */
  getWriteClient(): PrismaClient;

  /**
   * 読み込み用クライアント（Replica DB）
   * 読み取り専用操作に使用
   */
  getReadClient(): PrismaClient;

  /**
   * トランザクションを実行（Primary DB）
   */
  transaction<T>(fn: (tx: PrismaTx) => Promise<T>): Promise<T>;
}
