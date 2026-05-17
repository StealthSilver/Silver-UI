import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export default function DeconstructRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingShell contentMaxWidth="8xl" showHero={false} subduedLines>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {children}
      </div>
    </MarketingShell>
  );
}
