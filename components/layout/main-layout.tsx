import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingButtons } from "@/components/ui/floating-buttons";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

    
<main className="pt-16 sm:pt-18 lg:pt-20">
  {children}
</main>

      <FloatingButtons />

      <Footer />
    </div>
  );
}