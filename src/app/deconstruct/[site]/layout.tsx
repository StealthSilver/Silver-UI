import { DeconstructChrome } from "@/app/deconstruct/components/DeconstructChrome";

export default function DeconstructSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DeconstructChrome>{children}</DeconstructChrome>;
}
