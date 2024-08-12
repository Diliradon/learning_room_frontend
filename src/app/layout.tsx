import type { Metadata } from 'next';

import { ReduxProvider } from '@/redux/provider';
import '../styles/globals.css';
import SidebarProvider from '@/contexts/SideBarContext';


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
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
