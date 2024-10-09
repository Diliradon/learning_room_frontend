import SideBar from '@/components/SideBar/Sidebar';

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-screen bg-gray-10">
        <SideBar />
          {children}
      </div>
    </main>
  );
}
