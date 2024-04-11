import { NavHeader } from "@/ui/nav/navHeader";

export default function components() {
  return (
    <main className="h-screen p-4">
      <NavHeader isActive={true} href="/home">home</NavHeader>
      <NavHeader isActive={false} href="/home">work</NavHeader>
      <NavHeader isActive={false} href="/home">contact</NavHeader>
      <NavHeader isActive={false} href="/home">blog</NavHeader>
    </main>
  );
}
