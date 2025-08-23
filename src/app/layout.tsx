// This file is intentionally left blank. All layout logic is handled in [locale]/layout.tsx
"use client";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CacheProvider } from '@emotion/react';
import muiCache from '../muiCache';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <CacheProvider value={muiCache}>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {children}
                <div style={{ marginBottom: 20 }} />
              </div>
            </main>
            <div style={{ marginTop: 20 }}>
              <Footer />
            </div>
          </div>
        </CacheProvider>
      </body>
    </html>
  );
}
