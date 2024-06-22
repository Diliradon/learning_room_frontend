import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Learning Room App',
  description: `The "Learning Room" app is designed to facilitate interactive learning experiences,
    allowing users to participate in virtual classrooms, collaborate on projects, access
    learning materials, and communicate effectively.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
