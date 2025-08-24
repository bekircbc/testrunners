"use client";
import ActivityHero from '../../../components/ActivityHero';
import MemberCards from '../../../components/MemberCards';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <main>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        {/* Top: activity image, title, description */}
        <ActivityHero />
        {/* Bottom: member cards */}
        <h2 style={{ marginTop: 32 }}>{t('members')}</h2>
        <MemberCards />
      </div>
    </main>
  );
}
