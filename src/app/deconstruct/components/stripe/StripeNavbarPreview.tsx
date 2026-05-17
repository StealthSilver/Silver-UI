import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { StripeNavbar } from "./StripeNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function StripeNavbarPreview() {
  return (
    <div className={cn("w-full bg-white", inter.className)}>
      <StripeNavbar />
    </div>
  );
}
