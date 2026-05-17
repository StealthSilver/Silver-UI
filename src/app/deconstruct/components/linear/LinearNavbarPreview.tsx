import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LinearNavbar } from "./LinearNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function LinearNavbarPreview() {
  return (
    <div className={cn("w-full bg-[#08090a]", inter.className)}>
      <LinearNavbar />
    </div>
  );
}
