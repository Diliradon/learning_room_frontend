import SideBar from "@/components/SideBar/Sidebar";

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="bg-gray-10 flex h-screen">
        <SideBar />
        {children}
      </div>
    </main>
  );
}
