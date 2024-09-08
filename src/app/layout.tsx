import { Header } from "@/components/Header";
import "../style/global.sass"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
};
