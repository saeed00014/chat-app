import "./globals.css";
import Header from "./(portfolio)/_components/header/header";

export const metadata = {
  title: "saeed portfolio",
  description: "its my portfolio feel free to take a look",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-[100vw]">
        <Header />
        <main className="relative flex flex-col justify-center items-center h-full w-full [&>*]:text-white bg-g_Background_Black [&>*]:bg-g_Background_Black [&>*]:font-secondary">
          {children}
        </main>
      </body>
    </html>
  );
}
