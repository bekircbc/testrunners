import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
