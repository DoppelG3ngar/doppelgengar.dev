import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyle Moreira",
  description: "A portfolio for Kyle Moreira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
