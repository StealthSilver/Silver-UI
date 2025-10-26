"use client";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GithubLink() {
  return (
    <Link
      href={"https://github.com/StealthSilver/Silver-UI"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent dark:text-neutral-400 dark:hover:bg-neutral-900"
      )}
    >
      <FaGithub className="h-[18px] w-[18px]" />
    </Link>
  );
}
export function TwitterLink() {
  return (
    <Link
      href={"https://x.com/silver_srs"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent dark:text-neutral-400 dark:hover:bg-neutral-900"
      )}
    >
      <FaTwitter className="h-[18px] w-[18px]" />
    </Link>
  );
}
