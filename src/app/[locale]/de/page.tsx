"use client";
import ActivityHero from '../../../components/ActivityHero';
import MemberCards from '../../../components/MemberCards';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
        <ActivityHero />
        <h2 style={{ marginTop: 32 }}>{t('home.members')}</h2>
        <MemberCards />
      </div>
    </main>
  );
}
