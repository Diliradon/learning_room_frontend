import SideBar from '@/components/SideBar/Sidebar';

export default function TeachingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-full">
        <SideBar />
          {children}
      </div>
    </main>
  );
}
