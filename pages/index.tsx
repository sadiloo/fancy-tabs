import Image from 'next/image';
import { Inter } from 'next/font/google';
import TabsContainer from '@/components/Tabs/TabsContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center ${inter.className}`}>
      <TabsContainer />
    </main>
  );
}
