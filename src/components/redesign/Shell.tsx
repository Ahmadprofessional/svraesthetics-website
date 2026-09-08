import { Header } from "@/components/redesign/Header";
import { Footer } from "@/components/redesign/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
