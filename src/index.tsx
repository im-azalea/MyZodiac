import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Baca Zodiac Harian',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/zodiac-image.png`, // Ganti dengan URL gambar zodiac
    aspectRatio: '1:1',
  },
  input: {
    text: 'Apa zodiac Anda?',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Zodiac Harian',
  description: 'Dapatkan informasi zodiac harian Anda',
  openGraph: {
    title: 'Zodiac Harian',
    description: 'Dapatkan informasi zodiac harian Anda',
    images: [`${NEXT_PUBLIC_URL}/zodiac-image.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Zodiac Harian</h1>
      <p>Selamat datang! Temukan zodiac harian Anda di sini.</p>
    </>
  );
}
