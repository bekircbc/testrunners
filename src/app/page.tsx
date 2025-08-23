"use client";
import NewsSlider from '../components/NewsSlider';
import MemberCards from '../components/MemberCards';

export default function Home() {
  return (
    <main>
      {/* News Bölümü */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 32,
          position: 'relative',
          minHeight: 350,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <img
          src="/activity1.jpg"
          alt="News Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.25,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>News</h1>
          <NewsSlider />
        </div>
      </section>

      {/* Geçiş SVG */}
      <div style={{ width: '100%', margin: '5px 0' }}>
        <svg viewBox="0 0 1440 40" width="100%" height="40" preserveAspectRatio="none" style={{ display: 'block', margin: '0' }}>
          <path fill="#f5f5f5" d="M0,0 C480,40 960,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Über uns Bölümü */}
  <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 5 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Über uns</h2>
        <div style={{ maxWidth: 1200, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <MemberCards />
        </div>
      </section>
    </main>
  );
}
