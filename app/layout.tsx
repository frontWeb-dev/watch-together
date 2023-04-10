import './globals.css';

export const metadata = {
  title: '가치와치',
  description: 'OTT 계정 공유 서비스',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <div className='mx-auto w-full max-w-md bg-white'>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
