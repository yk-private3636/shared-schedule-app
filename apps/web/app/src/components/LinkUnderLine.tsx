import type { UrlObject } from "node:url";
import Link from "next/link";

export default function LinkUnderLine(
  pr: Readonly<{
    text: string;
    href: string | UrlObject;
  }>,
) {
  return (
    <span className="text-blue-600 hover:underline">
      <Link href={pr.href}>{pr.text}</Link>
    </span>
  );
}
