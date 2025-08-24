"use client";
import Header from "./Header";
import Footer from "./Footer";
import ClientMuiProvider from "./ClientMuiProvider";

export default function LayoutClient({ children, locale }: { children: React.ReactNode, locale: string }) {
  return (
    <ClientMuiProvider>
      <Header locale={locale}/>
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </ClientMuiProvider>
  );
}
