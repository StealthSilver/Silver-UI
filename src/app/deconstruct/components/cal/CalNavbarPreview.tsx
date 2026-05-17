import { CalNavbar } from "./CalNavbar";

export function CalNavbarPreview() {
  return (
    <div className="w-full bg-[#f4f4f4]">
      {/* Cal Sans — matches cal.com marketing site */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cal+Sans:wght@300;400&display=swap"
      />
      <CalNavbar />
    </div>
  );
}
