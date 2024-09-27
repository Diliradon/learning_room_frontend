import SideBar from '@/components/SideBar/Sidebar';

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <SideBar />
      {children}
    </div>
  );
}
