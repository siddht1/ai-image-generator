import ClientProvider from '@/components/ClientProvider';
import Header from '@/components/Header';
import PromptInput from '@/components/PromptInput';
import '../styles/globals.css';

export const metadata = {
  title: 'AI Art Generator',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* Header */}
          <Header />

          {/* Prompt Input */}
          <PromptInput />

          {children}
        </ClientProvider>

        </body>
    </html>
  )
}
