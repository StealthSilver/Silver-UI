import { redirect } from "next/navigation";
import { getDeconstructSitePath, defaultDeconstructSite } from "@/app/deconstruct/lib/deconstructSites";

export default function DeconstructPage() {
  redirect(getDeconstructSitePath(defaultDeconstructSite.slug));
}
