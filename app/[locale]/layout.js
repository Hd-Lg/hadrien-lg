import './globals.css';
import Navbar from './components/Navbar';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Hadrien Lg',
  description: 'Personal portfolio website of Hadrien Lg',
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show 404 error if user wants unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body style={{ position: 'relative' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
