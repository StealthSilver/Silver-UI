import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { VercelNavbar } from "./VercelNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function VercelNavbarPreview() {
  return (
    <div className={cn("w-full bg-black", inter.className)}>
      <VercelNavbar />
    </div>
  );
}
