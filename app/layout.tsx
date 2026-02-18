import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ghulam Mustafa Keerio | ML Engineer & Data Scientist',
  description: 'Machine Learning Engineer specializing in Emotion AI with 91.3% accuracy in audio recognition. Building intelligent systems with Python, PyTorch, and modern web technologies.',
  keywords: 'machine learning, emotion AI, data scientist, portfolio, audio recognition, NLP, deep learning, PyTorch, TensorFlow',
  authors: [{ name: 'Ghulam Mustafa Keerio' }],
  openGraph: {
    title: 'Ghulam Mustafa Keerio - ML Engineer',
    description: 'Building intelligent systems that understand human emotions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghulam Mustafa Keerio - ML Engineer',
    description: 'Emotion AI | 91.3% Accuracy | Open Source',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
