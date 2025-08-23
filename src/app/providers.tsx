import { NextIntlProvider } from 'next-intl';
import { ReactNode } from 'react';

export default function Providers({ children, messages }: { children: ReactNode; messages: any }) {
  return <NextIntlProvider messages={messages}>{children}</NextIntlProvider>;
}
