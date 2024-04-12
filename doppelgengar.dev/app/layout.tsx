import type { Metadata } from 'next';
import '@/app/ui/styles/globals.css';
import NavHeader from './ui/navigation/nav-header';

export const metadata: Metadata = {
  title: 'Kyle Moreira Portfolio',
  description: 'A portfolio for Kyle Moreira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-background px-6 py-5 ">
        <div className="h-full overflow-hidden border bg-foreground p-3">
          <header className="fixed">
            <NavHeader />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
