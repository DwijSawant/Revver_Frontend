import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Reever Solar',
  description: 'Harnessing the power of the sun for a brighter future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@500;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
