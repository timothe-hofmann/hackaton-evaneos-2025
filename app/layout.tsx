import ThemeProvider from './providers/ThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Interactive quiz application built with Next.js and Material-UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}