import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SaaS Dashboard',
  description: 'A modern SaaS dashboard app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
