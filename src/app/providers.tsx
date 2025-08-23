import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

export default function Providers({ children, messages }: { children: ReactNode; messages: any }) {
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
