"use client";
import Header from "./Header";
import Footer from "./Footer";
import ClientMuiProvider from "./ClientMuiProvider";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ClientMuiProvider>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </ClientMuiProvider>
  );
}
